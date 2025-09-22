"use client";

import React from "react";
import Link from "next/link";
import "./signin.css";

export default function SignInPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Hook into NextAuth later
    console.log("Sign in submitted");
  };

  return (
    <main className="signin-container">
      <h1 className="signin-title">Sign in to your account</h1>

      <form className="signin-form" onSubmit={handleSubmit}>
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

        <p className="password-hint">
          Password must be at least 8 characters long and include at least one
          number and one special character.
        </p>

        <div className="signin-actions">
          <Link href="/forgot-password" className="forgot-link">
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="signin-btn">
          Sign in
        </button>
      </form>

      <p className="signup-link">
        Don’t have an account? <Link href="/sign-up">Sign up</Link>
      </p>
    </main>
  );
}
