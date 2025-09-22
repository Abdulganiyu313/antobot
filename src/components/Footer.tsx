import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <p>© {new Date().getFullYear()} AntoBot. All rights reserved.</p>
        </div>

        {/* Middle Nav */}
        <nav className="footer-nav">
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/legal">Terms</Link>
          <Link href="/legal/privacy">Privacy</Link>
        </nav>

        {/* Right Section */}
        <div className="footer-right">
          <p>Automated trading, simplified.</p>
        </div>
      </div>
    </footer>
  );
}
