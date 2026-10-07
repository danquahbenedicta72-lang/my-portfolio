import { Link } from 'react-router-dom'

function Project({ projects }) {
  return (
    <section
      className="section projects-section"
      id="projects"
    >

      {/* =====================================================
          PROJECT SECTION HEADER
          ===================================================== */}

      <div className="section-heading project-heading">

        <div>

          <div className="section-label">
            <span />
            SELECTED PROJECTS
          </div>

          <h2>
            Practical solutions
            <br />
            for real-world challenges.
          </h2>

        </div>

        <p>
          Selected work demonstrating the application of data,
          machine learning, engineering, and innovation to
          meaningful challenges.
        </p>

      </div>

      {/* =====================================================
          PROJECT CARDS
          ===================================================== */}

      <div className="projects-grid">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.slug}
          >

            {/* PROJECT IMAGE */}
            {/*
              IMPORTANT:
              There is deliberately NO <span> tag here.
              The category label must not be rendered a second
              time over the project image.
            */}
            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            {/* PROJECT INFORMATION */}
            <div className="project-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.text}
              </p>

              {/* PROJECT LINK */}
              <Link
                to={`/projects/${project.slug}`}
              >
                View Case Study
                <span>↗</span>
              </Link>

            </div>

          </article>

        ))}

      </div>

    </section>
  )
}

export default Project
