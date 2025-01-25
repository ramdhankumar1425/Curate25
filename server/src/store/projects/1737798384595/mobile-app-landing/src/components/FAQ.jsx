import React from 'react';

const FAQ = () => {
  const faqs = [
    { question: 'How do I get started?', answer: 'Simply download the app from your preferred app store and create an account.' },
    { question: 'Is it free?', answer: 'Yes, the basic version is free with optional premium features.' },
    { question: 'What devices are supported?', answer: 'Our app works on both iOS and Android devices.' }
  ];

  return (
    <section id="faq" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;