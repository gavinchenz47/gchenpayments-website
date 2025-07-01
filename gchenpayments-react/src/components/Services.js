import React from 'react';

const Services = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <line x1="2" y1="10" x2="22" y2="10"/>
        </svg>
      ),
      title: "Subscription Billing Systems",
      description: "Complete subscription billing architecture with auto-renewal, failed payment recovery, and customer lifecycle management for SaaS platforms."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Payment Fraud Prevention",
      description: "Comprehensive fraud detection and prevention systems with real-time monitoring, risk scoring, and automated response workflows."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="m14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      ),
      title: "Multi-Provider Integration",
      description: "Payment system architecture across multiple providers for redundancy, global coverage, and optimal transaction routing."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="m19 9-5 5-4-4-3 3"/>
        </svg>
      ),
      title: "Payment System Scaling",
      description: "Architecture design and implementation for high-volume payment processing with auto-scaling, monitoring, and optimization."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18"/>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
          <line x1="10" y1="11" x2="10" y2="17"/>
          <line x1="14" y1="11" x2="14" y2="17"/>
        </svg>
      ),
      title: "Banking Integration",
      description: "Direct debit and ACH integration across multiple countries for cost-effective payment processing and improved cash flow."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.78-7.78 5.5 5.5 0 0 1 7.78 7.78Z"/>
        </svg>
      ),
      title: "Team Training & Consulting",
      description: "Technical leadership and team training on payment systems, best practices, and implementation strategies."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;