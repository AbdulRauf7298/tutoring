import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/privacy', label: 'Privacy & Terms' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚛️</span>
              <span className="text-[#f59e0b] font-bold text-xl">EduPhys</span>
              <span className="font-bold text-xl text-white">Math</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Expert online tutoring in Physics and Mathematics for IB, AP, IGCSE, and A-Level curricula.
              Personalized learning for global students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:tutor@eduphysmath.com" className="hover:text-[#f59e0b] transition-colors">
                  📧 tutor@eduphysmath.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f59e0b] transition-colors"
                >
                  💬 WhatsApp Chat
                </a>
              </li>
              <li className="pt-2">
                <span className="text-white font-medium block mb-1">Follow Us</span>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f59e0b] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f59e0b] transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2563eb]/30 mt-8 pt-6 text-center text-sm text-gray-500">
          © 2024 EduPhysMath. All rights reserved. |{' '}
          <Link href="/privacy" className="hover:text-[#f59e0b] transition-colors">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="/faqs" className="hover:text-[#f59e0b] transition-colors">
            FAQs
          </Link>
        </div>
      </div>
    </footer>
  );
}
