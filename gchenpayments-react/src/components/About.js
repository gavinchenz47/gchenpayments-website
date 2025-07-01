import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Gavin Chen</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Payment systems architect with 6+ years specializing in subscription billing and recurring payment solutions. Worked with companies from seed-stage startups to $100M+ ARR platforms, leading a 9-engineer team developing SaaS payment systems across multiple providers and markets.</p>
            
            <p>I help SaaS companies and subscription businesses implement secure, scalable payment systems that reduce fraud, increase revenue, and provide excellent customer experiences.</p>
            
            <p>My expertise spans global payment platforms, banking integrations, fraud prevention, and payment system scaling for growing businesses.</p>
          </div>
          
          <div className="stats">
            <div className="stat">
              <span className="stat-number">2.3% → 0.2%</span>
              <div className="stat-label">Fraud Rate Reduction</div>
            </div>
            <div className="stat">
              <span className="stat-number">5x</span>
              <div className="stat-label">Transaction Volume Scaling</div>
            </div>
            <div className="stat">
              <span className="stat-number">$2M+</span>
              <div className="stat-label">Failed Payments Recovered</div>
            </div>
            <div className="stat">
              <span className="stat-number">9</span>
              <div className="stat-label">Engineers Led</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;