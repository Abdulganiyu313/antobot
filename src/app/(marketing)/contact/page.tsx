"use client";

import React, { useState } from "react";
import "./contact.css";

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // simulate sending message
    setShowToast(true);

    // auto-hide after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <main className="contact-container">
      <section className="contact-header">
        <h1>Contact us</h1>
        <p>
          We're here to help. Reach out to us with any questions or feedback.
        </p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Smith"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="JohnSmith@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            rows={5}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send message
        </button>
      </form>

      {showToast && (
        <div className="toast success-toast">
          ✅ Your message has been sent!
        </div>
      )}
    </main>
  );
}
