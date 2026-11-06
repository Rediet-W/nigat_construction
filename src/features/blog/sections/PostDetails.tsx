import Image from "next/image";

export function PostDetails() {
  return (
    <div className="page-single-post">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="post-image">
              <figure className="image-anime reveal"><Image src="/images/post-1.jpg" alt="" width={1366} height={768} /></figure>
            </div>
            <div className="post-content">
              <div className="post-entry">
                <p className="wow fadeInUp">The construction industry continues to evolve through advanced technologies, sustainable building practices, and innovative project management methods. Staying informed about emerging trends helps homeowners, developers, and contractors make smarter decisions, improve efficiency, and deliver projects that stand the test of time.</p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Construction today is no longer just about bricks and concrete—it is about creating durable, environmentally responsible spaces that meet the demands of the future. By understanding industry innovations, businesses and property owners can reduce costs, improve quality, and ensure every project achieves long-term success.</p>
                <blockquote className="wow fadeInUp" data-wow-delay="0.4s">
                  <p>&quot;Exceptional construction is achieved through a perfect balance of innovation, skilled craftsmanship, sustainable practices, and an unwavering commitment to delivering safe, durable, and inspiring spaces that serve communities for generations to come.&quot;</p>
                </blockquote>
                <p className="wow fadeInUp" data-wow-delay="0.6s">Sustainability continues to play a significant role in shaping the future of the industry. Builders are increasingly adopting eco-friendly materials, energy-efficient systems, and waste-reduction strategies that minimize environmental impact while improving building performance. Green construction practices not only contribute to a healthier planet.</p>
                <h2 className="wow fadeInUp" data-wow-delay="0.8s">Building for tomorrow</h2>
                <p className="wow fadeInUp" data-wow-delay="1s">Companies that embrace advanced technology, sustainable building materials, and efficient project management are better equipped to meet evolving client expectations while maintaining superior quality.</p>
                <ul className="wow fadeInUp" data-wow-delay="1.2s">
                  <li>Leverage BIM, drones, and digital project management tools to enhance planning and project accuracy.</li>
                  <li>Maintain high construction standards through skilled professionals, and detailed quality inspections.</li>
                  <li>Minimize material waste, improve workflow efficiency, and maximize value through effective execution</li>
                  <li>Incorporate modern building systems that reduce energy consumption, lower operating costs.</li>
                  <li>Design durable, resilient structures that adapt to evolving technologies, environmental, and needs.</li>
                </ul>
                <p className="wow fadeInUp" data-wow-delay="0.6s">Key priorities include using sustainable materials, integrating smart construction technologies, maintaining strict safety standards, improving resource management, ensuring quality at every stage, compromising performance.</p>
              </div>
              <div className="post-tag-links">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="post-tags wow fadeInUp" data-wow-delay="0.5s"><span className="tag-links">Tags: <a href="#">Innovation</a> <a href="#">Building</a> <a href="#">Engineering</a></span></div>
                  </div>
                  <div className="col-lg-4">
                    <div className="post-social-sharing wow fadeInUp" data-wow-delay="0.5s">
                      <ul>
                        <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                        {" "}
                        <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                        {" "}
                        <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                        {" "}
                        <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
