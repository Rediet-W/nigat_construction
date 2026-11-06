import Image from "next/image";
import Link from "next/link";

import { MobileMenu, MobileMenuProvider, MobileMenuToggle } from "@/components/layout/MobileNavigation";
import { Navigation } from "@/components/layout/Navigation";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";

export function Header() {
  return (
    <header className="main-header">
      <MobileMenuProvider>
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" href={ROUTES.home}>
                <Image src={SITE.logo} alt="Logo" width={188} height={50} preload />
              </Link>

              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <Navigation />
                </div>
                <div className="header-btn">
                  <Link href={ROUTES.contact} className="btn-default btn-highlighted">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="navbar-toggle">
                <MobileMenuToggle />
              </div>
            </div>
          </nav>
          <div className="responsive-menu">
            <MobileMenu />
          </div>
        </div>
      </MobileMenuProvider>
    </header>
  );
}
