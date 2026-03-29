'use client';

import { useState } from 'react';

type Course = {
  id: number;
  curriculum: string;
  subject: string;
  title: string;
  level: string;
  topics: string[];
};

const courses: Course[] = [
  { id: 1, curriculum: 'IB', subject: 'Physics', title: 'IB Physics SL/HL', level: 'SL & HL', topics: ['Mechanics', 'Waves & Optics', 'Electricity', 'Nuclear Physics', 'Astrophysics (HL)'] },
  { id: 2, curriculum: 'IB', subject: 'Mathematics', title: 'IB Mathematics AA SL/HL', level: 'SL & HL', topics: ['Algebra', 'Functions', 'Calculus', 'Statistics', 'Proof (HL)'] },
  { id: 3, curriculum: 'IB', subject: 'Mathematics', title: 'IB Mathematics AI SL/HL', level: 'SL & HL', topics: ['Modelling', 'Statistics', 'Calculus', 'Matrices (HL)', 'Graph Theory (HL)'] },
  { id: 4, curriculum: 'AP', subject: 'Physics', title: 'AP Physics 1', level: 'Algebra-Based', topics: ['Kinematics', 'Dynamics', 'Energy', 'Waves', 'Electric Charge'] },
  { id: 5, curriculum: 'AP', subject: 'Physics', title: 'AP Physics 2', level: 'Algebra-Based', topics: ['Fluids', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics'] },
  { id: 6, curriculum: 'AP', subject: 'Physics', title: 'AP Physics C', level: 'Calculus-Based', topics: ['Mechanics (Calc)', 'Electricity & Magnetism', 'Gauss\'s Law', 'Inductance', 'Maxwell\'s Equations'] },
  { id: 7, curriculum: 'AP', subject: 'Mathematics', title: 'AP Calculus AB/BC', level: 'AB & BC', topics: ['Limits', 'Derivatives', 'Integrals', 'Series (BC)', 'Polar Coordinates (BC)'] },
  { id: 8, curriculum: 'AP', subject: 'Mathematics', title: 'AP Statistics', level: 'Intro', topics: ['Data Analysis', 'Probability', 'Inference', 'Regression', 'Hypothesis Testing'] },
  { id: 9, curriculum: 'IGCSE', subject: 'Physics', title: 'IGCSE Physics', level: 'Core & Extended', topics: ['Motion', 'Forces', 'Energy', 'Waves', 'Electricity & Magnetism'] },
  { id: 10, curriculum: 'IGCSE', subject: 'Mathematics', title: 'IGCSE Mathematics', level: 'Core & Extended', topics: ['Number', 'Algebra', 'Geometry', 'Statistics', 'Probability'] },
  { id: 11, curriculum: 'A-Level', subject: 'Physics', title: 'A-Level Physics', level: 'AS & A2', topics: ['Mechanics', 'Materials', 'Electricity', 'Waves', 'Nuclear & Particle Physics'] },
  { id: 12, curriculum: 'A-Level', subject: 'Mathematics', title: 'A-Level Mathematics', level: 'Pure & Applied', topics: ['Pure Maths', 'Statistics', 'Mechanics', 'Proof', 'Differential Equations'] },
];

const curriculaFilters = ['All', 'IB', 'AP', 'IGCSE', 'A-Level'];
const subjectFilters = ['All', 'Physics', 'Mathematics'];

const badgeColors: Record<string, string> = {
  IB: 'bg-purple-100 text-purple-700',
  AP: 'bg-blue-100 text-blue-700',
  IGCSE: 'bg-green-100 text-green-700',
  'A-Level': 'bg-orange-100 text-orange-700',
};

export default function CoursesPage() {
  const [currFilter, setCurrFilter] = useState('All');
  const [subjFilter, setSubjFilter] = useState('All');

  const filtered = courses.filter((c) => {
    const currMatch = currFilter === 'All' || c.curriculum === currFilter;
    const subjMatch = subjFilter === 'All' || c.subject === subjFilter;
    return currMatch && subjMatch;
  });

  return (
    <div className="bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">All Courses</h1>
          <p className="text-xl text-blue-100">
            Choose from our comprehensive range of Physics and Mathematics courses across all major curricula.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-500 self-center mr-1">Curriculum:</span>
              {curriculaFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setCurrFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    currFilter === f
                      ? 'bg-[#1e3a5f] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-500 self-center mr-1">Subject:</span>
              {subjectFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setSubjFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    subjFilter === f
                      ? 'bg-[#2563eb] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <span className="text-sm text-gray-400 ml-auto">{filtered.length} courses found</span>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-16">No courses match the selected filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                  <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] px-5 py-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${badgeColors[course.curriculum]}`}>
                        {course.curriculum}
                      </span>
                      <span className="text-xs text-blue-200">{course.subject}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{course.title}</h3>
                    <p className="text-sm text-blue-200">{course.level}</p>
                  </div>
                  <div className="p-5 flex-1">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Topics Covered</h4>
                    <ul className="space-y-1 mb-4">
                      {course.topics.map((t) => (
                        <li key={t} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="text-[#2563eb] text-xs">●</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-5 pb-5">
                    <a
                      href="/services"
                      className="block text-center px-4 py-2 bg-[#2563eb] text-white rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors"
                    >
                      Learn More / Book
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
