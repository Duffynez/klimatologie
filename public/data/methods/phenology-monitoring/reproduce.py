"""Reproduce the example from the preserved USA-NPN response. Python 3, stdlib only.

Run: python reproduce.py
The JSON snapshot and this script must be in the same directory.
Input data: USA-NPN / NEON, CC BY 4.0. See example.json for attribution.
"""
import csv
import hashlib
import io
import json
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def calculate():
    raw = (ROOT / "harvard-leaves.json").read_bytes()
    rows = json.loads(raw)
    assert rows and all(r["site_id"] == 57027 and r["species_id"] == 3
                        and r["phenophase_id"] == 483 for r in rows)
    assert all("2016-01-01" <= r["observation_date"] <= "2016-05-31" for r in rows)
    # A deterministic teaching sample, not a representative estimate for the forest.
    selected_ids = sorted({r["individual_id"] for r in rows})[:3]
    selected = sorted((r for r in rows if r["individual_id"] in selected_ids),
                      key=lambda r: (r["individual_id"], r["observation_date"], r["observation_id"]))
    result = []
    for individual_id in selected_ids:
        visits = [r for r in selected if r["individual_id"] == individual_id]
        assert len({r["observation_date"] for r in visits}) == len(visits), "Duplicate date: review needed"
        assert all(r["phenophase_status"] in (0, 1) for r in visits), "Review unknown status before use"
        # -9999 is a missing conflict flag, not proof that a record has passed a quality check.
        assert all(str(r["observed_status_conflict_flag"]) in ("-9999", "0") for r in visits)
        first_yes = next(r for r in visits if r["phenophase_status"] == 1)
        before = [r for r in visits if r["observation_date"] < first_yes["observation_date"]
                  and r["phenophase_status"] == 0]
        assert before, "Onset has no preceding negative observation"
        last_no = before[-1]
        for r in visits:
            assert date.fromisoformat(r["observation_date"]).timetuple().tm_yday == r["day_of_year"]
        result.append({
            "individualId": individual_id, "plantTag": first_yes["plant_nickname"],
            "visitCount": len(visits), "lastNo": last_no["observation_date"],
            "firstYes": first_yes["observation_date"],
            "lastNoDay": last_no["day_of_year"], "firstYesDay": first_yes["day_of_year"],
            "intervalDays": (date.fromisoformat(first_yes["observation_date"]) -
                             date.fromisoformat(last_no["observation_date"])).days,
            "lastNoObservationId": last_no["observation_id"],
            "firstYesObservationId": first_yes["observation_id"],
        })
    fields = ["observation_id", "individual_id", "plant_nickname", "observation_date",
              "day_of_year", "phenophase_status", "observed_status_conflict_flag"]
    output = io.StringIO(newline="")
    writer = csv.DictWriter(output, fieldnames=fields, extrasaction="ignore", lineterminator="\n")
    writer.writeheader()
    writer.writerows(selected)
    return {"snapshotRows": len(rows), "selectedRows": len(selected), "plants": result}, output.getvalue(), hashlib.sha256(raw).hexdigest()


if __name__ == "__main__":
    result, csv_text, digest = calculate()
    expected = json.loads((ROOT / "example.json").read_text(encoding="utf-8"))
    assert digest == expected["snapshot"]["sha256"], "Snapshot differs from the documented download"
    assert result == expected["result"], "Recalculated result differs"
    assert csv_text == (ROOT / "selected-visits.csv").read_text(encoding="utf-8"), "CSV differs"
    print(json.dumps(result, indent=2, ensure_ascii=False))
    print("OK: snapshot, selection, dates, intervals and CSV verified.")
