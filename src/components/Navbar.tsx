"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/images/faviconio-logo/logo.png"
            alt="AntoBot logo"
            width={45}
            height={45}
            priority
          />
          <span className="logo-text">AntoBot</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <Link href="/product">Product</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link href="/sign-in" className="btn-outline">
            Log in
          </Link>
          <Link href="/sign-up" className="btn-primary">
            Sign up
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link href="/product">Product</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/sign-in" className="btn-outline">
          Log in
        </Link>
        <Link href="/sign-up" className="btn-primary">
          Sign up
        </Link>
      </div>
    </header>
  );
}
