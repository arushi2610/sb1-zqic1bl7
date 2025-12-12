import React from 'react';

const faqs = [
  {
    question: 'What are your hours?',
    answer: 'We are open daily from 10:00 AM to 11:00 PM.',
  },
  {
    question: 'Do you deliver to my area?',
    answer: 'Order online or call us to check delivery eligibility for your address. We also offer easy pickup from our 12th Ave location.',
  },
  {
    question: 'How long do orders take?',
    answer: 'Typical timing is 20-40 minutes for pickup and 35-55 minutes for delivery. Times may vary based on order volume and location.',
  },
  {
    question: 'Do you have vegetarian or vegan-friendly options?',
    answer: 'Yes—many pizzas in our menu are vegetarian. For vegan-friendly orders, ask us to remove cheese and confirm toppings.',
  },
  {
    question: 'Can you handle large or catering orders?',
    answer: 'Yes—please call ahead for 5+ pizzas or catering needs. For very large events, 24 hours notice helps us serve you best.',
  },
  {
    question: 'How can I place an order?',
    answer: 'Order online, call us directly, or stop by in person.',
  },
  {
    question: 'What payment methods do you take?',
    answer: 'We accept cash and major credit/debit cards in-store. For online orders, we accept credit/debit cards and digital wallets.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Quick answers to the most common questions about Manager's Pizza.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
          <p>
            Still need help? Call us at{' '}
            <a className="text-red-600 font-semibold" href="tel:+12064135548">(206) 413-5548</a>{' '}
            and we'll help you out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
