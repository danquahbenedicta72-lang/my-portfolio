function Project({projects}) {
  return (
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
  )
}
export default Project