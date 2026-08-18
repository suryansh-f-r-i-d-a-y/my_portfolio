import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Drop a mail for any query or professional purposes, I would love to answer your questions.
          </span>
        </h2>
        <div className="contact__form-container">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem', background: '#fff', borderRadius: '5px' }}>
              <h3 style={{ color: '#111', fontSize: '2.4rem', marginBottom: '1rem' }}>Thank You!</h3>
              <p style={{ color: '#666', fontSize: '1.6rem' }}>Your message has been sent successfully. I will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="name">Name</label>
                <input 
                  required 
                  placeholder="Enter Your Name" 
                  type="text" 
                  className="contact__form-input" 
                  name="name"
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="email">Email</label>
                <input 
                  required 
                  placeholder="Enter Your Email" 
                  type="email" 
                  className="contact__form-input" 
                  name="email"
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="message">Message</label>
                <textarea 
                  required 
                  cols={30} 
                  rows={4} 
                  className="contact__form-input" 
                  placeholder="Enter Your Message"
                  name="message" 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn--theme contact__btn">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
