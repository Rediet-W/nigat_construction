"use client";

import Link from "next/link";
import { createContext, useContext, useState, type KeyboardEvent, type ReactNode } from "react";

import { MAIN_NAVIGATION } from "@/constants/navigation";
import { groupNavigation } from "@/constants/nigat-group";
import { ROUTES } from "@/constants/routes";
import { useCollapse } from "@/hooks/useCollapse";
import { useI18n } from "@/i18n/I18nProvider";

/*
 * React replacement for jQuery SlickNav. The toggle button lives in
 * `.navbar-toggle` and the menu in `.responsive-menu` (different places in the
 * header), so they share state through a small context. Markup and class names
 * match what SlickNav generated so the template CSS applies unchanged.
 */

const SLIDE_DURATION = 200;

interface MobileMenuState {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

const MobileMenuContext = createContext<MobileMenuState | null>(null);

function useMobileMenu(): MobileMenuState {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) throw new Error("Mobile menu components must be inside <MobileMenuProvider>.");
  return ctx;
}

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value: MobileMenuState = {
    open,
    toggle: () => setOpen((o) => !o),
    close: () => setOpen(false),
  };
  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>;
}

/** Activates on Enter/Space like a native button (SlickNav used an <a role="button">). */
function onActivateKey(action: () => void) {
  return (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };
}

export function MobileMenuToggle() {
  const { open, toggle } = useMobileMenu();
  const { dict } = useI18n();
  return (
    <a
      href="#"
      aria-haspopup="true"
      aria-expanded={open}
      aria-label={dict.common.toggleMenu}
      role="button"
      tabIndex={0}
      className={`slicknav_btn ${open ? "slicknav_open" : "slicknav_collapsed"}`}
      onClick={(event) => {
        event.preventDefault();
        toggle();
      }}
      onKeyDown={onActivateKey(toggle)}
    >
      <span className="slicknav_menutxt" />
      <span className="slicknav_icon slicknav_no-text">
        <span className="slicknav_icon-bar" />
        <span className="slicknav_icon-bar" />
        <span className="slicknav_icon-bar" />
      </span>
    </a>
  );
}

/** Animated list that is `display: none` when closed, like jQuery slideUp/slideDown. */
function SlideList({ open, className, children }: { open: boolean; className?: string; children: ReactNode }) {
  const { ref, phase, style } = useCollapse<HTMLUListElement>(open, SLIDE_DURATION, "ease-in-out");
  const hidden = phase === "closed";
  return (
    <ul
      ref={ref}
      role="menu"
      aria-hidden={hidden}
      className={[className, hidden ? "slicknav_hidden" : ""].filter(Boolean).join(" ") || undefined}
      style={hidden ? { display: "none" } : { ...style, display: "block" }}
    >
      {children}
    </ul>
  );
}

/** "Nigat Group" row: the three sector sites, the current one highlighted. */
function GroupRow({ onNavigate }: { onNavigate: () => void }) {
  const { locale, dict } = useI18n();
  const { groupName, sectors } = groupNavigation(locale, ROUTES.home);
  return (
    <li className="nav-item mobile-group" role="none">
      <span className="mobile-group-title">{groupName}</span>
      <div className="mobile-group-links" role="group" aria-label={dict.group.sectors}>
        {sectors.map((sector) =>
          sector.current ? (
            <Link
              key={sector.key}
              href={sector.href}
              role="menuitem"
              className="is-current"
              aria-current="page"
              onClick={onNavigate}
            >
              {sector.name}
            </Link>
          ) : (
            // A plain link: another website, same tab (the Back button returns here).
            <a key={sector.key} href={sector.href} role="menuitem">
              {sector.name}
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          ),
        )}
      </div>
    </li>
  );
}

export function MobileMenu() {
  const { open, close } = useMobileMenu();
  const { dict } = useI18n();
  return (
    <div className="slicknav_menu">
      <SlideList open={open} className="slicknav_nav">
        {MAIN_NAVIGATION.map((item) => (
          <li key={item.labelKey} className="nav-item">
            <Link className="nav-link" href={item.href} role="menuitem" onClick={close}>
              {dict.nav[item.labelKey]}
            </Link>
          </li>
        ))}
        <GroupRow onNavigate={close} />
      </SlideList>
    </div>
  );
}
