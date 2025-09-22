import "./product.css";

export default function ProductPage() {
  return (
    <section className="product">
      <div className="product-container">
        <h1>Our Product</h1>
        <p>
          AntoBot is built to empower traders with automated solutions that save
          time, reduce errors, and increase profitability.
        </p>

        <div className="product-grid">
          <div className="product-card">
            <h3>Smart Algorithms</h3>
            <p>
              Our trading bots are powered by data-driven strategies designed to
              adapt to market trends.
            </p>
          </div>

          <div className="product-card">
            <h3>Real-Time Monitoring</h3>
            <p>
              Track your trades and performance with live analytics and detailed
              insights.
            </p>
          </div>

          <div className="product-card">
            <h3>Risk Management</h3>
            <p>
              Customize stop-loss, take-profit, and risk controls to protect
              your portfolio.
            </p>
          </div>

          <div className="product-card">
            <h3>Seamless Integration</h3>
            <p>
              Connect AntoBot easily with major exchanges like Binance,
              Coinbase, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
