import { Link, useParams } from 'react-router-dom'
import './ProjectDetails.css'

/* =========================================================
   CROP DISEASE ASSETS
   ========================================================= */

import cropDisease from '../portfolio_assets/crop-disease.png'
import cropDiseaseDashboard from '../portfolio_assets/crop-disease-dashboard.png'
import cropDiseaseResults from '../portfolio_assets/crop-disease-results.png'
import cropDiseaseField from '../portfolio_assets/crop-disease-field.png'

/* =========================================================
   SMART WASTE ASSETS
   ========================================================= */

import smartWaste from '../portfolio_assets/smart-waste.png'
import smartWasteDashboard from '../portfolio_assets/smart-waste-dashboard.png'
import smartWasteResults from '../portfolio_assets/smart-waste-results.png'
import smartWasteField from '../portfolio_assets/smart-waste-field.png'

/* =========================================================
   LIBRARY ASSETS
   ========================================================= */

import librarySystem from '../portfolio_assets/library-system.png'
import libraryDashboard from '../portfolio_assets/library-dashboard.png'
import librarySystemFlow from '../portfolio_assets/library-system-flow.png'
import libraryEnvironment from '../portfolio_assets/library-environment.png'


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = {
  'crop-disease-detection': {
    title: 'Crop Disease',

    accent: 'Detection',

    image: cropDisease,

    overviewImage: cropDiseaseDashboard,

    description:
      'An academic project concept exploring how image analysis and machine learning could support early crop disease identification.',

    type: 'Academic project',

    technology: 'Proposed: Python',

    category: 'Agriculture',

    overviewTitle: 'Exploring',

    overviewAccent: 'Crop Health',

    overview:
      'This academic project proposes exploring machine learning for early crop disease identification. It frames an agricultural challenge and outlines how image-based analysis might be investigated. The concept has not been implemented or evaluated.',

    focus: 'Early disease identification',

    duration: 'Academic project',

    problem:
      'Crop diseases can negatively affect agricultural productivity when they are not identified early. This project considers whether image-based analysis could help provide useful information for agricultural decision-making.',

    solution:
      'The proposed direction is to investigate image-based analysis and machine learning for patterns associated with crop diseases. A working classifier and its performance have not been established.',

    technologies: [
      'Python',
      'Machine Learning',
      'Data Analysis',
      'Computer Vision',
    ],

    process: [
      ['01', 'Identify', 'Data needs'],
      ['02', 'Plan', 'Preprocessing'],
      ['03', 'Explore', 'Model options'],
      ['04', 'Define', 'Evaluation'],
    ],

    impact: [
      'Could inform earlier crop disease investigation',
      'Could support data-informed decisions if validated',
      'Potential to explore approaches to crop-loss prevention',
      'Could contribute to future sustainable farming tools',
    ],

    gallery: [
      {
        image: cropDisease,
        label: 'Crop disease concept visual',
      },
      {
        image: cropDiseaseDashboard,
        label: 'Proposed analysis dashboard concept',
      },
      {
        image: cropDiseaseResults,
        label: 'Illustrative leaf-classification concept',
      },
      {
        image: cropDiseaseField,
        label: 'Illustrative agricultural application',
      },
    ],
  },


  /* =========================================================
     SMART WASTE
     ========================================================= */

  'smart-waste-management': {
    title: 'Smart Waste',

    accent: 'Management',

    image: smartWaste,

    overviewImage: smartWasteDashboard,

    description:
      'An academic concept exploring how solar power and connected technology could support waste collection, sorting and recycling.',

    type: 'Academic project',

    technology: 'Proposed: IoT / solar',

    category: 'Sustainability',

    overviewTitle: 'Exploring',

    overviewAccent: 'Smarter Waste Systems',

    overview:
      'This academic project proposes a technology-driven approach to waste collection, sorting and recycling. It explores how connected systems and solar power might contribute to a more sustainable design. The concept has not been implemented or tested.',

    focus: 'Smart waste collection',

    duration: 'Academic project',

    problem:
      'Inefficient waste collection and poor sorting practices can contribute to environmental challenges. This concept considers how a connected system might support collection, classification and management.',

    solution:
      'The proposed direction is to explore solar-powered operation alongside connected waste-management features. Hardware, software and operational feasibility would need to be designed and tested.',

    technologies: [
      'IoT',
      'Solar Technology',
      'Data Analytics',
      'System Design',
    ],

    process: [
      ['01', 'Define', 'Waste needs'],
      ['02', 'Explore', 'System design'],
      ['03', 'Plan', 'Technology'],
      ['04', 'Identify', 'Tests needed'],
    ],

    impact: [
      'Could explore more responsible waste handling',
      'Could investigate collection workflows',
      'Could encourage sorting and recycling design',
      'Would consider renewable energy requirements',
    ],

    gallery: [
      {
        image: smartWaste,
        label: 'Smart waste concept visual',
      },
      {
        image: smartWasteDashboard,
        label: 'Proposed management dashboard concept',
      },
      {
        image: smartWasteResults,
        label: 'Illustrative waste-sorting concept',
      },
      {
        image: smartWasteField,
        label: 'Illustrative sustainability application',
      },
    ],
  },


  /* =========================================================
     LIBRARY MANAGEMENT
     ========================================================= */

  'library-management-system': {
    title: 'Library Management',

    accent: 'System',

    image: librarySystem,

    overviewImage: libraryDashboard,

    description:
      'An academic project concept for a digital library platform to organize resources and explore common library workflows.',

    type: 'Academic project',

    technology: 'Proposed: React / Supabase',

    category: 'Education',

    overviewTitle: 'Planning for',

    overviewAccent: 'Digital Library Access',

    overview:
      'This academic project proposes a digital approach to organizing library resources and exploring book, student, borrowing and return workflows. It has not been implemented; the interface and system visuals represent design concepts.',

    focus: 'Library process management',

    duration: 'Academic project',

    problem:
      'Manual library processes can make it difficult to maintain accurate records and track books, students, borrowing and returns. This project considers how a digital workflow might address those needs.',

    solution:
      'The proposed approach is to plan a centralized digital platform for organizing library records and workflows. A working system and its usability have not been established.',

    technologies: [
      'React',
      'Supabase',
      'JavaScript',
      'Database Systems',
    ],

    process: [
      ['01', 'Identify', 'User needs'],
      ['02', 'Plan', 'Data structure'],
      ['03', 'Design', 'Workflows'],
      ['04', 'Define', 'Testing needs'],
    ],

    impact: [
      'Could explore clearer library record organization',
      'Could bring key information into one design',
      'Could map borrowing and return workflows',
      'Would require usability testing with users',
    ],

    gallery: [
      {
        image: librarySystem,
        label: 'Proposed library interface concept',
      },
      {
        image: libraryDashboard,
        label: 'Proposed library dashboard concept',
      },
      {
        image: librarySystemFlow,
        label: 'Conceptual system overview',
      },
      {
        image: libraryEnvironment,
        label: 'Illustrative library environment',
      },
    ],
  },
}


