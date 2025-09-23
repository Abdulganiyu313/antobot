"use client";

import React from "react";
import Link from "next/link";
import "./home.css";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Automated trading, simplified.</h1>
          <p>Trade smarter, not harder. Let our bots do the work.</p>
          <div className="hero-buttons">
            <Link href="/sign-up" className="btn-primary">
              Get Started
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See Pricing
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero.png" alt="Trading dashboard illustration" />
        </div>
      </section>

      {/* Trusted by Traders */}
      <section className="trusted">
        <h2>Trusted by traders worldwide</h2>
        <div className="logo-grid">
          {["binance", "coinbase", "etoro", "robinhood", "kraken"].map(
            (logo) => (
              <div key={logo} className="logo-card">
                <img src={`/images/${logo}.png`} alt={logo} />
              </div>
            )
          )}
        </div>
      </section>

      {/* Why Choose */}
      <section className="features">
        <h2>Why choose AntoBot?</h2>
        <p className="section-subtitle">
          Our platform is designed to make automated trading accessible and
          effective for everyone.
        </p>
        <div className="feature-cards">
          <div className="card">
            <h3>Proven strategy</h3>
            <p>
              Our bots are built on time-tested trading strategies, ensuring
              consistent performance.
            </p>
          </div>
          <div className="card">
            <h3>Fast onboarding</h3>
            <p>
              Get started in minutes with our intuitive setup process and clear
              instructions.
            </p>
          </div>
          <div className="card">
            <h3>Secure payments</h3>
            <p>
              Your transactions are protected by Square, ensuring the highest
              level of security.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step-card">
            <span className="step-number">1</span>
            <p>
              <strong>Connect your account</strong> — securely link your trading
              account to our platform.
            </p>
          </div>
          <div className="step-card">
            <span className="step-number">2</span>
            <p>
              <strong>Choose your strategy</strong> — select from a range of
              proven strategies tailored to your risk tolerance.
            </p>
          </div>
          <div className="step-card">
            <span className="step-number">3</span>
            <p>
              <strong>Watch your profits grow</strong> — our bots automatically
              execute trades, maximizing your returns.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to automate your trading?</h2>
        <p>
          Explore our flexible pricing plans to find the perfect fit for your
          trading goals.
        </p>
        <Link href="/pricing" className="btn-primary">
          See Pricing
        </Link>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What our users say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src="/images/user1.png" alt="Sarah" />
            <blockquote>
              “AntoBot has completely transformed my trading. The automated
              strategies are incredibly effective, and I’ve seen consistent
              profits since I started using it.”
            </blockquote>
            <p className="author">Sarah, Day Trader</p>
          </div>
          <div className="testimonial-card">
            <img src="/images/user2.png" alt="Mark" />
            <blockquote>
              “I was hesitant about automated trading, but AntoBot made it so
              easy. The onboarding was quick, and the support team is always
              there to help. Highly recommend!”
            </blockquote>
            <p className="author">Mark, Swing Trader</p>
          </div>
          <div className="testimonial-card">
            <img src="/images/user3.png" alt="Emily" />
            <blockquote>
              “I love the flexibility of AntoBot. I can choose the strategies
              that align with my risk tolerance and let the bots do the rest.
              It’s been a game-changer for my portfolio.”
            </blockquote>
            <p className="author">Emily, Long-Term Investor</p>
          </div>
        </div>
      </section>
    </main>
  );
}
