import "./faq.css";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is AntoBot?",
      answer:
        "AntoBot is an automated trading platform that helps traders simplify and optimize their strategies using proven algorithms.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use industry-standard encryption and comply with data protection regulations to keep your account and funds safe.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time from your dashboard settings. You will retain access until the end of the billing cycle.",
    },
    {
      question: "Which markets does AntoBot support?",
      answer:
        "Currently, AntoBot supports cryptocurrency markets, with plans to expand into stocks and forex in the future.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for new users to explore the platform and its features.",
    },
    {
      question: "How do I get support?",
      answer:
        "You can reach our support team via the chat widget on our website or by emailing support@antobot.com.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept major credit cards and PayPal for subscription payments.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for new subscriptions. Please refer to our refund policy for more details.",
    },
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <p>Here are some common questions about AntoBot.</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
