"""Stream the daily UCAR archive only until the selected member is found."""
import hashlib
import json
import tarfile
import urllib.request
from pathlib import Path

base = Path(__file__).resolve().parent
meta = json.loads((base / "provenance.json").read_text(encoding="utf-8"))
member_name = meta["archive_member"]
destination = base / member_name
if destination.exists():
    raise SystemExit("Destination already exists, refusing to overwrite it")
# No extractall: write only the named file, never paths provided by the archive.
with urllib.request.urlopen(meta["archive_url"], timeout=60) as response:
    with tarfile.open(fileobj=response, mode="r|gz") as archive:
        for member in archive:
            if member.isfile() and member.name == member_name:
                with archive.extractfile(member) as stream:
                    payload = stream.read()
                break
        else:
            raise ValueError("Profile not found in this archive version")
if hashlib.sha256(payload).hexdigest() != meta["profile_sha256"]:
    raise ValueError("Source version changed: checksum differs")
with destination.open("xb") as output:
    output.write(payload)
print(destination)
