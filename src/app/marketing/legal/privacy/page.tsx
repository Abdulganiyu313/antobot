import "./privacy.css";

export default function PrivacyPage() {
  return (
    <section className="privacy">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="intro">
          At AntoBot, your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you use our services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect information such as your name, email address, payment
          details, and usage activity when you interact with our platform.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use your data to provide our services, improve the platform,
          process payments, send important notifications, and comply with legal
          obligations.
        </p>

        <h2>3. Data Protection</h2>
        <p>
          Your information is stored securely with industry-standard encryption.
          We implement safeguards to protect against unauthorized access,
          disclosure, or misuse.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          We may integrate with trusted third parties (e.g., payment processors)
          to deliver our services. These providers are bound by their own
          privacy policies.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You may access, update, or delete your information at any time by
          contacting our support team. You also have the right to request data
          portability or object to processing.
        </p>

        <h2>6. Updates to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and continued use of AntoBot after changes
          indicates acceptance.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:support@antobot.com">support@antobot.com</a>.
        </p>
      </div>
    </section>
  );
}
