import Link from "next/link";
import type { ReactNode } from "react";

import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { MEDIA } from "@/constants/media";
import { getDictionary } from "@/i18n/server";
import type { BreadcrumbItem } from "@/types";

interface PageHeaderProps {
  title: string;
  breadcrumbs?: readonly BreadcrumbItem[];
  /** One short line under the title. */
  intro?: string;
  /** Muted background loop; the banner photo shows while it loads and when it is `null`. */
  video?: string | null;
  /** Call to action under the breadcrumb (e.g. "Request a Quote"). */
  children?: ReactNode;
}

/** Inner-page banner: background photo (or video), title, breadcrumb, optional intro and CTA. */
export async function PageHeader({ title, breadcrumbs, intro, video, children }: PageHeaderProps) {
  const t = (await getDictionary()).common;
  return (
    <div
      className={video ? "page-header page-header-video dark-section" : "page-header dark-section parallaxie"}
      style={{ backgroundImage: `url(${MEDIA.pageHeaderImage})` }}
    >
      {video && (
        <div className="page-header-bg-video">
          <BackgroundVideo src={video} poster={MEDIA.pageHeaderImage} />
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-3">{title}</h1>
              {breadcrumbs && (
                <nav className="wow fadeInUp" aria-label={t.breadcrumb}>
                  <ol className="breadcrumb">
                    {breadcrumbs.map((crumb) =>
                      crumb.href ? (
                        <li key={crumb.label} className="breadcrumb-item">
                          <Link href={crumb.href}>{crumb.label}</Link>
                        </li>
                      ) : (
                        <li key={crumb.label} className="breadcrumb-item active" aria-current="page">
                          {crumb.label}
                        </li>
                      ),
                    )}
                  </ol>
                </nav>
              )}
              {intro && (
                <p className="page-header-intro wow fadeInUp" data-wow-delay="0.2s">
                  {intro}
                </p>
              )}
              {children && (
                <div className="page-header-actions wow fadeInUp" data-wow-delay="0.4s">
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
