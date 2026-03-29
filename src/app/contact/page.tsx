'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] resize-none"
                      placeholder="Tell us about your needs, questions, or feedback..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '📧', title: 'Email', value: 'tutor@eduphysmath.com', href: 'mailto:tutor@eduphysmath.com' },
                  { icon: '💬', title: 'WhatsApp', value: 'Chat with us on WhatsApp', href: 'https://wa.me/1234567890' },
                  { icon: '⏱️', title: 'Response Time', value: 'We reply within 24 hours', href: null },
                ].map((info) => (
                  <div key={info.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-start gap-4">
                    <span className="text-3xl">{info.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f]">{info.title}</h3>
                      {info.href ? (
                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-[#2563eb] hover:underline text-sm">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-500 text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-[#1e3a5f] mb-3">Follow Us</h3>
              <div className="flex gap-3 mb-8">
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com' },
                  { label: 'Instagram', href: 'https://instagram.com' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-[#1e3a5f] text-white rounded-lg text-sm font-medium hover:bg-[#2563eb] transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] rounded-xl h-40 flex items-center justify-center border border-gray-100 shadow-sm">
                <div className="text-center text-white">
                  <div className="text-3xl mb-2">🌍</div>
                  <p className="font-semibold">Available Worldwide</p>
                  <p className="text-sm text-blue-200">Online sessions in any timezone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
