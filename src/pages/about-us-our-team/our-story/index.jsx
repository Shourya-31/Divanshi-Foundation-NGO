import React from 'react';

const milestones = [
  {
    year: "The Beginning",
    title: "A Spark of Purpose",
    description:
      "Divanshi Foundation was founded with a singular conviction: every child deserves equal access to quality education, regardless of socioeconomic background.",
    badge: "Origin"
  },
  {
    year: "Early Growth",
    title: "First Community Learning Circles",
    description:
      "Started grassroots weekend learning camps and after-school tutoring for underprivileged children, creating a safe space for curiosity and growth.",
    badge: "Milestone"
  },
  {
    year: "Scaling Reach",
    title: "School Partnerships & Volunteer Network",
    description:
      "Partnered with local schools to supply educational toolkits, digital learning resources, and dedicated volunteer mentors.",
    badge: "Expansion"
  },
  {
    year: "Today & Beyond",
    title: "Empowering Next Generations",
    description:
      "Continually expanding programs across regions, bridging the educational divide through community-driven initiatives, workshops, and student mentorship.",
    badge: "Current Focus"
  },
];

export default function Development() {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            Our Story & Journey
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Development of Divanshi Foundation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
            From a heartfelt initiative to a growing movement, discover how our mission to support children and schools through education evolved over time.
          </p>
        </div>

        {/* Milestone Timeline */}
        <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-32 space-y-12">
          {milestones.map((item, index) => (
            <div key={index} className="relative group pl-8 sm:pl-10">
              
              {/* Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white group-hover:scale-125 transition-transform duration-200"></div>

              {/* Time Label on Desktop */}
              <div className="sm:absolute sm:-left-32 sm:top-1 text-sm font-semibold text-blue-700 uppercase tracking-wide">
                {item.year}
              </div>

              {/* Content Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow duration-200">
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-md mb-2">
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Impact Callout Box */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center shadow-lg">
          <h3 className="text-2xl font-bold">Driven by Purpose, Guided by Care</h3>
          <p className="mt-2 text-blue-100 max-w-2xl mx-auto text-sm sm:text-base">
            Every step in our development reflects the collaborative support of our volunteers, partner organizations, and community mentors.
          </p>
        </div>

      </div>
    </section>
  );
}