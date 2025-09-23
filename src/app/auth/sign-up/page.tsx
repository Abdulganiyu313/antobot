"use client";

import React from "react";
import Link from "next/link";
import "./signup.css";

export default function SignUpPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrate with NextAuth + DB later
    console.log("Sign up submitted");
  };

  return (
    <main className="signup-container">
      <h1 className="signup-title">Sign up to AntoBot</h1>

      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Bio Data Section */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Smith"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input id="dob" name="dob" type="date" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 555 123 4567"
            required
          />
        </div>

        {/* Account Info */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john.smith@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <p className="password-hint">
          Password must be at least 8 characters long and include at least one
          number and one special character.
        </p>

        <Link href="/forgot-password" className="forgot-link">
          Forgot password?
        </Link>

        <button type="submit" className="signup-btn">
          Sign up
        </button>
      </form>

      <button className="google-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>
        </svg>
        <span>Sign up with Google</span>
      </button>

      <p className="signin-link">
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </p>
    </main>
  );
}
