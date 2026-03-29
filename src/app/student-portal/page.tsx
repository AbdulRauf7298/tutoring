'use client';

import { useState } from 'react';
import Link from 'next/link';

const upcomingSessions = [
  { date: 'Mon, Dec 16', time: '10:00 AM', subject: 'IB Physics HL', topic: 'Quantum Mechanics' },
  { date: 'Wed, Dec 18', time: '2:00 PM', subject: 'IB Math AA HL', topic: 'Complex Numbers' },
  { date: 'Fri, Dec 20', time: '11:00 AM', subject: 'IB Physics HL', topic: 'Nuclear Physics' },
];

const progressData = [
  { subject: 'IB Physics HL', progress: 75 },
  { subject: 'IB Mathematics AA HL', progress: 60 },
  { subject: 'Past Paper Practice', progress: 45 },
];

const recentResources = [
  { title: 'IB Physics HL Topic 12 - Quantum Notes', type: 'PDF', date: 'Dec 10' },
  { title: 'Past Paper: Nov 2023 Physics P2', type: 'PDF', date: 'Dec 8' },
  { title: 'Integration Techniques Worksheet', type: 'PDF', date: 'Dec 5' },
  { title: 'Session Recording – Waves', type: 'Video', date: 'Dec 3' },
];

export default function StudentPortalPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">📚</div>
          <h1 className="text-3xl font-bold mb-2">Student Portal</h1>
          <p className="text-blue-200">Access your sessions, resources, and progress tracking</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Login Form */}
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">
              {loggedIn ? '✅ Logged In (Demo Mode)' : 'Student Login'}
            </h2>
            {!loggedIn ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                    placeholder="student@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                    placeholder="••••••••"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
                >
                  Login
                </button>
                <p className="text-center text-xs text-gray-400">Demo: enter any email & password</p>
              </form>
            ) : (
              <div className="text-sm text-green-600 bg-green-50 rounded-lg p-3">
                Welcome back! Viewing demo dashboard below. 👋
              </div>
            )}
          </div>
        </div>

        {/* Demo Dashboard */}
        <div className={`transition-opacity ${loggedIn ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
          {!loggedIn && (
            <p className="text-center text-sm text-gray-400 mb-6">Login to unlock the full dashboard</p>
          )}

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">📅 Upcoming Sessions</h2>
            <div className="space-y-3">
              {upcomingSessions.map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <div className="text-center bg-[#2563eb] text-white rounded-lg px-3 py-1 text-xs font-semibold min-w-[90px]">
                    {s.date}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#1e3a5f] text-sm">{s.subject}</p>
                    <p className="text-xs text-gray-400">{s.topic}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded px-2 py-1">{s.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">📊 Progress Tracking</h2>
              <div className="space-y-4">
                {progressData.map((p) => (
                  <div key={p.subject}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{p.subject}</span>
                      <span className="font-semibold text-[#1e3a5f]">{p.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#2563eb] to-[#1e3a5f] rounded-full"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">📁 Recent Resources</h2>
              <div className="space-y-3">
                {recentResources.map((r) => (
                  <div key={r.title} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${r.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                      {r.type}
                    </span>
                    <p className="flex-1 text-sm text-gray-700 truncate">{r.title}</p>
                    <span className="text-xs text-gray-400">{r.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
            <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">🔗 Quick Links</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: '📅 Book Session', href: '/services' },
                { label: '📚 Courses', href: '/courses' },
                { label: '✉️ Contact Tutor', href: '/contact' },
                { label: '❓ FAQs', href: '/faqs' },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="px-4 py-2 bg-[#e0edff] text-[#2563eb] rounded-lg text-sm font-medium hover:bg-[#2563eb] hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
