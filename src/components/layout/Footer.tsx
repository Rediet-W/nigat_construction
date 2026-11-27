import Link from "next/link";
import type { ReactNode } from "react";

import { SiteLogo } from "@/components/layout/SiteLogo";
import { FOOTER_QUICK_LINKS, SOCIAL_LINKS } from "@/constants/navigation";
import { groupNavigation } from "@/constants/nigat-group";
import { ROUTES, serviceCategoryHref } from "@/constants/routes";
import { CONTACT_INFO } from "@/constants/site";
import { localizedCategories } from "@/i18n/localize";
import { getDictionary, getLocale } from "@/i18n/server";

function FooterLinks({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div className="footer-links">
      <h2>{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <li>
      <i className={`${icon} footer-contact-icon`} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export async function Footer() {
  const [t, locale] = await Promise.all([getDictionary(), getLocale()]);
  const group = groupNavigation(locale, ROUTES.home);
  const quickLinks = FOOTER_QUICK_LINKS.map((link) => ({ label: t.nav[link.labelKey], href: link.href }));
  // The same categories as the Services page, so the two lists always match.
  const serviceLinks = localizedCategories(t).map((category) => ({
    label: category.title,
    href: serviceCategoryHref(category.id),
  }));

  return (
    <footer className="main-footer dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="footer-logo">
                <SiteLogo />
              </div>
              <div className="footer-social-links">
                <ul>
                  {SOCIAL_LINKS.map((social) => (
                    <li key={social.label}>
                      <a href={social.href} aria-label={social.label}>
                        <i className={social.icon} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="footer-links-box">
              <div className="footer-links footer-contact-box">
                <ul>
                  <ContactRow icon="fa-solid fa-phone">
                    <a href={CONTACT_INFO.phone.href}>{CONTACT_INFO.phone.label}</a>
                    {" / "}
                    <a href={CONTACT_INFO.altPhone.href}>{CONTACT_INFO.altPhone.label}</a>
                  </ContactRow>
                  <ContactRow icon="fa-brands fa-telegram">
                    <a href={CONTACT_INFO.telegram}>{t.contactBand.telegram}</a>
                    {" · "}
                    <a href={CONTACT_INFO.whatsapp}>{t.contactBand.whatsapp}</a>
                  </ContactRow>
                  <ContactRow icon="fa-solid fa-envelope">
                    <a href={CONTACT_INFO.email.href}>{CONTACT_INFO.email.label}</a>
                  </ContactRow>
                  <ContactRow icon="fa-solid fa-location-dot">{t.common.address}</ContactRow>
                  <ContactRow icon="fa-regular fa-clock">{t.common.hours}</ContactRow>
                </ul>
              </div>

              <FooterLinks title={t.footer.quickLinks} links={quickLinks} />
              <FooterLinks title={t.footer.ourServices} links={serviceLinks} />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="footer-group">
              <div className="footer-group-header">
                <h2>{group.groupName}</h2>
                <p>{t.group.tagline}</p>
              </div>
              <ul className="footer-group-list" aria-label={t.group.sectors}>
                {group.sectors.map((sector) => (
                  <li key={sector.key} className={sector.current ? "is-current" : undefined}>
                    <span className="footer-group-no">{sector.number}</span>
                    <h3>
                      {sector.current ? (
                        <Link href={sector.href} aria-current="page">
                          {sector.name}
                        </Link>
                      ) : (
                        // A plain link: another website, same tab.
                        <a href={sector.href}>
                          {sector.name}
                          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                        </a>
                      )}
                    </h3>
                    <p>{sector.description}</p>
                    {sector.current && <span className="footer-group-here">{t.group.youAreHere}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright-text">
                <p>{t.common.copyright}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
