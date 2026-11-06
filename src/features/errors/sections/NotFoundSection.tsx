import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ROUTES } from "@/constants/routes";

export function NotFoundSection() {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-page-image wow fadeInUp"><Image src="/images/404-error-img.png" alt="" width={600} height={463} unoptimized /></div>
            <div className="error-page-content">
              <SectionTitle
                title="Oops! Page Not Found"
                description="The page you are looking for does not exist."
              />
              <div className="error-page-content-body"><Link href={ROUTES.home} className="btn-default wow fadeInUp" data-wow-delay="0.4s">Back To Homepage</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
