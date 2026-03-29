export default function PrivacyPage() {
  return (
    <div className="bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy &amp; Terms of Service</h1>
          <p className="text-blue-200">Last updated: December 2024</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Privacy Policy */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 pb-4 border-b border-gray-100">🔒 Privacy Policy</h2>

            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">1. Information We Collect</h3>
                <p className="leading-relaxed">
                  We collect information you provide directly to us, such as your name, email address, and any
                  messages you send through our contact or booking forms. We do not collect sensitive personal
                  information beyond what is necessary to deliver our tutoring services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">2. How We Use Your Information</h3>
                <p className="leading-relaxed">
                  Your information is used solely to schedule sessions, communicate with you about your tutoring
                  needs, send session confirmations and resources, and improve the quality of our services.
                  We do not sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">3. Session Recordings</h3>
                <p className="leading-relaxed">
                  With your explicit consent, tutoring sessions may be recorded for your personal review. Recordings
                  are stored securely and are only accessible to the student and tutor involved. Recordings are
                  deleted upon request or after 6 months of inactivity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">4. Data Security</h3>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. All data is transmitted over
                  encrypted connections (HTTPS).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">5. Cookies</h3>
                <p className="leading-relaxed">
                  This website uses minimal cookies necessary for functionality. We do not use tracking cookies or
                  third-party advertising cookies. You can disable cookies in your browser settings at any time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">6. Your Rights</h3>
                <p className="leading-relaxed">
                  You have the right to access, correct, or delete any personal information we hold about you.
                  To exercise these rights, please contact us at tutor@eduphysmath.com. We will respond to your
                  request within 30 days.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">7. Contact</h3>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:tutor@eduphysmath.com" className="text-[#2563eb] hover:underline">
                    tutor@eduphysmath.com
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 pb-4 border-b border-gray-100">📋 Terms of Service</h2>

            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">1. Service Agreement</h3>
                <p className="leading-relaxed">
                  By booking a tutoring session with EduPhysMath, you agree to these Terms of Service. Our
                  services are provided for educational purposes only. We reserve the right to refuse service
                  at our discretion.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">2. Payment</h3>
                <p className="leading-relaxed">
                  Payment is required in advance before each session or at the time of purchasing a package.
                  All prices are in USD. Packages are valid for 3 months from the date of purchase and are
                  non-transferable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">3. Cancellation Policy</h3>
                <p className="leading-relaxed">
                  Sessions may be cancelled or rescheduled with at least 24 hours&apos; notice at no charge.
                  Cancellations made with less than 24 hours&apos; notice will be charged in full. Repeated
                  late cancellations may result in termination of the service agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">4. Refund Policy</h3>
                <p className="leading-relaxed">
                  Unused sessions in a package are refundable within 30 days of purchase, minus a 10%
                  administration fee. Sessions that have already been conducted are non-refundable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">5. Intellectual Property</h3>
                <p className="leading-relaxed">
                  All study materials, notes, worksheets, and resources provided by EduPhysMath are the
                  intellectual property of Dr. Abdul Rauf. They are provided for personal educational use only
                  and may not be reproduced, distributed, or sold without explicit written permission.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">6. Conduct</h3>
                <p className="leading-relaxed">
                  We expect all students to maintain respectful and professional conduct during sessions.
                  Any form of harassment, inappropriate behavior, or academic dishonesty (such as requesting
                  help to cheat on exams) will result in immediate termination of service without refund.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">7. Limitation of Liability</h3>
                <p className="leading-relaxed">
                  EduPhysMath provides tutoring services in good faith but cannot guarantee specific exam
                  results or grades. Our liability is limited to the amount paid for the relevant tutoring
                  sessions. We are not liable for any indirect or consequential damages.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">8. Governing Law</h3>
                <p className="leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with applicable
                  international laws. Any disputes shall be resolved through good-faith negotiation first,
                  followed by binding arbitration if necessary.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400">
            Questions about our policies? Email us at{' '}
            <a href="mailto:tutor@eduphysmath.com" className="text-[#2563eb] hover:underline">
              tutor@eduphysmath.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
