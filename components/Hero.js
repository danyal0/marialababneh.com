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
              
              {/* Brain/Mental Health Image */}
              <div className="absolute inset-0 flex items-center justify-center animate__animated animate__zoomIn animate__delay-1s">
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=800&fit=crop"
                    alt="Mental Health and Neuroscience Research"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF6A]/20 to-[#C19A6B]/20"></div>
                </div>
              </div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="space-y-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=200&h=200&fit=crop"
                      alt="Mental Health Research Icon"
                      fill
                      className="object-cover"
                    />
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
