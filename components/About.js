import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <Image 
          src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=1920&h=1080&fit=crop"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate__animated animate__fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF6A] to-[#C19A6B] mx-auto rounded-full animate__animated animate__slideInLeft"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="bg-gradient-to-br from-[#F5F5DC] to-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-500 animate__animated animate__fadeInLeft">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg animate__animated animate__bounceIn">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="Maria Lababneh - PhD Candidate"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Maria Lababneh</h3>
                <p className="text-[#8B7355] font-medium">PhD Candidate</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#C19A6B] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm">Milwaukee, WI</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#C19A6B] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold">Originally From</p>
                  <p className="text-sm">Irbid, Jordan</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#C19A6B] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <div>
                  <p className="font-semibold">Institution</p>
                  <p className="text-sm">University of Wisconsin–Milwaukee</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#C19A6B] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold">Program Start</p>
                  <p className="text-sm">August 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6 animate__animated animate__fadeInRight animate__delay-1s">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Originally from Irbid, Jordan, I relocated to Milwaukee in August 2024 to pursue my doctorate 
                in Health Sciences at the University of Wisconsin–Milwaukee. My journey into veteran mental 
                health research is driven by a deep commitment to addressing the unique challenges faced by 
                those who have served our communities and country.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                My research integrates <strong className="text-gray-900">mixed-methods approaches</strong>, 
                <strong className="text-gray-900"> community-engaged partnerships</strong>, and 
                <strong className="text-gray-900"> implementation science</strong> to bridge the gap between 
                research findings and real-world practice. I believe that meaningful change in mental health 
                outcomes requires not just rigorous research, but also collaboration with the communities and 
                organizations that serve veterans daily.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Through my work, I aim to identify evidence-based interventions that are not only effective 
                but also scalable and sustainable within existing healthcare systems. My ultimate goal is to 
                contribute to a future where every veteran has access to the mental health support they need 
                and deserve.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { label: 'Evidence-Based', icon: '📊', delay: '0s' },
                { label: 'Community-Focused', icon: '🤝', delay: '0.2s' },
                { label: 'Collaborative', icon: '🔬', delay: '0.4s' },
                { label: 'Impact-Driven', icon: '🎯', delay: '0.6s' }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-[#F5F5DC]/30 to-white p-4 rounded-xl border border-[#D4AF6A]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate__animated animate__zoomIn"
                  style={{ animationDelay: value.delay }}
                >
                  <div className="text-2xl mb-2 animate__animated animate__heartBeat animate__infinite animate__slow">{value.icon}</div>
                  <div className="text-sm font-semibold text-gray-900">{value.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
