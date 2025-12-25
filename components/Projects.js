export default function Projects() {
  const projects = [
    {
      title: 'Veteran Stress Trajectories Study',
      status: 'Ongoing Research',
      statusColor: 'bg-green-100 text-green-800',
      description: 'A comprehensive longitudinal investigation examining stress patterns and their relationship to depression outcomes in post-deployment veterans. This multi-year study employs advanced statistical modeling techniques including latent growth curve analysis and structural equation modeling to identify critical intervention windows.',
      highlights: [
        'Longitudinal design tracking 200+ veterans over 24 months',
        'Multi-modal assessment: self-report, clinical interviews, and biomarkers',
        'Identifies high-risk profiles for targeted early intervention',
        'Collaboration with VA Healthcare System and community organizations'
      ],
      impact: 'Findings will inform the development of predictive screening tools and personalized intervention strategies',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Community-Supported Resilience Training',
      status: 'Pilot Phase',
      statusColor: 'bg-blue-100 text-blue-800',
      description: 'Development and pilot testing of a community-based resilience training program designed to strengthen stress management skills and prevent depression onset in veterans transitioning to civilian life. The program integrates cognitive-behavioral strategies, peer support, and community resource navigation.',
      highlights: [
        'Evidence-based curriculum combining CBT, mindfulness, and peer mentorship',
        '8-week group intervention with booster sessions',
        'Partnership with 3 veteran service organizations in Milwaukee',
        'Training community facilitators for sustainable program delivery'
      ],
      impact: 'Preliminary results show 40% reduction in stress symptoms and improved community connectedness',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Implementation Feasibility & Acceptability Study',
      status: 'Manuscript in Preparation',
      statusColor: 'bg-purple-100 text-purple-800',
      description: 'Mixed-methods evaluation of facilitators and barriers to implementing evidence-based mental health interventions within veteran healthcare settings. This study combines quantitative implementation outcome measures with qualitative stakeholder interviews to identify strategies for successful program adoption.',
      highlights: [
        'Interviews with 50+ stakeholders: providers, administrators, and veterans',
        'Assessment of organizational readiness and implementation climate',
        'Development of tailored implementation strategies',
        'Cost-effectiveness analysis for sustainability planning'
      ],
      impact: 'Results will guide implementation roadmap for scaling interventions across VA and community settings',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const publications = [
    {
      type: 'In Preparation',
      title: 'Stress Trajectories as Predictors of Depression in Post-Deployment Veterans',
      authors: 'Lababneh, M., et al.',
      venue: 'Target: Journal of Traumatic Stress',
      year: '2025'
    },
    {
      type: 'In Preparation',
      title: 'Feasibility and Acceptability of Community-Based Resilience Training for Veterans',
      authors: 'Lababneh, M., et al.',
      venue: 'Target: Implementation Science',
      year: '2025'
    },
    {
      type: 'In Preparation',
      title: 'Organizational Factors in Mental Health Implementation: A Veteran Healthcare Perspective',
      authors: 'Lababneh, M., et al.',
      venue: 'Target: Administration and Policy in Mental Health',
      year: '2025'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-[#D4AF6A]/10 text-[#8B7355] rounded-full text-sm font-semibold border border-[#D4AF6A]/20 inline-block mb-4">
            Current Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects & Publications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Research initiatives translating evidence into practice and improving mental health outcomes for veterans
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F5F5DC]/20 to-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-[#D4AF6A]/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF6A] to-[#C19A6B] rounded-xl flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                  Key Highlights
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-[#C19A6B] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#D4AF6A]/5 to-transparent p-4 rounded-xl border-l-4 border-[#C19A6B]">
                <p className="text-sm font-semibold text-gray-900 mb-1">Expected Impact</p>
                <p className="text-sm text-gray-700">{project.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Publications Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center space-x-3 mb-8">
            <svg className="w-8 h-8 text-[#C19A6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-3xl font-bold text-gray-900">
              Publications & Manuscripts
            </h3>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                    {pub.type}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {pub.year}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {pub.title}
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  {pub.authors}
                </p>
                <p className="text-sm text-[#8B7355] font-medium">
                  {pub.venue}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Additional publications and presentations in development. Stay tuned for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
