import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Benedicta Danquah home">
          <span className="brand-bd">BD</span>
          <span className="brand-leaf">⌁</span>
        </a>

        <nav className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="talk-button" href="mailto:danquahbenedicta72@gmail.com">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="role">
              <span className="role-line"></span>
              MACHINE LEARNING ENGINEER
            </div>

            <h1>
              Growing <em>smarter</em>
              <br />
              solutions from raw
              <br />
              data.
            </h1>

            <h2>Benedicta A. Danquah</h2>
            <br></br>


            <p className="bio">
              From sick crops to discarded plastic, I turn overlooked data
              into models that solve real problems on the ground.
            </p>

            <div className="actions">
              <a
                className="primary-button"
                href="mailto:danquahbenedicta72@gmail.com"
              >
                <span className="mail-icon">✉</span>
                Email me
              </a>

              <a
                className="secondary-button"
                href="https://www.linkedin.com/in/benedicta-danquah-444b412ab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="linkedin-icon">in</span>
                LinkedIn
              </a>
            </div>

            <div className="contact-row">
              <a href="mailto:danquahbenedicta72@gmail.com">
                <span>✉</span>
                danquahbenedicta72@gmail.com
              </a>

              <span className="divider"></span>

              <a
                href="https://github.com/danquahbenedicta72-lang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="github-icon">●</span>
                GitHub ↗
              </a>
            </div>
          </div>
        </section>

        <section className="focus-bar" aria-label="Areas of focus">
          <div className="focus-item">
            <div className="focus-icon">◉</div>
            <div>
              <strong>Data Science</strong>
              <small>Insights from data</small>
            </div>
          </div>

          <div className="focus-item">
            <div className="focus-icon">♧</div>
            <div>
              <strong>Machine Learning</strong>
              <small>Smarter models</small>
            </div>
          </div>

          <div className="focus-item">
            <div className="focus-icon">♢</div>
            <div>
              <strong>Real Impact</strong>
              <small>Better tomorrow</small>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Benedicta A. Danquah</span>
        <span>Data Science · Engineering · Innovation</span>
      </footer>
    </div>
  )
}

export default App
