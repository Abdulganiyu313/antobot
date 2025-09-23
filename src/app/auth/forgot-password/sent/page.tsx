"use client";

import React from "react";
import Link from "next/link";
import "./sent.css";

export default function CheckEmailPage() {
  const handleResend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // TODO: Hook into resend logic later
    console.log("Resend email clicked");
  };

  return (
    <main className="sent-container">
      <h1 className="sent-title">Check your email</h1>
      <p className="sent-subtitle">
        We&apos;ve sent a password reset link to your email address. Please
        check your inbox, including your spam folder, for the email and follow
        the instructions to reset your password.
      </p>

      <button className="resend-btn" onClick={handleResend}>
        Resend Email
      </button>

      <p className="back-to-login">
        <Link href="/sign-in">Back to Log in</Link>
      </p>
    </main>
  );
}
