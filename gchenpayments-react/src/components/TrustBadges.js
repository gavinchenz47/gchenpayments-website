import React from 'react';

const TrustBadges = () => {
  const badges = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: "PCI DSS Compliant",
      description: "Level 1 Payment Card Industry compliance"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"/>
          <path d="M3 10h18"/>
        </svg>
      ),
      title: "SOC 2 Type II",
      description: "Security & availability controls verified"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: "99.9% Uptime",
      description: "Enterprise-grade reliability guarantee"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.78-7.78 5.5 5.5 0 0 1 7.78 7.78Z"/>
        </svg>
      ),
      title: "Expert Certified",
      description: "Stripe, PayPal & AWS certified partner"
    }
  ];

  return (
    <section className="trust-badges">
      <div className="container">
        <div className="badges-grid">
          {badges.map((badge, index) => (
            <div key={index} className="badge-item">
              <div className="badge-icon">{badge.icon}</div>
              <h4>{badge.title}</h4>
              <p>{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;