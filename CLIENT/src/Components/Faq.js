import React from 'react';
import './Faq.css';

function FAQPage() {
  return (
    <div className="faq-page">
      <h1>FAQ</h1>
      <div className="faq-list">
        <div className="faq-item">
          <h2>1. What types of events do you organize?</h2>
          <p>We specialize in weddings, corporate events, parties, product launches, and more, tailoring each event to meet your unique needs.</p>
        </div>
        <div className="faq-item">
          <h2>2. How far in advance should I book my event?</h2>
          <p>We recommend booking at least 3-6 months in advance, but we can accommodate last-minute requests whenever possible.</p>
        </div>
        <div className="faq-item">
          <h2>3. Can you help with venue selection and catering?</h2>
          <p>Yes, we assist with venue selection and offer custom catering options based on your preferences and event size.</p>
        </div>
        <div className="faq-item">
          <h2>4. Can I customize the event packages?</h2>
          <p>Absolutely! Our packages are fully customizable, allowing you to tailor every detail to your needs.</p>
        </div>
        <div className="faq-item">
          <h2>5. How do I get a quote for my event?</h2>
          <p>Fill out our contact form or call us to discuss your event requirements, and we’ll provide a personalized quote based on your needs.</p>
        </div>
        <div className="faq-item">
          <h2>6. Do you provide event staff?</h2>
          <p>Yes, we provide trained event staff including coordinators, servers, and security based on the type and size of your event.

</p>
        </div>
        <div className="faq-item">
          <h2>Can I see past events you’ve organized?</h2>
          <p>Yes! We’d be happy to share photos and videos from previous events. You can view our portfolio on the website or request a consultation for more details.</p>
        </div>
        <div className="faq-item">
          <h2>8. What is your cancellation policy?</h2>
          <p>Our cancellation policy varies depending on the event, but we’ll provide you with clear terms and conditions when you book with us.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
