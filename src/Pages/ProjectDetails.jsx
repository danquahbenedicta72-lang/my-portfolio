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
    tag: 'AGRICULTURE',

    title: 'Crop Disease',

    accent: 'Detection',

    image: cropDisease,

    overviewImage: cropDiseaseDashboard,

    description:
      'A machine learning solution designed to support the early identification of crop diseases and improve sustainable agricultural practice.',

    type: 'Machine Learning',

    technology: 'Python',

    category: 'Agriculture',

    status: 'Concept',

    overviewTitle: 'From Data to',

    overviewAccent: 'Healthier Crops',

    overview:
      'Crop Disease Detection explores the use of machine learning to assist with the early identification of crop diseases. The project applies data-driven methods to a practical agricultural challenge where early recognition can support better decision-making and improve crop productivity.',

    focus: 'Early disease identification',

    duration: 'Academic Project',

    problem:
      'Crop diseases can negatively affect agricultural productivity when they are not identified early. A practical digital approach can help transform visual information into useful insights for agricultural decision-making.',

    solution:
      'The proposed approach uses image-based analysis and machine learning techniques to identify patterns associated with crop diseases and provide a useful classification outcome.',

    technologies: [
      'Python',
      'Machine Learning',
      'Data Analysis',
      'Computer Vision',
    ],

    process: [
      ['01', 'Collect', 'Data'],
      ['02', 'Preprocess', 'Data'],
      ['03', 'Train', 'Model'],
      ['04', 'Evaluate', 'Results'],
    ],

    impact: [
      'Supports early disease identification',
      'Improves data-driven agricultural decisions',
      'Can help reduce potential crop losses',
      'Supports sustainable farming practices',
    ],

    gallery: [
      {
        image: cropDisease,
        label: 'Disease Detection',
      },
      {
        image: cropDiseaseDashboard,
        label: 'Analysis Dashboard',
      },
      {
        image: cropDiseaseResults,
        label: 'Leaf Classification',
      },
      {
        image: cropDiseaseField,
        label: 'Field Application',
      },
    ],
  },


  /* =========================================================
     SMART WASTE
     ========================================================= */

  'smart-waste-management': {
    tag: 'SUSTAINABILITY',

    title: 'Smart Waste',

    accent: 'Management',

    image: smartWaste,

    overviewImage: smartWasteDashboard,

    description:
      'A solar-powered waste management concept designed to improve collection, sorting and responsible recycling.',

    type: 'Intelligent Solution',

    technology: 'IoT / Solar',

    category: 'Sustainability',

    status: 'Concept',

    overviewTitle: 'From Waste to',

    overviewAccent: 'Better Systems',

    overview:
      'Smart Waste Management explores a technology-driven approach to improving waste collection, sorting and responsible recycling through a practical and sustainable system concept.',

    focus: 'Smart waste collection',

    duration: 'Innovation Project',

    problem:
      'Inefficient waste collection and poor sorting practices can contribute to environmental challenges. A smarter system can help improve how waste is collected, classified and managed.',

    solution:
      'The proposed system combines solar-powered operation with intelligent waste-management principles to encourage efficient collection, sorting and responsible recycling.',

    technologies: [
      'IoT',
      'Solar Technology',
      'Data Analytics',
      'System Design',
    ],

    process: [
      ['01', 'Identify', 'Need'],
      ['02', 'Design', 'System'],
      ['03', 'Integrate', 'Technology'],
      ['04', 'Evaluate', 'Impact'],
    ],

    impact: [
      'Encourages responsible waste management',
      'Supports efficient waste collection',
      'Promotes recycling practices',
      'Uses sustainable energy principles',
    ],

    gallery: [
      {
        image: smartWaste,
        label: 'Smart Waste Concept',
      },
      {
        image: smartWasteDashboard,
        label: 'Management Dashboard',
      },
      {
        image: smartWasteResults,
        label: 'Waste Sorting System',
      },
      {
        image: smartWasteField,
        label: 'Sustainability Application',
      },
    ],
  },


  /* =========================================================
     LIBRARY MANAGEMENT
     ========================================================= */

  'library-management-system': {
    tag: 'EDUCATION',

    title: 'Library Management',

    accent: 'System',

    image: librarySystem,

    overviewImage: libraryDashboard,

    description:
      'A digital platform designed to streamline library operations and improve access to library resources.',

    type: 'Software System',

    technology: 'React / Supabase',

    category: 'Education',

    status: 'Development',

    overviewTitle: 'From Manual Processes to',

    overviewAccent: 'Digital Access',

    overview:
      'The Library Management System is designed to support centralized library processes by providing a structured digital approach to managing books, students, borrowing, returning, availability and library records.',

    focus: 'Library process management',

    duration: 'Academic Project',

    problem:
      'Manual library processes can make it difficult to maintain accurate records and efficiently track books, students, borrowing and returns.',

    solution:
      'The system centralizes important library processes into a digital platform, making information easier to organize, manage and access.',

    technologies: [
      'React',
      'Supabase',
      'JavaScript',
      'Database Systems',
    ],

    process: [
      ['01', 'Analyse', 'Requirements'],
      ['02', 'Design', 'System'],
      ['03', 'Develop', 'Platform'],
      ['04', 'Test', 'System'],
    ],

    impact: [
      'Improves library record management',
      'Centralizes important information',
      'Supports efficient borrowing and returns',
      'Improves access to library records',
    ],

    gallery: [
      {
        image: librarySystem,
        label: 'Library System',
      },
      {
        image: libraryDashboard,
        label: 'Library Dashboard',
      },
      {
        image: librarySystemFlow,
        label: 'System Overview',
      },
      {
        image: libraryEnvironment,
        label: 'Library Environment',
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
      <main className="project-detail-page project-not-found">

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

      </main>
    )
  }


  return (
    <main
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
                {project.tag}
              </div>

              <h1>
                {project.title}
                <span>{project.accent}</span>
              </h1>

              <p>
                {project.description}
              </p>


              <div className="project-hero-actions">

                <a
                  href={`mailto:danquahbenedicta72@gmail.com?subject=${encodeURIComponent(
                    `Project Enquiry: ${project.title} ${project.accent}`
                  )}`}
                  className="project-gold-button"
                >
                  <span className="button-icon">✉</span>
                  Discuss Project
                  <span>↗</span>
                </a>


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
                  alt={`${project.title} ${project.accent}`}
                />


                {/* Crop Disease AI overlay */}

                {slug === 'crop-disease-detection' && (
                  <>
                    <div className="detection-frame">

                      <div className="detection-label">
                        <span>Disease Detected</span>
                        <strong>98.7%</strong>
                      </div>

                    </div>


                    <div className="hero-thumb-stack">

                      <div>
                        <img
                          src={cropDiseaseResults}
                          alt="Crop classification"
                        />
                      </div>

                      <div>
                        <img
                          src={cropDisease}
                          alt="Crop disease"
                        />
                      </div>

                      <div>
                        <img
                          src={cropDiseaseField}
                          alt="Agricultural field"
                        />
                      </div>

                    </div>
                  </>
                )}

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
                <small>PRIMARY TECHNOLOGY</small>
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
                <small>STATUS</small>
                <strong>{project.status}</strong>
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
                    <small>DURATION</small>
                    <strong>{project.duration}</strong>
                  </div>

                </div>

              </div>

            </div>


            {/* OVERVIEW IMAGE */}

            <div className="overview-image-card">

              <img
                src={project.overviewImage || project.image}
                alt={`${project.title} project overview`}
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

                <span>THE SOLUTION</span>

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
          TECHNOLOGY STACK
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
              Tools &amp; Technologies
            </h2>

            <p>
              Technologies and disciplines contributing to
              the development of this project.
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
              TECHNOLOGY
            </div>

            <h2>
              How It Works
            </h2>

            <p className="section-supporting-text">
              A simple, structured process used to approach
              the project challenge.
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
              EXPECTED IMPACT
            </div>

            <h2>
              Creating Meaningful Results
            </h2>

            <p>
              The project demonstrates how data and technology
              can be applied to a practical challenge while
              creating a foundation for future intelligent
              systems.
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
            PROJECT VISUAL
          </div>

          <h2>
            A closer look at the project
          </h2>

          <p className="gallery-description">
            Explore key visuals and outputs from the{' '}
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
              READY TO BUILD SOMETHING GREAT?
            </span>

            <h2>
              Let's Work <em>Together</em>
            </h2>

            <p>
              Have an idea, a project, or simply want to discuss
              how data and technology can create meaningful impact?
              I'd love to hear from you.
            </p>

          </div>


          <div className="cta-actions">

            <a
              href={`mailto:danquahbenedicta72@gmail.com?subject=${encodeURIComponent(
                `Project Enquiry: ${project.title} ${project.accent}`
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
            </a>


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

    </main>
  )
}

export default ProjectDetails