        export default function Services({services}){
        return(    
        
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

        )
    }