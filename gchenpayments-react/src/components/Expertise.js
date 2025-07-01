import React from 'react';

const Expertise = () => {
  const expertiseCategories = [
    {
      title: "Payment Platforms",
      items: [
        "Stripe Connect & Stripe Billing",
        "PayPal International",
        "Cybersource",
        "WorldPay",
        "Braintree",
        "Recurly"
      ]
    },
    {
      title: "Banking Systems",
      items: [
        "PAD (Canada)",
        "ACH (US)",
        "UK Bacs Direct Debit",
        "AU BECS Direct Debit",
        "SEPA (Europe)"
      ]
    },
    {
      title: "Security & Compliance",
      items: [
        "PCI DSS Compliance",
        "3D Secure Implementation",
        "Payment Orchestration",
        "Smart Routing & Retry Logic",
        "GDPR Compliance"
      ]
    },
    {
      title: "Technology Stack",
      items: [
        "React & Node.js",
        "AWS (Lambda, Batch, SQS)",
        "MySQL & DynamoDB",
        "Kafka & Event Processing",
        "RESTful APIs"
      ]
    }
  ];

  return (
    <section className="expertise" id="expertise">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="expertise-grid">
          {expertiseCategories.map((category, index) => (
            <div key={index} className="expertise-category">
              <h4>{category.title}</h4>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;