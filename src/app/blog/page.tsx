import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'How to Master IB Physics HL',
    excerpt: 'A comprehensive guide to tackling the most challenging topics in IB Physics HL, from quantum mechanics to astrophysics.',
    curriculum: 'IB',
    subject: 'Physics',
    readTime: '8 min read',
    date: 'Dec 10, 2024',
    featured: true,
  },
  {
    id: 2,
    title: 'AP Calculus BC Preparation Guide',
    excerpt: 'Everything you need to know to score a 5 on AP Calculus BC: study strategies, key topics, and past paper tips.',
    curriculum: 'AP',
    subject: 'Mathematics',
    readTime: '6 min read',
    date: 'Dec 5, 2024',
    featured: false,
  },
  {
    id: 3,
    title: 'IGCSE Mathematics Top Tips',
    excerpt: 'Proven strategies to boost your IGCSE Mathematics grade, covering algebra, geometry, and exam technique.',
    curriculum: 'IGCSE',
    subject: 'Mathematics',
    readTime: '5 min read',
    date: 'Nov 28, 2024',
    featured: false,
  },
  {
    id: 4,
    title: 'A-Level Physics Practical Guide',
    excerpt: 'How to excel in A-Level Physics practicals — from planning experiments to writing perfect conclusions.',
    curriculum: 'A-Level',
    subject: 'Physics',
    readTime: '7 min read',
    date: 'Nov 20, 2024',
    featured: false,
  },
  {
    id: 5,
    title: 'Understanding IB Mathematics AA vs AI',
    excerpt: 'Not sure which IB Maths course to choose? This guide breaks down the differences and helps you decide.',
    curriculum: 'IB',
    subject: 'Mathematics',
    readTime: '4 min read',
    date: 'Nov 15, 2024',
    featured: false,
  },
  {
    id: 6,
    title: 'AP Physics C: Mechanics Study Plan',
    excerpt: 'A 12-week study plan for AP Physics C Mechanics, including calculus-based problem-solving strategies.',
    curriculum: 'AP',
    subject: 'Physics',
    readTime: '9 min read',
    date: 'Nov 8, 2024',
    featured: false,
  },
];

const badgeColors: Record<string, string> = {
  IB: 'bg-purple-100 text-purple-700',
  AP: 'bg-blue-100 text-blue-700',
  IGCSE: 'bg-green-100 text-green-700',
  'A-Level': 'bg-orange-100 text-orange-700',
};

const videoResources = [
  { title: 'IB Physics: Waves & Optics Explained', duration: '45 min' },
  { title: 'AP Calculus BC: Series & Sequences', duration: '38 min' },
  { title: 'A-Level Mechanics: Projectile Motion', duration: '32 min' },
];

const interactiveTools = [
  { name: 'Desmos Graphing Calculator', url: 'https://desmos.com', desc: 'Interactive graphing for functions and calculus.' },
  { name: 'PhET Physics Simulations', url: 'https://phet.colorado.edu', desc: 'Free physics simulations from University of Colorado.' },
  { name: 'Wolfram Alpha', url: 'https://wolframalpha.com', desc: 'Computational intelligence for maths and science.' },
];

const featured = articles.find((a) => a.featured)!;
const regularArticles = articles.filter((a) => !a.featured);

export default function BlogPage() {
  return (
    <div className="bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Blog &amp; Resources</h1>
          <p className="text-xl text-blue-100">
            Study guides, tips, and resources for Physics and Mathematics students across all curricula.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">📌 Featured Article</h2>
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] rounded-2xl overflow-hidden shadow-lg">
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${badgeColors[featured.curriculum]}`}>
                  {featured.curriculum}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/40 text-white border border-white/50">
                  {featured.subject}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{featured.title}</h3>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-blue-200 text-sm mb-6">
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[#f59e0b] text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#d97706] transition-colors"
              >
                Read Full Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-6 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">📚 All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex gap-2 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${badgeColors[article.curriculum]}`}>
                      {article.curriculum}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                      {article.subject}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] mb-2 leading-snug">{article.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{article.excerpt}</p>
                </div>
                <div className="px-6 pb-5 border-t border-gray-50 pt-4 flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    {article.date} · {article.readTime}
                  </div>
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-16 px-4 bg-[#1e3a5f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">🎥 Video Resources</h2>
          <p className="text-blue-200 mb-8">Watch recorded lessons and tutorial videos</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoResources.map((v) => (
              <div key={v.title} className="bg-white/10 border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-colors">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-36 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">▶️</span>
                    </div>
                    <p className="text-white/60 text-xs">{v.duration}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium text-sm">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">🛠️ Interactive Tools</h2>
          <p className="text-gray-500 mb-8">Essential online tools for Physics and Mathematics students</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interactiveTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2563eb]/30 transition-all group"
              >
                <h3 className="font-bold text-[#1e3a5f] mb-2 group-hover:text-[#2563eb] transition-colors">
                  {tool.name} ↗
                </h3>
                <p className="text-sm text-gray-500">{tool.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
