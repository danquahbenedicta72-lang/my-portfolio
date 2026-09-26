import './App.css'

import heroVisual from './portfolio_assets/hero-visual.png'
import cropDisease from './portfolio_assets/crop-disease.png'
import smartWaste from './portfolio_assets/smart-waste.png'
import librarySystem from './portfolio_assets/library-system.png'

const services = [
  {
    icon: '▥',
    title: 'Data & Analytics',
    text: 'Advanced analysis that reveals patterns, generates actionable insights, and supports evidence-based decisions.',
  },
  {
    icon: '♧',
    title: 'Machine Learning',
    text: 'Predictive models designed to learn from data, evaluate outcomes, and address complex problems.',
  },
  {
    icon: '⚙',
    title: 'Intelligent Solutions',
    text: 'Practical technology solutions combining data, software, and engineering to address real-world needs.',
  },
]

const projects = [
  {
    image: cropDisease,
    tag: 'AGRICULTURE',
    title: 'Crop Disease Detection',
    text: 'Machine learning for early identification of crop diseases to support sustainable agricultural practice.',
  },
  {
    image: smartWaste,
    tag: 'SUSTAINABILITY',
    title: 'Smart Waste Management',
    text: 'A solar-powered waste management concept for efficient collection, sorting, and responsible recycling.',
  },
  {
    image: librarySystem,
    tag: 'EDUCATION',
    title: 'Library Management System',
    text: 'A digital platform designed to streamline library operations and improve access to resources.',
  },
]

const skills = [
  ['🐍', 'Python'],
  ['▤', 'SQL'],
  ['♧', 'Machine Learning'],
  ['▥', 'Data Analysis'],
  ['∑', 'Statistics'],
  ['▥', 'Data Visualization'],
  ['▣', 'Artificial Intelligence'],
  ['☁', 'System Design'],
]

function App() {
  return (
    <div className="assignment-page">
      <div className="assignment-canvas">
        <header className="navbar">
          <a className="brand" href="#home" aria-label="Benedicta Danquah home">
            <span className="brand-mark">BD</span>
            <span className="brand-name">Benedicta Danquah</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a className="active" href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="talk-button"
            href="mailto:danquahbenedicta72@gmail.com?subject=Project%20Enquiry"
          >
            Let's Talk <span>↗</span>
          </a>
        </header>

        <main>
          <section className="hero" id="home">
            <img className="hero-image" src={heroVisual} alt="" />
            <div className="hero-overlay" />

            <div className="hero-content">
              <div className="eyebrow">
                <span />
                MACHINE LEARNING ENGINEER
              </div>

              <h1>
                Turning data into
                <em>solutions that matter.</em>
              </h1>

              <p>
                Data-driven solutions that transform complex information
                into practical insights, intelligent models, and technology
                for real-world challenges.
              </p>

              <div className="hero-buttons">
                <a
                  className="primary-button"
                  href="mailto:danquahbenedicta72@gmail.com?subject=Project%20Enquiry"
                >
                  Let's Work Together <span>↗</span>
                </a>

                <a className="outline-button" href="#projects">
                  View Projects <span>↓</span>
                </a>
              </div>

              <div className="hero-focus">
                <div className="focus-item">
                  <div className="focus-icon">▥</div>
                  <div>
                    <strong>Data Science</strong>
                    <small>Insights from data</small>
                  </div>
                </div>

                <div className="focus-divider" />

                <div className="focus-item">
                  <div className="focus-icon">♧</div>
                  <div>
                    <strong>Machine Learning</strong>
                    <small>Intelligent models</small>
                  </div>
                </div>

                <div className="focus-divider" />

                <div className="focus-item">
                  <div className="focus-icon">◒</div>
                  <div>
                    <strong>Intelligent Systems</strong>
                    <small>Practical technology</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-note" aria-hidden="true">
              <span>Data</span>
              <span>Models</span>
              <span>Impact</span>
              <i />
            </div>
          </section>

          <section className="section services-section" id="services">
            <div className="section-heading">
              <div>
                <div className="section-label"><span /> CORE SERVICES</div>
                <h2>Professional services<br />for measurable results.</h2>
              </div>

              <p>
                Specialized data and technology services designed to
                translate information into insights, intelligent systems,
                and practical outcomes.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contact" aria-label={`Enquire about ${service.title}`}>→</a>
                </article>
              ))}
            </div>
          </section>

          <section className="section projects-section" id="projects">
            <div className="section-heading project-heading">
              <div>
                <div className="section-label"><span /> SELECTED PROJECTS</div>
                <h2>Practical solutions<br />for real-world challenges.</h2>
              </div>

              <p>
                Selected work demonstrating the application of data,
                machine learning, engineering, and innovation to
                meaningful challenges.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <span>{project.tag}</span>
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <a href="#contact">Discuss Project <span>↗</span></a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="skills-section" id="skills">
            <div className="skills-inner">
              <div className="skills-copy">
                <div className="section-label"><span /> TECHNICAL EXPERTISE</div>
                <h2>Tools &amp; technologies</h2>
                <p>
                  A strong technical foundation for developing efficient,
                  scalable, and reliable data-driven solutions.
                </p>
              </div>

              <div className="skills-grid">
                {skills.map(([icon, skill]) => (
                  <div className="skill-pill" key={skill}>
                    <span>{icon}</span>
                    <strong>{skill}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-inner">
              <div className="contact-title">
                <div className="section-label"><span /> GET IN TOUCH</div>
                <h2>Have an idea or<br />problem to solve?</h2>
              </div>

              <p className="contact-copy">
                Professional consultation and collaboration for data,
                machine learning, software, and technology projects.
              </p>

              <div className="contact-actions">
                <a
                  className="contact-button"
                  href="mailto:danquahbenedicta72@gmail.com?subject=Project%20Enquiry"
                >
                  Contact Benedicta <span>↗</span>
                </a>

                <div className="contact-links">
                  <a href="mailto:danquahbenedicta72@gmail.com">✉ Email</a>
                  <i />
                  <a
                    href="https://www.linkedin.com/in/benedicta-danquah-444b412ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    in LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-person">
            <span className="footer-mark">BD</span>
            <div>
              <strong>Benedicta Danquah</strong>
              <small>Machine Learning Engineer</small>
            </div>
          </div>

          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <span className="copyright">© 2026 Benedicta A. Danquah</span>
        </footer>
      </div>
    </div>
  )
}

export default App
