'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How do I book a tutoring session?',
    a: 'Visit our Services page, fill out the booking form with your subject, curriculum, and preferred date, and we\'ll confirm your session within 24 hours.',
  },
  {
    q: 'Is there a free trial session?',
    a: 'Yes! Your first 30-minute session is completely free with no commitment. This allows us to assess your needs and ensure we\'re a great fit.',
  },
  {
    q: 'What curricula do you cover?',
    a: 'We specialize in IB (International Baccalaureate), AP (Advanced Placement), IGCSE (Cambridge), and A-Level programmes for both Physics and Mathematics.',
  },
  {
    q: 'How are sessions conducted?',
    a: 'All sessions are held online via Zoom, Google Meet, or Microsoft Teams. We use an interactive whiteboard, screen sharing, and recorded sessions so you can review the material anytime.',
  },
  {
    q: 'What is the pricing structure?',
    a: 'A single 1-hour session is $50. We also offer packages: 5 sessions for $225 (save 10%) and 10 sessions for $400 (save 20%). All packages are valid for 3 months.',
  },
  {
    q: 'Can I study both Physics and Mathematics?',
    a: 'Absolutely! Many students study both subjects with us. You can book sessions for either subject independently or bundle them for extra savings.',
  },
  {
    q: 'How long are the sessions?',
    a: 'Standard sessions are 1 hour. We can also arrange 1.5-hour or 2-hour intensive sessions upon request, billed at the same hourly rate.',
  },
  {
    q: 'What if I need to cancel or reschedule?',
    a: 'We require at least 24 hours\' notice for cancellations or rescheduling. Sessions cancelled with less notice are charged in full. Sessions rescheduled with more than 24 hours\' notice are free.',
  },
  {
    q: 'Do you provide study materials and resources?',
    a: 'Yes! All students receive topic summary notes, past paper questions, and worked examples after each session. Premium packages include a personalized study plan.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept PayPal, Stripe (Visa/Mastercard), bank transfer, Wise, and Revolut. Payment is due before each session or at the time of booking a package.',
  },
  {
    q: 'Can sessions be recorded?',
    a: 'Yes, all sessions can be recorded upon request at no extra charge. Recordings are shared with the student within 24 hours via a secure link.',
  },
  {
    q: 'Are you available on weekends?',
    a: 'Yes! We offer flexible scheduling including evenings and weekends to accommodate students in different time zones around the world.',
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">
            Everything you need to know about our tutoring services.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#1e3a5f] pr-4">{faq.q}</span>
                  <span className={`flex-shrink-0 text-[#2563eb] font-bold text-xl transition-transform ${openIndex === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5 border-t border-gray-50">
                    <p className="text-gray-600 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
            <p className="text-blue-200 mb-6">We&apos;re happy to help! Reach out to us directly.</p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#f59e0b] text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#d97706] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
