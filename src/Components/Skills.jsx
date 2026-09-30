    function Skills({skills}) {
    return (
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
    )
}
export default Skills
