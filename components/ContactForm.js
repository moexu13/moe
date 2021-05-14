import React from "react";

const ContactForm = () => {
  return (
    <section className="contact-form" id="contact-form">
    <h2 className="section__title">Contact Me</h2>
    <div className="form__container">
      <form name="contact" method="post">
        {/* for netlify */}
        <input type="hidden" name="form-name" value="contact-form" />
        <div className="form-group mt-4">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            required
          />
        </div>

        <div className="form-group mt-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            required
          />
        </div>

        <div className="form-group mt-4">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="6"
            cols="50"
            required
          ></textarea>
        </div>

        <div className="row">
          <button className="btn btn-submit">Send</button>
        </div>
      </form>
    </div>
  </section>
  );
}

export default ContactForm;