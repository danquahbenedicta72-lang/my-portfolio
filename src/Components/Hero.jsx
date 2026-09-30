import heroVisual from '../portfolio_assets/hero-visual.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero-image"
        src={heroVisual}
        alt="Data science workspace"
      />

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

          {/* LET'S WORK TOGETHER */}
          <a
            className="outline-button"
            href="mailto:danquahbenedicta72@gmail.com?subject=Project%20Enquiry"
          >
            Let's Work Together <span>↗</span>
          </a>

          {/* VIEW PROJECTS */}
          <a
            className="primary-button"
            href="#projects"
          >
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
  )
}