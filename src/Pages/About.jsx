import { Link } from 'react-router-dom'
import './About.css'
import aboutProfile from '../portfolio_assets/about-profile.png'

function About() {
  return (
    <section className="about-page">

      {/* PHOTO (right side, fades into the navy background) */}
      <div className="about-photo">
        <img
          src={aboutProfile}
          alt="Benedicta Danquah"
          className="about-image"
        />

        <div className="about-image-label">
          <span>BD</span>

          <div>
            <strong>Benedicta Danquah</strong>
            <small>Data Science and Analytics</small>
          </div>
        </div>
      </div>

      {/* TEXT (left side) */}
      <div className="about-content">

        <div className="about-label">
          <span />
          ABOUT ME
        </div>

        <h1>
          Turning curiosity into
          <em>intelligent solutions.</em>
        </h1>

        <div className="about-copy">
          <p className="about-intro">
            A Data Science and Analytics student at UMaT, building a
            foundation in data, machine learning and software development.
          </p>

          <p className="about-text">
            Focused on transforming complex data into practical solutions,
            with a long-term goal of becoming a Machine Learning Engineer.
          </p>
        </div>

        {/* EDUCATION */}
        <div className="about-details">
          <div className="about-detail">
            <span>EDUCATION</span>
            <strong>BSc Data Science and Analytics</strong>
            <small>University of Mines and Technology</small>
          </div>

          <div className="about-detail">
            <span>GRADUATION</span>
            <strong>2030</strong>
          </div>
        </div>

        {/* TAGS */}
        <div className="about-interests">
          <div className="interest-list">
            <div>Machine Learning</div>
            <div>Data Analytics</div>
            <div>Artificial Intelligence</div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="about-actions">
          <a
            href="mailto:danquahbenedicta72@gmail.com?subject=Portfolio%20Enquiry"
            className="about-primary-button"
          >
            Get In Touch
            <span>↗</span>
          </a>

          <a
            href="mailto:danquahbenedicta72@gmail.com"
            className="about-outline-button"
          >
            Email
            <span>↗</span>
          </a>

          <a
            href="https://github.com/danquahbenedicta72-lang"
            target="_blank"
            rel="noopener noreferrer"
            className="about-outline-button"
          >
            GitHub
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/benedicta-danquah-444b412ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-outline-button"
          >
            LinkedIn
            <span>↗</span>
          </a>
        </div>

        <Link to="/" className="about-back-link">
          Back to Home
          <span>↗</span>
        </Link>

      </div>
    </section>
  )
}

export default About