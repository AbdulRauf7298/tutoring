import Link from 'next/link';

const stats = [
  { value: '500+', label: 'Students Taught' },
  { value: '10+', label: 'Years Experience' },
  { value: '4', label: 'Curricula Covered' },
  { value: '98%', label: 'Success Rate' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About EduPhysMath</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Dedicated to making Physics and Mathematics accessible and enjoyable for every student,
            regardless of their starting point.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#f59e0b] py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-[#1e3a5f]">{s.value}</p>
              <p className="text-sm font-medium text-[#1e3a5f]/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tutor Profile */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Meet Your Tutor</h2>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] flex items-center justify-center text-5xl shadow-lg">
                    👨‍🔬
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-1">Dr. Abdul Rauf</h3>
                  <p className="text-[#2563eb] font-medium mb-4">PhD Physics | International Educator</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Dr. Abdul Rauf holds a PhD in Physics and brings over 10 years of dedicated teaching
                    experience in international curricula. Having worked with students from more than 30 countries,
                    he has developed a unique ability to identify and address each student&apos;s specific learning gaps.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Specializing in IB, AP, IGCSE, and A-Level programmes, Dr. Rauf has helped hundreds of
                    students achieve their target grades — many moving from failing scores to top marks in
                    just a few months of intensive tutoring.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['IB Physics & Math', 'AP Physics & Calculus', 'IGCSE Science & Math', 'A-Level Physics & Math', 'PhD Physics'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#e0edff] text-[#2563eb] rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-6">
            To bridge the gap between classroom instruction and true understanding. We believe every
            student has the potential to excel in Physics and Mathematics — they just need the right guidance.
          </p>
          <p className="text-blue-200 leading-relaxed max-w-3xl mx-auto">
            EduPhysMath was founded on the belief that high-quality science and math education should be
            available to every student worldwide, regardless of their location or school system. We are
            committed to delivering exceptional online tutoring that produces real, measurable results.
          </p>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-10">Teaching Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Personalized Approach', desc: 'Every student receives a custom learning plan built around their strengths, weaknesses, and goals. No one-size-fits-all lessons here.' },
              { icon: '🔬', title: 'Interactive Learning', desc: 'We use simulations, real-world examples, and problem-solving exercises to make abstract concepts tangible and engaging.' },
              { icon: '📊', title: 'Progress Tracking', desc: 'Regular assessments and detailed feedback help students and parents track improvement and stay on target for exam success.' },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 mb-8">Book a free 30-minute trial session and experience the EduPhysMath difference.</p>
          <Link
            href="/services"
            className="px-8 py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors text-lg"
          >
            Book Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
