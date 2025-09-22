"use client";

import React from "react";
import Link from "next/link";
import "./forgot.css";

export default function ForgotPasswordPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrate backend reset logic later
    console.log("Password reset requested");
  };

  return (
    <main className="forgot-container">
      <h1 className="forgot-title">Forgot your password?</h1>
      <p className="forgot-subtitle">
        Enter the email address associated with your account and we&apos;ll send
        you a link to reset your password.
      </p>

      <form className="forgot-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="JohnSmith@example.com"
            required
          />
        </div>

        <button type="submit" className="forgot-btn">
          Send Reset Link
        </button>
      </form>

      <p className="back-to-login">
        Remember your password? <Link href="/sign-in">Log in</Link>
      </p>
    </main>
  );
}
