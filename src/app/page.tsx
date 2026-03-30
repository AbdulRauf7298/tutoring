import Link from 'next/link';

const features = [
  { icon: '🎓', title: 'Expert Tutors', desc: 'PhD-qualified tutors with 10+ years of experience in international curricula.' },
  { icon: '📅', title: 'Flexible Scheduling', desc: 'Book sessions around your schedule — weekdays, weekends, any time zone.' },
  { icon: '🌍', title: 'Global Curricula', desc: 'Specialized in IB, AP, IGCSE, and A-Level programs for students worldwide.' },
  { icon: '💡', title: 'Personalized Learning', desc: 'Tailored lesson plans and adaptive teaching to maximize your results.' },
];

const curricula = [
  { badge: 'IB', name: 'International Baccalaureate', desc: 'SL & HL courses for Diploma Programme students.' },
  { badge: 'AP', name: 'Advanced Placement', desc: 'College Board AP courses for US and international students.' },
  { badge: 'IGCSE', name: 'Cambridge IGCSE', desc: 'Core and extended tiers for secondary school students.' },
  { badge: 'A-Level', name: 'Cambridge A-Level', desc: 'AS and A2 courses for pre-university preparation.' },
];

const testimonials = [
  { name: 'Sarah M.', curriculum: 'IB Physics HL', quote: 'Dr. Rauf explained quantum mechanics so clearly. I went from a 4 to a 7 in just 3 months!', },
  { name: 'James K.', curriculum: 'AP Calculus BC', quote: 'The personalized approach made all the difference. I scored a 5 on my AP exam. Highly recommended!' },
  { name: 'Aisha T.', curriculum: 'A-Level Mathematics', quote: 'Flexible scheduling and patient teaching helped me achieve an A* in my A-Level exams.' },
];

export default function Home() {
  return (
    <div className="bg-[#f8fafc]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <span>🌟</span>
            <span>Trusted by 500+ Students Worldwide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Master Physics &amp; Mathematics with{' '}
            <span className="text-[#f59e0b]">Expert Online Tutoring</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Specialized tutoring for IB, AP, IGCSE, and A-Level curricula. One-on-one sessions
            designed to help you achieve top grades and deep understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-3 bg-[#f59e0b] text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#d97706] transition-colors text-lg"
            >
              Book a Free Trial
            </Link>
            <Link
              href="/courses"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1e3a5f] transition-colors text-lg"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-3">Why Choose EduPhysMath?</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            We combine academic excellence with flexible, personalized teaching to help every student succeed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-[#1e3a5f] text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curricula */}
      <section className="py-16 px-4 bg-[#1e3a5f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-3">Curricula We Cover</h2>
          <p className="text-center text-blue-200 mb-10">Supporting students across all major international programmes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curricula.map((c) => (
              <div key={c.badge} className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="inline-block px-4 py-1 bg-[#f59e0b] text-[#1e3a5f] font-bold rounded-full text-lg mb-3">
                  {c.badge}
                </div>
                <h3 className="text-white font-semibold mb-2">{c.name}</h3>
                <p className="text-blue-200 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/courses"
              className="px-6 py-3 bg-[#f59e0b] text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#d97706] transition-colors"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-10">Subjects Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚡</span>
                <h3 className="text-2xl font-bold text-[#1e3a5f]">Physics</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                {['Mechanics & Kinematics', 'Electricity & Magnetism', 'Waves & Optics', 'Thermodynamics', 'Nuclear & Particle Physics', 'Quantum Mechanics', 'Astrophysics & Cosmology'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-[#2563eb]">✓</span> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📐</span>
                <h3 className="text-2xl font-bold text-[#1e3a5f]">Mathematics</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                {['Algebra & Functions', 'Calculus (Differential & Integral)', 'Statistics & Probability', 'Geometry & Trigonometry', 'Vectors & Matrices', 'Complex Numbers', 'Differential Equations'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-[#2563eb]">✓</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-3">What Our Students Say</h2>
          <p className="text-center text-gray-500 mb-10">Real results from real students across the globe</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-[#f59e0b] text-xl mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#1e3a5f]">{t.name}</p>
                  <p className="text-sm text-[#2563eb]">{t.curriculum}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Access */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-10">Quick Portal Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#2563eb] to-[#1e3a5f] rounded-xl p-8 text-white text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">Student Portal</h3>
              <p className="text-blue-200 mb-6">Access your sessions, resources, and progress tracking.</p>
              <Link
                href="/student-portal"
                className="inline-block px-6 py-3 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Student Login →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] rounded-xl p-8 text-white text-center border-2 border-[#f59e0b]">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold mb-3">Teacher Portal</h3>
              <p className="text-blue-200 mb-6">Manage sessions, student progress, and teaching resources.</p>
              <Link
                href="/teacher-portal"
                className="inline-block px-6 py-3 bg-[#f59e0b] text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#d97706] transition-colors"
              >
                Teacher Login →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
