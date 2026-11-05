"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./HypothesisStory.module.css";

type Props = {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
};

export function HypothesisStory({ id, number, title, children }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let scrollFrame = 0;

    const revealTarget = (hash: string) => {
      let anchor: string;
      try {
        anchor = decodeURIComponent(hash.slice(1));
      } catch {
        return null;
      }
      const target = document.getElementById(anchor);
      const details = detailsRef.current;
      if (!target || !details?.contains(target)) return null;

      // Also reveal a test or figure addressed inside the story.
      for (let parent: HTMLElement | null = target; parent; parent = parent.parentElement) {
        if (parent instanceof HTMLDetailsElement) parent.open = true;
        if (parent === details) break;
      }
      return target;
    };

    const revealHash = () => {
      const target = revealTarget(window.location.hash);
      if (!target) return;
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    };

    const revealLink = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement) || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const destination = new URL(link.href);
      if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname || destination.search !== window.location.search) return;
      // Open before native anchor navigation, including a repeated click on the same hash.
      revealTarget(destination.hash);
    };

    revealHash();
    window.addEventListener("hashchange", revealHash);
    document.addEventListener("click", revealLink);
    return () => {
      cancelAnimationFrame(scrollFrame);
      window.removeEventListener("hashchange", revealHash);
      document.removeEventListener("click", revealLink);
    };
  }, []);

  const collapse = () => {
    if (!detailsRef.current || !summaryRef.current) return;
    detailsRef.current.open = false;
    summaryRef.current.focus({ preventScroll: true });
    summaryRef.current.scrollIntoView({ block: "start" });
  };

  return (
    <details ref={detailsRef} className={styles.story} data-hypothesis-story={id} open>
      <summary ref={summaryRef} className={styles.summary}>
        <h3 id={id} className={styles.heading}>
          <span className={styles.label}>Hypotéza {number}</span>{" "}
          {title}
        </h3>
        <span className={styles.toggle} aria-hidden="true">
          <span className={styles.whenOpen}>Sbalit ↑</span>
          <span className={styles.whenClosed}>Rozbalit ↓</span>
        </span>
      </summary>
      <div className={styles.body}>
        {children}
        <button type="button" className={styles.collapse} onClick={collapse}
          aria-label={`Sbalit hypotézu ${number} a vrátit se k jejímu nadpisu`}>
          Sbalit hypotézu a vrátit se k nadpisu ↑
        </button>
      </div>
    </details>
  );
}
