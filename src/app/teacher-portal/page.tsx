'use client';

import { useState } from 'react';

const todaysSessions = [
  { time: '9:00 AM', student: 'Sarah M.', subject: 'IB Physics HL', topic: 'Quantum Mechanics', status: 'Upcoming' },
  { time: '11:00 AM', student: 'James K.', subject: 'AP Calculus BC', topic: 'Series Convergence', status: 'Completed' },
  { time: '2:00 PM', student: 'Aisha T.', subject: 'A-Level Maths', topic: 'Integration by Parts', status: 'Upcoming' },
];

const students = [
  { name: 'Sarah M.', curriculum: 'IB', subjects: 'Physics HL, Maths AA HL', sessions: 12, progress: 78 },
  { name: 'James K.', curriculum: 'AP', subjects: 'Calculus BC, Physics C', sessions: 8, progress: 85 },
  { name: 'Aisha T.', curriculum: 'A-Level', subjects: 'Mathematics', sessions: 15, progress: 92 },
  { name: 'Tariq N.', curriculum: 'IGCSE', subjects: 'Physics, Mathematics', sessions: 5, progress: 60 },
];

export default function TeacherPortalPage() {
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
          <div className="text-5xl mb-4">👨‍🏫</div>
          <h1 className="text-3xl font-bold mb-2">Teacher Portal</h1>
          <p className="text-blue-200">Manage sessions, students, and teaching resources</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Login Form */}
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">
              {loggedIn ? '✅ Logged In (Demo Mode)' : 'Teacher Login'}
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
                    placeholder="tutor@eduphysmath.com"
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
                  className="w-full py-2.5 bg-[#f59e0b] text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#d97706] transition-colors"
                >
                  Login
                </button>
                <p className="text-center text-xs text-gray-400">Demo: enter any email & password</p>
              </form>
            ) : (
              <div className="text-sm text-green-600 bg-green-50 rounded-lg p-3">
                Welcome back, Dr. Rauf! Viewing demo dashboard. 👋
              </div>
            )}
          </div>
        </div>

        {/* Demo Dashboard */}
        <div className={`transition-opacity ${loggedIn ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
          {!loggedIn && (
            <p className="text-center text-sm text-gray-400 mb-6">Login to unlock the full dashboard</p>
          )}

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Today's Sessions", value: '3', icon: '📅' },
              { label: 'Total Students', value: '4', icon: '👥' },
              { label: 'This Month', value: '24', icon: '📊' },
              { label: 'Revenue', value: '$1,200', icon: '💰' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <p className="text-2xl font-bold text-[#1e3a5f]">{s.value}</p>
                <p className="text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Today's Sessions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#1e3a5f]">📅 Today&apos;s Sessions</h2>
              <button className="text-sm text-[#2563eb] hover:underline">+ Add Session</button>
            </div>
            <div className="space-y-3">
              {todaysSessions.map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-gray-100 hover:border-gray-200 bg-gray-50">
                  <div className="text-center bg-[#1e3a5f] text-white rounded-lg px-3 py-1 text-xs font-semibold w-20">
                    {s.time}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#1e3a5f] text-sm">{s.student}</p>
                    <p className="text-xs text-gray-500">{s.subject} · {s.topic}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${s.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {s.status}
                  </span>
                  <div className="flex gap-2">
                    <button className="text-xs px-2 py-1 bg-[#2563eb] text-white rounded hover:bg-[#1d4ed8] transition-colors">Start</button>
                    <button className="text-xs px-2 py-1 border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition-colors">Reschedule</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#1e3a5f]">👥 Student List</h2>
              <button className="text-sm text-[#2563eb] hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 text-gray-400 font-medium">Student</th>
                    <th className="text-left py-2 text-gray-400 font-medium">Curriculum</th>
                    <th className="text-left py-2 text-gray-400 font-medium hidden md:table-cell">Subjects</th>
                    <th className="text-left py-2 text-gray-400 font-medium">Sessions</th>
                    <th className="text-left py-2 text-gray-400 font-medium hidden sm:table-cell">Progress</th>
                    <th className="text-left py-2 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.name} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-3 font-medium text-[#1e3a5f]">{s.name}</td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{s.curriculum}</span>
                      </td>
                      <td className="py-3 text-gray-500 hidden md:table-cell">{s.subjects}</td>
                      <td className="py-3 text-gray-600">{s.sessions}</td>
                      <td className="py-3 hidden sm:table-cell">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-20 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#2563eb] rounded-full" style={{ width: `${s.progress}%` }} />
                          </div>
                          <span className="text-xs text-gray-500">{s.progress}%</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="flex gap-1">
                          <button className="text-xs px-2 py-1 bg-[#e0edff] text-[#2563eb] rounded hover:bg-[#2563eb] hover:text-white transition-colors">View</button>
                          <button className="text-xs px-2 py-1 bg-[#f59e0b]/10 text-[#d97706] rounded hover:bg-[#f59e0b] hover:text-white transition-colors">Message</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
