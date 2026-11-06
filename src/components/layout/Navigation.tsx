import Link from "next/link";

import { MAIN_NAVIGATION } from "@/constants/navigation";

/** Desktop menu; dropdowns open on hover/focus purely through the template CSS. */
export function Navigation() {
  return (
    <ul className="navbar-nav mr-auto" id="menu">
      {MAIN_NAVIGATION.map((item) => (
        <li key={item.label} className={item.children ? "nav-item submenu" : "nav-item"}>
          <Link className="nav-link" href={item.href}>
            {item.label}
          </Link>
          {item.children && (
            <ul>
              {item.children.map((child) => (
                <li key={child.label} className="nav-item">
                  <Link className="nav-link" href={child.href}>
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
