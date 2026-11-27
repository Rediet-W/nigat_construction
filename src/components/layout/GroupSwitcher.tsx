"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { ROUTES } from "@/constants/routes";
import { groupNavigation } from "@/constants/nigat-group";
import { useI18n } from "@/i18n/I18nProvider";

/**
 * Desktop "Nigat Group" switcher. Opens on hover (mouse), on click / tap
 * (touch screens, where hover does not exist) and on keyboard focus; closes
 * on a tap outside or Escape. Sister sites open in the same tab, so the
 * browser Back button returns to this site.
 */
export function GroupSwitcher() {
  const { locale, dict } = useI18n();
  const { groupName, sectors } = groupNavigation(locale, ROUTES.home);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <ul className="navbar-nav group-switcher">
      <li ref={rootRef} className={open ? "nav-item submenu is-open" : "nav-item submenu"}>
        <button
          type="button"
          className="nav-link group-switcher-toggle"
          aria-label={groupName}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <i className="fa-solid fa-grip" aria-hidden="true" />
          <span className="group-switcher-label">{groupName}</span>
        </button>
        <ul id={panelId} aria-label={dict.group.sectors}>
          {sectors.map((sector) => {
            const content = (
              <>
                <span className="group-sector-no">{sector.number}</span>
                <span className="group-sector-text">
                  <span className="group-sector-name">
                    {sector.name}
                    {!sector.current && <i className="fa-solid fa-arrow-right" aria-hidden="true" />}
                  </span>
                  <span className="group-sector-desc">{sector.description}</span>
                  {sector.current && <span className="group-sector-here">{dict.group.youAreHere}</span>}
                </span>
              </>
            );
            return (
              <li key={sector.key} className={sector.current ? "nav-item is-current" : "nav-item"}>
                {sector.current ? (
                  <Link className="nav-link group-sector-link" href={sector.href} aria-current="page" onClick={() => setOpen(false)}>
                    {content}
                  </Link>
                ) : (
                  // A plain link: another website, same tab.
                  <a className="nav-link group-sector-link" href={sector.href}>
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}
