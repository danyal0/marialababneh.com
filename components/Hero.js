import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-[#F5F5DC] via-[#FAF8F0] to-white pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate__animated animate__fadeInLeft animate__slow">
            <div className="inline-block animate__animated animate__bounceIn animate__delay-1s">
              <span className="px-4 py-2 bg-[#D4AF6A]/10 text-[#8B7355] rounded-full text-sm font-semibold border border-[#D4AF6A]/20">
                PhD Candidate · Health Sciences
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Advancing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF6A] to-[#C19A6B]">
                Mental Health
              </span>
              for Veterans
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              I'm Maria Lababneh, a PhD candidate at the University of Wisconsin–Milwaukee, 
              dedicated to transforming veteran mental health through innovative research, 
              community partnerships, and evidence-based interventions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF6A] to-[#C19A6B] text-white rounded-full text-base font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                Explore My Research
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full text-base font-semibold hover:border-[#D4AF6A] hover:bg-[#F5F5DC]/20 transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#C19A6B]">2024</div>
                <div className="text-sm text-gray-600 mt-1">Program Start</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#C19A6B]">UWM</div>
                <div className="text-sm text-gray-600 mt-1">University</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#C19A6B]">3+</div>
                <div className="text-sm text-gray-600 mt-1">Active Projects</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block relative animate__animated animate__fadeInRight animate__slow">
            <div className="relative w-full aspect-square">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#D4AF6A]/20 to-[#C19A6B]/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#F5F5DC] to-[#D4AF6A]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              
              {/* Brain Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center animate__animated animate__zoomIn animate__delay-1s">
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  {/* Placeholder gradient - replace with actual brain/mental health image */}
                  <div className="w-full h-full bg-gradient-to-br from-[#D4AF6A] via-[#C19A6B] to-[#A88B5A] flex items-center justify-center">
                    <svg className="w-40 h-40 text-white/80 animate__animated animate__pulse animate__infinite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF6A] to-[#C19A6B] rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">
                    Focus Areas
                  </h3>
                  
                  <ul className="space-y-4">
                    {[
                      'Veteran Mental Health',
                      'Stress & Depression Research',
                      'Community-Based Interventions',
                      'Implementation Science'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#C19A6B] rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
