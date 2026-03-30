'use client';

import { useState } from 'react';

const pricingTiers = [
  {
    name: 'Single Session',
    price: '$50',
    unit: '/hr',
    description: 'Perfect for targeted help on specific topics',
    features: ['1-hour one-on-one session', 'Physics or Mathematics', 'Any curriculum', 'Session recording available', 'Follow-up resources'],
    highlight: false,
    cta: 'Book Now',
  },
  {
    name: 'Package – 5 Sessions',
    price: '$225',
    unit: '',
    description: 'Save 10% — ideal for exam preparation',
    features: ['5 hours of tutoring', 'Physics or Mathematics', 'Any curriculum', 'Progress report after 5 sessions', 'Priority scheduling', 'Session recordings'],
    highlight: true,
    cta: 'Get Package',
    badge: 'Save 10%',
  },
  {
    name: 'Package – 10 Sessions',
    price: '$400',
    unit: '',
    description: 'Save 20% — best value for ongoing support',
    features: ['10 hours of tutoring', 'Physics & Mathematics', 'Any curriculum', 'Detailed progress reports', 'Priority scheduling', 'Session recordings', 'Custom study plan'],
    highlight: false,
    cta: 'Get Package',
    badge: 'Save 20%',
  },
];

const paymentMethods = ['PayPal', 'Stripe (Visa/Mastercard)', 'Bank Transfer', 'Wise', 'Revolut'];

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', curriculum: '', date: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [planner, setPlanner] = useState({ hoursPerWeek: 2, weeksUntilExam: 8 });

  const validatedHoursPerWeek = Math.max(1, Number.isFinite(planner.hoursPerWeek) ? planner.hoursPerWeek : 1);
  const validatedWeeksUntilExam = Math.max(1, Number.isFinite(planner.weeksUntilExam) ? planner.weeksUntilExam : 1);
  // Calculates total study hours; with 1 hour per session this equals total sessions.
  const estimatedSessions = Math.max(1, Math.ceil(validatedHoursPerWeek * validatedWeeksUntilExam));
  const totalStudyHours = estimatedSessions; // 1 hour per session assumption keeps values aligned
  const singleCost = estimatedSessions * 50;
  const package5Cost = 225 + Math.max(0, estimatedSessions - 5) * 50;
  const package10Cost = 400 + Math.max(0, estimatedSessions - 10) * 50;

  let suggestedPlan = 'Pay-as-you-go sessions';
  let estimatedCost = singleCost;
  let coverageNote = 'Book single sessions as you need them.';
  let savings = 0;

  if (package10Cost <= package5Cost && package10Cost <= singleCost) {
    suggestedPlan = 'Package – 10 Sessions';
    estimatedCost = package10Cost;
    coverageNote = 'Best for intensive prep with 20% savings.';
    savings = Math.max(0, singleCost - estimatedCost);
  } else if (package5Cost <= singleCost) {
    suggestedPlan = 'Package – 5 Sessions';
    estimatedCost = package5Cost;
    coverageNote = 'Ideal for short sprints with 10% savings.';
    savings = Math.max(0, singleCost - estimatedCost);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const applyPlannerToBooking = () => {
    const note = [
      `Planner summary: ~${estimatedSessions} session(s) over ${validatedWeeksUntilExam} week(s) at ${validatedHoursPerWeek} hour(s)/week.`,
      `Suggested plan: ${suggestedPlan} (est. ~$${estimatedCost}${savings > 0 ? `, saving ~$${savings}` : ''}).`,
    ].join(' ');
    setFormData((prev) => ({
      ...prev,
      message: prev.message ? `${prev.message}\n\n${note}` : note,
    }));
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Services &amp; Booking</h1>
          <p className="text-xl text-blue-100">
            Book your tutoring session or choose a package and start your journey to academic excellence.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-3">Pricing Plans</h2>
          <p className="text-center text-gray-500 mb-10">Transparent pricing with no hidden fees</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border overflow-hidden flex flex-col relative ${
                  tier.highlight
                    ? 'border-[#2563eb] shadow-lg shadow-blue-100'
                    : 'border-gray-200 bg-white shadow-sm'
                }`}
              >
                {tier.highlight && (
                  <div className="bg-[#2563eb] text-white text-center text-xs font-bold py-1.5 tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                {tier.badge && !tier.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#f59e0b] text-[#1e3a5f] text-xs font-bold px-2 py-0.5 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <div className={`p-6 ${tier.highlight ? 'bg-[#2563eb] text-white' : 'bg-white'}`}>
                  <h3 className={`font-bold text-lg mb-1 ${tier.highlight ? 'text-white' : 'text-[#1e3a5f]'}`}>{tier.name}</h3>
                  <p className={`text-sm mb-4 ${tier.highlight ? 'text-blue-200' : 'text-gray-400'}`}>{tier.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${tier.highlight ? 'text-white' : 'text-[#1e3a5f]'}`}>{tier.price}</span>
                    <span className={tier.highlight ? 'text-blue-200' : 'text-gray-400'}>{tier.unit}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 bg-white">
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#booking"
                    className={`block text-center px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                      tier.highlight
                        ? 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]'
                        : 'bg-[#1e3a5f] text-white hover:bg-[#163258]'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Planner */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f59e0b]/15 text-[#b45309] text-xs font-semibold rounded-full">
              ✨ New • Plan your prep
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a5f]">Study Plan Estimator</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tell us how many hours you want to study each week and how many weeks you have before your exam.
              We&apos;ll suggest the most cost-effective package and pre-fill the booking form for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Hours per week</label>
                <input
                  type="number"
                  min={1}
                  step={0.5}
                  value={planner.hoursPerWeek}
                  onChange={(e) => setPlanner((prev) => ({ ...prev, hoursPerWeek: Number(e.target.value) || 1 }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Weeks until exam/goal</label>
                <input
                  type="number"
                  min={1}
                  value={planner.weeksUntilExam}
                  onChange={(e) => setPlanner((prev) => ({ ...prev, weeksUntilExam: Number(e.target.value) || 1 }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>
            </div>
            <p className="text-xs text-gray-400">Planner assumes 1 hour per session. Adjust anytime to see updated recommendations.</p>
          </div>

          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white rounded-xl p-6 shadow-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-blue-100 text-xs uppercase tracking-wide">Estimated Sessions</p>
                  <p className="text-3xl font-bold">{estimatedSessions}</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-blue-100 text-xs uppercase tracking-wide">Total Study Hours</p>
                  <p className="text-3xl font-bold">{totalStudyHours}</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-blue-100 text-xs uppercase tracking-wide mb-1">Suggested Plan</p>
                <p className="text-lg font-semibold">{suggestedPlan}</p>
                <p className="text-blue-100 text-sm">{coverageNote}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-blue-100 text-xs uppercase tracking-wide">Estimated Cost</p>
                  <p className="text-2xl font-bold">${estimatedCost}</p>
                </div>
                {savings > 0 && (
                  <div className="text-emerald-100 text-sm font-semibold">
                    Save about ${savings} vs single sessions
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={applyPlannerToBooking}
              className="mt-6 w-full px-4 py-3 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply to booking form
            </button>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-10 px-4 bg-[#f59e0b]/10 border-y border-[#f59e0b]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">🎉 Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🆓', text: 'First session FREE – no commitment trial' },
              { icon: '👥', text: 'Refer a friend and get 1 free session each' },
              { icon: '📦', text: 'Bundle Physics + Math: extra 5% off packages' },
            ].map((o) => (
              <div key={o.text} className="bg-white rounded-lg p-4 border border-[#f59e0b]/40 shadow-sm">
                <span className="text-2xl mb-2 block">{o.icon}</span>
                <p className="text-sm text-gray-700 font-medium">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-3">Book a Session</h2>
          <p className="text-center text-gray-500 mb-8">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Booking Request Received!</h3>
              <p className="text-green-600">Thank you! We&apos;ll confirm your session within 24 hours via email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                    placeholder="Your full name"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                  >
                    <option value="">Select subject</option>
                    <option>Physics</option>
                    <option>Mathematics</option>
                    <option>Both Physics & Mathematics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Curriculum *</label>
                  <select
                    required
                    value={formData.curriculum}
                    onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                  >
                    <option value="">Select curriculum</option>
                    <option>IB (International Baccalaureate)</option>
                    <option>AP (Advanced Placement)</option>
                    <option>IGCSE</option>
                    <option>A-Level</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message / Additional Info</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] resize-none"
                  placeholder="Tell us about your goals, current level, or any specific topics you need help with..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
              >
                Submit Booking Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-6">Accepted Payment Methods</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {paymentMethods.map((m) => (
              <span key={m} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm font-medium">
                {m}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4">Payment is due before the session. Secure and hassle-free.</p>
        </div>
      </section>
    </div>
  );
}
