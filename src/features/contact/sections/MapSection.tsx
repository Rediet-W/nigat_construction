import { SectionTitle } from "@/components/ui/SectionTitle";

export function MapSection() {
  return (
    <div className="google-map">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle
              subtitle="Visit Our Location"
              title="Visit our office for consultation"
              description="Whether you're planning a residential build, commercial development, or renovation, we're here to provide expert advice and personalized solutions."
              center
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="google-map-iframe wow fadeInUp" data-wow-delay="0.4s">
              <iframe src="https://www.google.com/maps?q=Addis%20Ababa%2C%20Ethiopia&z=12&output=embed" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
