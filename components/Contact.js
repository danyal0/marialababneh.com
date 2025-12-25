import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:marialababneh@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setStatus('Opening your email client...');
    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'marialababneh@gmail.com',
      link: 'mailto:marialababneh@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      label: 'Institution',
      value: 'University of Wisconsin–Milwaukee',
      link: 'https://uwm.edu'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Milwaukee, Wisconsin',
      link: null
    }
  ];

  const opportunities = [
    {
      title: 'Research Collaborations',
      description: 'Interdisciplinary partnerships on veteran mental health, implementation science, or community-based research',
      icon: '🤝'
    },
    {
      title: 'Speaking Engagements',
      description: 'Presentations at academic conferences, community forums, or veteran service organization events',
      icon: '🎤'
    },
    {
      title: 'Community Partnerships',
      description: 'Collaboration with organizations serving veterans to co-design and implement evidence-based programs',
      icon: '🌟'
    },
    {
      title: 'Mentorship & Consultation',
      description: 'Supporting students and early-career researchers interested in veteran mental health or implementation science',
      icon: '📚'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#F5F5DC] via-[#FAF8F0] to-white overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF6A]/10 rounded-full blur-3xl animate__animated animate__pulse animate__infinite animate__slower"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate__animated animate__fadeInDown">
          <span className="px-4 py-2 bg-[#D4AF6A]/10 text-[#8B7355] rounded-full text-sm font-semibold border border-[#D4AF6A]/20 inline-block mb-4 animate__animated animate__bounceIn">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to connect with fellow researchers, community partners, and anyone passionate 
            about improving veteran mental health outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C19A6B] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C19A6B] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C19A6B] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Research Collaboration Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C19A6B] focus:border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder="Tell me about your inquiry..."
                />
              </div>

              {status && (
                <div className="text-sm text-[#8B7355] bg-[#D4AF6A]/10 p-3 rounded-lg">
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#D4AF6A] to-[#C19A6B] text-white rounded-xl text-base font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Opportunities */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 animate__animated animate__fadeInUp"
                    style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF6A] to-[#C19A6B] rounded-xl flex items-center justify-center text-white hover:rotate-12 transition-transform">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-gray-900 hover:text-[#C19A6B] transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Opportunities */}
            <div className="bg-gradient-to-br from-white to-[#F5F5DC]/20 rounded-3xl p-8 shadow-xl border border-[#D4AF6A]/10 animate__animated animate__zoomIn animate__delay-2s">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Open to Collaboration</h3>
              <div className="grid gap-4">
                {opportunities.map((opp, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl hover:shadow-md transition-all duration-300 hover:translate-x-2 animate__animated animate__fadeInLeft"
                    style={{ animationDelay: `${2.5 + index * 0.15}s` }}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{opp.icon}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{opp.title}</h4>
                        <p className="text-sm text-gray-600">{opp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#D4AF6A] to-[#C19A6B] rounded-3xl p-12 text-center shadow-2xl animate__animated animate__fadeInUp animate__delay-3s">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's Make a Difference Together
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're interested in research collaboration, speaking engagements, or community 
            partnerships, I'd love to hear from you.
          </p>
          <a
            href="mailto:marialababneh@gmail.com"
            className="inline-block px-8 py-4 bg-white text-[#8B7355] rounded-full text-base font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Email Me: marialababneh@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
