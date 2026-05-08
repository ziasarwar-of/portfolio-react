function Contact() {
  return (
    <section className="page">
      <h2 className="section-title">Contact</h2>

      <div className="section-line"></div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <textarea placeholder="Your Message"></textarea>

        <button>Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
