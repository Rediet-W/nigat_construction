import Link from "next/link";

import { MAIN_NAVIGATION } from "@/constants/navigation";
import { getDictionary } from "@/i18n/server";

/** Desktop menu. */
export async function Navigation() {
  const t = await getDictionary();
  return (
    <ul className="navbar-nav mr-auto" id="menu">
      {MAIN_NAVIGATION.map((item) => (
        <li key={item.labelKey} className="nav-item">
          <Link className="nav-link" href={item.href}>
            {t.nav[item.labelKey]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
