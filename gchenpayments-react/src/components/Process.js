import React from 'react';

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive audit of your current payment infrastructure, identifying bottlenecks, fraud risks, and optimization opportunities.",
      timeline: "1-2 weeks"
    },
    {
      number: "02", 
      title: "Strategy & Architecture",
      description: "Custom payment system design with provider selection, fraud prevention framework, and scaling roadmap tailored to your business model.",
      timeline: "2-3 weeks"
    },
    {
      number: "03",
      title: "Implementation & Integration", 
      description: "Hands-on development and integration of payment systems, with rigorous testing and security compliance validation.",
      timeline: "4-8 weeks"
    },
    {
      number: "04",
      title: "Optimization & Support",
      description: "Performance monitoring, ongoing optimization, and team training to ensure long-term success and operational excellence.",
      timeline: "Ongoing"
    }
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <h2 className="section-title">How We Work</h2>
        <p className="process-intro">A proven methodology that delivers results while minimizing risk to your business operations.</p>
        
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-timeline">Timeline: {step.timeline}</div>
            </div>
          ))}
        </div>
        
        <div className="process-footer">
          <p><strong>Typical Project Duration:</strong> 8-12 weeks from discovery to full implementation</p>
          <p><strong>Engagement Models:</strong> Project-based consulting, retainer arrangements, or technical advisory roles</p>
        </div>
      </div>
    </section>
  );
};

export default Process;