import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add your form submission logic here (e.g., send data to a server)
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contactez-nous</h1>
        <p>Envoyez-nous un message et nous vous répondrons rapidement !</p>
      </header>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Envoyez un message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input type="text" id="name" placeholder="Entrez votre nom" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse Email</label>
              <input type="email" id="email" placeholder="Entrez votre email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Votre message ici..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Envoyer
            </button>
          </form>
          {submitted && (
            <div className="feedback-message">
              Votre message a été envoyé avec succès !
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

