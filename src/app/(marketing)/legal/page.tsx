"use client";

import React from "react";
import "./legal.css";

export default function LegalPage() {
  return (
    <main className="legal-container">
      <header className="legal-header">
        <h1>Terms of Service</h1>
        <p>
          Welcome to AntoBot! These Terms of Service ("Terms") govern your use
          of our website, products, and services. By accessing or using our
          offerings, you agree to be bound by these Terms. If you do not agree
          to these Terms, please do not use our services.
        </p>
      </header>

      <section>
        <h2>1. Account Registration</h2>
        <p>
          To access certain features of AntoBot, you may be required to register
          for an account. You agree to provide accurate, current, and complete
          information during the registration process and to update such
          information to keep it accurate, current, and complete. You are
          responsible for safeguarding your account credentials and for all
          activities that occur under your account.
        </p>
      </section>

      <section>
        <h2>2. Use of Services</h2>
        <p>
          AntoBot provides automated trading solutions for cryptocurrency
          markets. You agree to use our services in compliance with all
          applicable laws and regulations. You shall not use our services for
          any illegal or unauthorized purpose, including but not limited to
          market manipulation, money laundering, or any other fraudulent
          activities.
        </p>
      </section>

      <section>
        <h2>3. Risk Disclosure</h2>
        <p>
          Trading cryptocurrencies involves significant risks, including the
          risk of losing your entire investment. AntoBot's automated trading
          solutions are based on algorithms and strategies that may not always
          be profitable. You acknowledge and agree that AntoBot is not
          responsible for any losses incurred as a result of using our services.
          You should carefully consider your investment objectives, risk
          tolerance, and financial situation before using our services.
        </p>
      </section>

      <section>
        <h2>4. Fees and Payments</h2>
        <p>
          AntoBot may charge fees for the use of its services. You agree to pay
          all applicable fees as described on our website. Fees are subject to
          change with prior notice. Payments shall be made through the methods
          specified by AntoBot.
        </p>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>
          All content and materials provided by AntoBot, including but not
          limited to software, algorithms, and documentation, are protected by
          intellectual property laws. You agree not to copy, modify, distribute,
          or create derivative works based on our content without our prior
          written consent.
        </p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, AntoBot shall not be liable
          for any direct, indirect, incidental, consequential, or special
          damages arising out of or in connection with your use of our services,
          even if we have been advised of the possibility of such damages.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          AntoBot may terminate or suspend your access to our services at any
          time, with or without cause, and without prior notice. You may also
          terminate your account at any time by contacting us.
        </p>
      </section>

      <section>
        <h2>8. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of Canada, without regard to its conflict of law principles.
        </p>
      </section>

      <section>
        <h2>9. Changes to Terms</h2>
        <p>
          AntoBot reserves the right to modify these Terms at any time. We will
          notify you of any changes by posting the updated Terms on our website.
          Your continued use of our services after the effective date of the
          updated Terms constitutes your acceptance of the changes.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms, please
          contact us at{" "}
          <a href="mailto:support@antobot.ca">support@antobot.ca</a>.
        </p>
      </section>
    </main>
  );
}
