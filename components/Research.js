import Image from 'next/image';

export default function Research() {
  const researchAreas = [
    {
      title: 'Stress Trajectories & Depression',
      description: 'Investigating longitudinal patterns of stress and their relationship to depression outcomes in veteran populations. This research employs advanced statistical modeling to identify critical intervention windows and risk factors that predict mental health trajectories over time.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-[#D4AF6A] to-[#C19A6B]'
    },
    {
      title: 'Prevention & Intervention Strategies',
      description: 'Designing and evaluating scalable, evidence-based interventions to reduce stress symptoms and prevent depression onset. Focus on interventions that can be implemented across diverse healthcare settings and community organizations serving veterans.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-[#C19A6B] to-[#A88B5A]'
    },
    {
      title: 'Community-Engaged Research',
      description: 'Building meaningful partnerships with veteran service organizations, healthcare providers, and community stakeholders to ensure research is relevant, culturally sensitive, and directly responsive to the needs of those we aim to serve.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-[#A88B5A] to-[#8B7355]'
    },
    {
      title: 'Implementation Science',
      description: 'Translating research findings into real-world practice through systematic study of methods to promote the integration of evidence-based interventions into routine healthcare delivery and community support systems.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-[#8B7355] to-[#6B5A47]'
    }
  ];

  const goals = [
    'Identify modifiable risk and protective factors for veteran depression',
    'Develop culturally responsive, trauma-informed intervention protocols',
    'Partner with clinics and community organizations for sustainable implementation',
    'Disseminate findings through peer-reviewed publications and community workshops',
    'Advocate for policy changes that support veteran mental health services'
  ];

  return (
    <section id="research" className="py-24 bg-gradient-to-br from-[#F5F5DC] via-[#FAF8F0] to-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#D4AF6A]/5 rounded-full blur-3xl animate__animated animate__pulse animate__infinite animate__slow"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#C19A6B]/5 rounded-full blur-3xl animate__animated animate__pulse animate__infinite animate__slower"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate__animated animate__fadeInDown">
          <span className="px-4 py-2 bg-[#D4AF6A]/10 text-[#8B7355] rounded-full text-sm font-semibold border border-[#D4AF6A]/20 inline-block mb-4 animate__animated animate__bounceIn">
            Research Focus
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Mental Health
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF6A] to-[#C19A6B]">
              Through Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My research program focuses on understanding, preventing, and treating mental health 
            challenges in veteran populations through rigorous science and compassionate care.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate__animated animate__bounceIn`}
                style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Research Goals */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl animate__animated animate__fadeInUp animate__delay-1s overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              {/* Add research image */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg animate__animated animate__fadeInLeft">
                <Image 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                  alt="Clinical Research Environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF6A]/30 to-transparent"></div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Current Research Goals
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                My work is guided by a commitment to actionable, impactful research that directly 
                improves the lives of veterans and their families. Each goal represents a critical 
                step toward systemic change in how we approach veteran mental health.
              </p>
              <div className="flex items-center space-x-3 text-[#C19A6B] font-semibold">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>Evidence-based, community-driven impact</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gradient-to-br from-[#F5F5DC]/30 to-white rounded-xl hover:shadow-md transition-all duration-300 hover:translate-x-2 animate__animated animate__fadeInRight"
                  style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#D4AF6A] to-[#C19A6B] rounded-full flex items-center justify-center text-white font-bold text-sm animate__animated animate__rubberBand"
                    style={{ animationDelay: `${1.7 + index * 0.1}s` }}>
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Methodology Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3">
            {['Mixed-Methods Research', 'Longitudinal Studies', 'Implementation Science', 'Community Partnership'].map((method, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-white text-gray-700 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
