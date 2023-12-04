import React from 'react';

function ContactUsSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-info">
          <div className="contact-details">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to get in touch with us.</p>
            <ul className="info-list">
              <li><i className="fas fa-phone"></i> Phone: +91 9506566316</li>
              <li><i className="fas fa-envelope"></i> Email: 210677@kit.ac.in</li>
              <li><i className="fas fa-map-marker-alt"></i> Location: Kanpur Nagar, India</li>
            </ul>
          </div>
          <div className="enquiry-form">
            <h2>Send an Enquiry</h2>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-button">Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
