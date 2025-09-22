import "./success.css";

export const metadata = {
  title: "Payment Successful — AntoBot",
  description: "Your AntoBot purchase was successful. Access your dashboard.",
};

export default function PaymentSuccessPage() {
  return (
    <main className="ps">
      <header className="ps__header">
        <div className="ps__brand">
          <div className="ps__logo" aria-hidden />
          <h2 className="ps__brandName">AntoBot</h2>
        </div>
      </header>

      <section className="container ps__hero">
        <div className="ps__icon" aria-hidden>
          ✅
        </div>
        <h1 className="ps__title">Payment successful</h1>
        <p className="ps__sub">
          Thanks for your purchase. Your plan is now active. You can download
          the bot and view your license key in the dashboard.
        </p>

        <div className="ps__actions">
          <a className="btn btn--primary" href="/dashboard">
            Go to Dashboard
          </a>
          <a className="btn btn--ghost" href="/pricing">
            Back to Pricing
          </a>
        </div>

        <p className="ps__note">
          Didn’t mean to make this purchase? Please review our Terms, Privacy,
          and Risk Disclaimer on the <a href="/legal">Legal</a> page.
        </p>
      </section>

      <section className="container ps__next">
        <h2 className="ps__nextTitle">What happens next?</h2>
        <ol className="ps__steps">
          <li>
            <strong>Access your dashboard</strong> to view your license key.
          </li>
          <li>
            <strong>Download AntoBot Pro</strong> from the dashboard.
          </li>
          <li>
            <strong>Follow the install guide</strong> to complete setup.
          </li>
        </ol>
      </section>
    </main>
  );
}
