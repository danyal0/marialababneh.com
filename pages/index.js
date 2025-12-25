export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071029] to-[#081827] text-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <header className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-[#082027] font-bold">ML</div>
            <div>
              <h1 className="text-2xl font-semibold">Maria Lababneh</h1>
              <p className="text-sm text-gray-300">PhD Candidate — Health Sciences · University of Wisconsin–Milwaukee</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 text-sm text-gray-300">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main className="mt-8 grid gap-6">
          <section id="about" className="card bg-[rgba(255,255,255,0.03)] p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-medium">About</h2>
                <p className="mt-2 text-gray-200">I'm Maria Lababneh, originally from Irbid, Jordan. I moved to Milwaukee in August 2024 and I'm currently pursuing a PhD in Health Sciences at the University of Wisconsin–Milwaukee. My research focuses on improving mental health outcomes for veterans.</p>
              </div>
              <div>
                <h3 className="font-medium">Quick facts</h3>
                <ul className="mt-2 list-disc list-inside text-gray-200">
                  <li>PhD candidate — Health Sciences</li>
                  <li>Research focus: veteran stress & depression</li>
                  <li>Moved to Milwaukee: August 2024</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="research" className="card bg-[rgba(255,255,255,0.03)] p-6 rounded-lg">
            <h2 className="text-xl font-medium">Research</h2>
            <p className="mt-2 text-gray-200">I study stress and depression in veteran populations, exploring prevention and intervention strategies to improve mental health and resilience. My approach blends mixed-methods research, community-engaged partnerships, and implementation science to translate findings into practice.</p>
            <ul className="mt-3 list-disc list-inside text-gray-200">
              <li>Identify risk and protective factors for veteran depression</li>
              <li>Design scalable interventions to reduce stress symptoms</li>
              <li>Partner with clinics and community organizations for implementation</li>
            </ul>
          </section>

          <section id="projects" className="card bg-[rgba(255,255,255,0.03)] p-6 rounded-lg">
            <h2 className="text-xl font-medium">Projects & publications</h2>
            <p className="mt-2 text-gray-200">Selected work and ongoing projects — (update with links or PDFs):</p>
            <ul className="mt-2 list-disc list-inside text-gray-200">
              <li>Stress trajectories and depression outcomes in veterans (ongoing)</li>
              <li>Community-supported resilience training for veterans</li>
              <li>Manuscripts in preparation on intervention feasibility and acceptability</li>
            </ul>
          </section>

          <section id="contact" className="card bg-[rgba(255,255,255,0.03)] p-6 rounded-lg">
            <div className="md:grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-medium">Contact</h2>
                <p className="mt-2 text-gray-200">If you'd like to collaborate or learn more about my research, please reach out.</p>
                <p className="mt-2 text-gray-200">Email: <em>(add your email)</em></p>
                <p className="mt-2"><a className="inline-block bg-primary text-[#082027] px-4 py-2 rounded-md font-semibold" href="mailto:">Get in touch</a></p>
              </div>
              <div>
                <h3 className="font-medium text-gray-200">Availability</h3>
                <p className="mt-2 text-gray-200">Open to research collaborations, speaking, and community partnerships focused on veteran mental health.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-8 text-center text-sm text-gray-400">Made by Maria Lababneh — PhD Candidate, University of Wisconsin–Milwaukee</footer>
      </div>
    </div>
  )
}
