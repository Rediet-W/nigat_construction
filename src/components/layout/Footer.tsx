import Image from "next/image";
import Link from "next/link";

import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS, SOCIAL_LINKS } from "@/constants/navigation";
import { CONTACT_INFO, SITE } from "@/constants/site";
import type { NavItem } from "@/types";

function FooterLinks({ title, links }: { title: string; links: readonly NavItem[] }) {
  return (
    <div className="footer-links">
      <h2>{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="main-footer dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="footer-logo">
                <Image src={SITE.logo} alt="" width={188} height={50} />
              </div>
              <div className="footer-social-links">
                <ul>
                  {SOCIAL_LINKS.map((social) => (
                    <li key={social.label}>
                      <a href={social.href} aria-label={social.label}>
                        <i className={social.icon} />
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
                  <li>
                    <Image src="/images/icon-phone-white.svg" alt="" width={24} height={24} />
                    <a href={CONTACT_INFO.phone.href}>{CONTACT_INFO.phone.label}</a>
                  </li>
                  <li>
                    <Image src="/images/icon-mail-white.svg" alt="" width={24} height={24} />
                    <a href={CONTACT_INFO.email.href}>{CONTACT_INFO.email.label}</a>
                  </li>
                  <li>
                    <Image src="/images/icon-location-white.svg" alt="" width={24} height={24} />
                    {CONTACT_INFO.address}
                  </li>
                </ul>
              </div>

              <FooterLinks title="Quick Links" links={FOOTER_QUICK_LINKS} />
              <FooterLinks title="Our Services" links={FOOTER_SERVICE_LINKS} />
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright-text">
                <p>{SITE.copyright}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