/* =========================================================
   COMPONENT
   ========================================================= */

function ProjectDetails() {
  const { slug } = useParams()

  const project = projects[slug]

  /* =======================================================
     PROJECT NOT FOUND
     ======================================================= */

  if (!project) {
    return (
      <div className="project-detail-page project-not-found">

        <div className="project-not-found-content">

          <div className="project-section-label">
            <span />
            PROJECT
          </div>

          <h1>Project not found.</h1>

          <p>
            The requested project could not be found.
          </p>

          <Link
            to="/#projects"
            className="project-gold-button"
          >
            Return to Portfolio
            <span>↗</span>
          </Link>

        </div>

      </div>
    )
  }


  return (
    <div
      className="project-detail-page"
      data-project={slug}
    >

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="project-hero">

        <div className="hero-decoration hero-decoration-left" />
        <div className="hero-decoration hero-decoration-right" />

        <div className="project-shell">

          <Link
            to="/#projects"
            className="project-back-link"
          >
            <span>←</span>
            Back to Projects
          </Link>


          <div className="project-hero-grid">

            {/* LEFT SIDE */}

            <div className="project-hero-copy">

              <div className="project-tag">
                ACADEMIC PROJECT · CONCEPT
              </div>

              <h1>
                {project.title}
                <span>{project.accent}</span>
              </h1>

              <p>
                {project.description}
              </p>


              <div className="project-hero-actions">

                <Link
                  to={`/contact?project=${encodeURIComponent(
                    `${project.title} ${project.accent}`
                  )}`}
                  className="project-gold-button"
                >
                  <span className="button-icon">✉</span>
                  Discuss Project
                  <span>↗</span>
                </Link>


                <Link
                  to="/#projects"
                  className="project-outline-button"
                >
                  Explore Projects
                  <span>↗</span>
                </Link>

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="project-hero-visual">

              <div className="hero-main-image">

                <img
                  src={project.image}
                  alt={`${project.title} ${project.accent} academic concept visual`}
                />


                {/* Supporting project previews */}
                <div className="hero-thumb-stack" aria-label="Project previews">
                  {project.gallery.slice(1, 4).map((item) => (
                    <div key={`hero-${item.label}`}>
                      <img src={item.image} alt={item.label} />
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              META BAR
              ================================================= */}

          <div className="project-meta-bar">

            <div className="project-meta-item">

              <div className="meta-symbol">
                ♧
              </div>

              <div>
                <small>PROJECT TYPE</small>
                <strong>{project.type}</strong>
              </div>

            </div>


            <div className="project-meta-item">

              <div className="meta-symbol">
                ⚙
              </div>

              <div>
                <small>TECHNOLOGIES CONSIDERED</small>
                <strong>{project.technology}</strong>
              </div>

            </div>


            <div className="project-meta-item">

              <div className="meta-symbol">
                ◇
              </div>

              <div>
                <small>CATEGORY</small>
                <strong>{project.category}</strong>
              </div>

            </div>


            <div className="project-meta-item">

              <div className="meta-symbol">
                ◎
              </div>

              <div>
                <small>PROJECT STAGE</small>
                <strong>Concept · not implemented</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT OVERVIEW
          ===================================================== */}

      <section className="project-overview">

        <div className="project-shell">

          <div className="project-overview-top">

            <div className="overview-copy">

              <div className="project-section-label">
                <span />
                PROJECT OVERVIEW
              </div>

              <h2>
                {project.overviewTitle}{' '}
                <em>{project.overviewAccent}</em>
              </h2>

              <p className="project-overview-text">
                {project.overview}
              </p>


              <div className="project-facts">

                <div className="project-fact">

                  <span className="fact-icon">
                    ◎
                  </span>

                  <div>
                    <small>FOCUS</small>
                    <strong>{project.focus}</strong>
                  </div>

                </div>


                <div className="project-fact">

                  <span className="fact-icon">
                    ◷
                  </span>

                  <div>
                    <small>PROJECT CONTEXT</small>
                    <strong>{project.duration}</strong>
                  </div>

                </div>

              </div>

            </div>


            {/* OVERVIEW IMAGE */}

            <div className="overview-image-card">

              <img
                src={project.overviewImage || project.image}
                alt={`${project.title} academic concept illustration`}
              />

            </div>

          </div>


          {/* =================================================
              PROBLEM + SOLUTION
              ================================================= */}

          <div className="challenge-grid">

            <article className="challenge-card">

              <div className="challenge-icon problem-icon">
                !
              </div>

              <div>

                <span>THE CHALLENGE</span>

                <h3>
                  The Problem
                </h3>

                <p>
                  {project.problem}
                </p>

              </div>

            </article>


            <article className="challenge-card">

              <div className="challenge-icon solution-icon">
                ◇
              </div>

              <div>

                <span>PROPOSED DIRECTION</span>

                <h3>
                  Our Approach
                </h3>

                <p>
                  {project.solution}
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONCEPT TECHNOLOGIES
          ===================================================== */}

      <section className="technology-section">

        <div className="technology-decoration technology-decoration-left" />
        <div className="technology-decoration technology-decoration-right" />

        <div className="project-shell technology-inner">

          <div className="technology-copy">

            <div className="project-section-label light">
              <span />
              TECHNOLOGY STACK
            </div>

            <h2>
              Technologies Considered
            </h2>

            <p>
              Technologies considered as part of the academic proposal;
              they have not been used to implement a working system.
            </p>

          </div>


          <div className="technology-list">

            {project.technologies.map((technology) => (

              <div
                className="technology-chip"
                key={technology}
              >

                <span className="technology-icon">
                  ✦
                </span>

                <span>
                  {technology}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS + IMPACT
          ===================================================== */}

      <section className="process-section">

        <div className="project-shell process-grid">

          {/* PROCESS */}

          <div className="process-panel">

            <div className="project-section-label">
              <span />
              PROPOSED WORKFLOW
            </div>

            <h2>
              How It Could Be Explored
            </h2>

            <p className="section-supporting-text">
              A proposed sequence of steps for future investigation,
              not a record of completed implementation.
            </p>


            <div className="process-flow">

              {project.process.map((step, index) => (

                <div
                  className="process-step"
                  key={step[0]}
                >

                  <div className="step-circle">
                    {step[0]}
                  </div>

                  {index < project.process.length - 1 && (
                    <div className="step-arrow">
                      →
                    </div>
                  )}

                  <strong>
                    {step[1]}
                  </strong>

                  <small>
                    {step[2]}
                  </small>

                </div>

              ))}

            </div>

          </div>


          {/* IMPACT */}

          <div className="impact-panel">

            <div className="project-section-label">
              <span />
              POTENTIAL VALUE · NOT YET TESTED
            </div>

            <h2>
              Questions for Future Development
            </h2>

            <p>
              These are possible areas to investigate if the concept
              is developed. No system, impact, or outcome has been
              implemented or measured.
            </p>


            <ul>

              {project.impact.map((item) => (

                <li key={item}>

                  <span>
                    ✓
                  </span>

                  {item}

                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT GALLERY
          ===================================================== */}

      <section className="project-gallery">

        <div className="project-shell">

          <div className="project-section-label light">
            <span />
            ACADEMIC CONCEPT VISUALS
          </div>

          <h2>
            A closer look at the proposal
          </h2>

          <p className="gallery-description">
            Explore illustrative concept visuals for the academic project{' '}
            {project.title.toLowerCase()}{' '}
            {project.accent.toLowerCase()} project.
          </p>


          <div className="gallery-grid">

            {project.gallery.map((item, index) => (

              <figure
                className={`gallery-item ${
                  index === 0 ? 'gallery-featured' : ''
                }`}
                key={`${item.label}-${index}`}
              >

                <div className="gallery-image-wrapper">

                  <img
                    src={item.image}
                    alt={item.label}
                  />

                </div>

                <figcaption>
                  {item.label}
                </figcaption>

              </figure>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="project-cta">

        <div className="project-cta-background" />

        <div className="project-shell project-cta-inner">

          <div className="cta-copy">

            <span className="cta-eyebrow">
              INTERESTED IN THIS ACADEMIC CONCEPT?
            </span>

            <h2>
              Let's Discuss <em>the Idea</em>
            </h2>

            <p>
              This is a proposed academic concept, not a working product.
              Get in touch to discuss the idea or a related collaboration.
            </p>

          </div>


          <div className="cta-actions">

            <Link
              to={`/contact?project=${encodeURIComponent(
                `${project.title} ${project.accent}`
              )}`}
              className="project-gold-button"
            >
              <span className="button-icon">
                ✉
              </span>

              Discuss Project

              <span>
                ↗
              </span>
            </Link>


            <Link
              to="/#projects"
              className="project-outline-button"
            >
              Back to Projects
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}

export default ProjectDetails