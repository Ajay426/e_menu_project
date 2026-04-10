import "./Contact.css"

export default function Contact(){
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you 💬</p>
      </div>

      <div className="contact-wrapper">

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: support@onerestro.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Kolkata, India</p>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>

          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email"/>
          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>
        </div>

      </div>
    </div>
  )
}