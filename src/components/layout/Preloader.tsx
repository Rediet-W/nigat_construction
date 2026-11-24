"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FADE_MS = 600;

/** Full-screen loader shown on first page load; fades out once the window has loaded. `logoUrl`: CMS site logo. */
export function Preloader({ logoUrl }: { logoUrl: string }) {
  const [state, setState] = useState<"visible" | "fading" | "hidden">("visible");

  useEffect(() => {
    let timer: number | undefined;
    const fade = () => {
      setState("fading");
      timer = window.setTimeout(() => setState("hidden"), FADE_MS);
    };
    if (document.readyState === "complete") {
      timer = window.setTimeout(fade, 0);
    } else {
      window.addEventListener("load", fade, { once: true });
    }
    return () => {
      window.removeEventListener("load", fade);
      window.clearTimeout(timer);
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div
      className="preloader"
      aria-hidden="true"
      style={{ opacity: state === "fading" ? 0 : 1, transition: `opacity ${FADE_MS}ms ease` }}
    >
      <div className="loading-container">
        <div className="loading" />
        <div id="loading-icon">
          <Image src={logoUrl} alt="" width={66} height={41} preload />
        </div>
      </div>
    </div>
  );
}
