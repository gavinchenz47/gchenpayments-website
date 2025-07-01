import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Ready to Optimize Your Payment Systems?</h2>
        <p>Let's discuss how my experience can help scale your payment infrastructure. Limited spots available for Q3 2025 projects.</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <span>📧</span>
            <a href="mailto:gavin@gchenpayments.com">gavin@gchenpayments.com</a>
          </div>
          <div className="contact-item">
            <span>🌐</span>
            <span>gchenpayments.com</span>
          </div>
          <div className="contact-item">
            <span>💼</span>
            <a href="https://linkedin.com/in/gavinchentech" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
        </div>
        
        <a href="mailto:gavin@gchenpayments.com" className="cta-button" style={{marginTop: '2rem'}}>Get a Free Payment System Audit</a>
      </div>
    </section>
  );
};

export default Contact;