import "./pricing.css";

const STARTER_LINK = process.env.NEXT_PUBLIC_SQUARE_LINK_STARTER || "#";
const PRO_LINK = process.env.NEXT_PUBLIC_SQUARE_LINK_PRO || "#";

export const metadata = {
  title: "Pricing — AntoBot",
  description: "Transparent CAD pricing, secured by Square.",
};

export default function PricingPage() {
  return (
    <main className="pricing">
      {/* Header (minimal) */}
      <section className="pricing__hero">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1 className="headline">Simple, transparent CAD pricing</h1>
          <p className="subcopy">
            Launch fast with AntoBot. Pay securely with Square. Cancel anytime.
          </p>

          {/* Currency + Billing Toggles (UI only) */}
          <div className="controls">
            <div className="control">
              <span className="control__label">Currency</span>
              <div className="segmented">
                <button className="segmented__btn segmented__btn--active">
                  CAD
                </button>
                <button className="segmented__btn">USD</button>
              </div>
            </div>

            <div className="control">
              <span className="control__label">Billing</span>
              <div className="segmented">
                <button className="segmented__btn segmented__btn--active">
                  Monthly
                </button>
                <button className="segmented__btn">Yearly</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="plans">
        <div className="container grid">
          {/* Starter */}
          <article className="plan">
            <div className="plan__header">
              <h3 className="plan__title">Starter</h3>
              <p className="plan__tag">Best for first deployment</p>
            </div>
            <div className="plan__price">
              <span className="plan__amount">$49</span>
              <span className="plan__per">/mo CAD</span>
            </div>
            <ul className="plan__features">
              <li>1 license seat</li>
              <li>Bot updates included</li>
              <li>Email support (24–48h)</li>
              <li>Secure Square checkout</li>
            </ul>
            <a
              className="btn btn--primary"
              href={STARTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Checkout with Square
            </a>
            <p className="secure-note">Secured by Square</p>
          </article>

          {/* Pro */}
          <article className="plan plan--highlight">
            <div className="plan__header">
              <div className="badge">Most popular</div>
              <h3 className="plan__title">Pro</h3>
              <p className="plan__tag">Scaling, faster support</p>
            </div>
            <div className="plan__price">
              <span className="plan__amount">$99</span>
              <span className="plan__per">/mo CAD</span>
            </div>
            <ul className="plan__features">
              <li>3 license seats</li>
              <li>Priority updates</li>
              <li>Priority support (same-day)</li>
              <li>Secure Square checkout</li>
            </ul>
            <a
              className="btn btn--primary btn--wide"
              href={PRO_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Checkout with Square
            </a>
            <p className="secure-note">Secured by Square</p>
          </article>
        </div>

        {/* Comparison table */}
        <div className="container table-wrap">
          <table className="compare">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th>Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>License seats</td>
                <td>1</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Updates</td>
                <td>Included</td>
                <td>Priority</td>
              </tr>
              <tr>
                <td>Support SLA</td>
                <td>24–48h</td>
                <td>Same-day</td>
              </tr>
            </tbody>
          </table>
          <p className="smallprint">
            Prices shown in CAD. Taxes calculated at checkout.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="headline headline--center">
            Frequently asked questions
          </h2>
          <p className="faq__intro">
            Answers to common questions about AntoBot’s pricing and
            subscriptions.
          </p>

          <div className="faq__accordion">
            <details className="faq__item">
              <summary className="faq__question">
                What payment methods do you accept?
              </summary>
              <div className="faq__answer">
                We accept major credit and debit cards via Square’s secure
                checkout, including Visa, Mastercard, and American Express.
              </div>
            </details>

            <details className="faq__item">
              <summary className="faq__question">
                Can I change my plan later?
              </summary>
              <div className="faq__answer">
                Yes. You can upgrade or downgrade anytime from your dashboard.
                Changes take effect immediately with prorated billing.
              </div>
            </details>

            <details className="faq__item">
              <summary className="faq__question">
                Is there a free trial available?
              </summary>
              <div className="faq__answer">
                We don’t offer a free trial right now, but there’s a 14-day
                money-back guarantee on all plans.
              </div>
            </details>

            <details className="faq__item">
              <summary className="faq__question">
                How are taxes handled?
              </summary>
              <div className="faq__answer">
                Prices shown are in CAD. Applicable taxes are calculated at
                checkout by Square based on your location.
              </div>
            </details>

            <details className="faq__item">
              <summary className="faq__question">
                What happens if I cancel?
              </summary>
              <div className="faq__answer">
                You can cancel anytime. Access continues until the end of the
                current billing period — no partial refunds for remaining time.
              </div>
            </details>
          </div>

          <div className="faq__more">
            <span>Still have questions?</span>{" "}
            <a className="faq__link" href="/faq">
              Visit the full FAQ
            </a>
          </div>

          <div className="disclaimer">
            <p>
              <strong>Risk disclaimer:</strong> Trading involves risk. This is
              not financial advice. Past performance is not indicative of future
              results.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
