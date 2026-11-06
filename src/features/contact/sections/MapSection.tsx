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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
