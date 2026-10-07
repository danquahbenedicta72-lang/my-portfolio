import './App.css'
import { Routes, Route } from 'react-router-dom'

import Layout from './Components/Layout.jsx'
import Hero from './Components/Hero.jsx'
import Services from './Components/Service.jsx'
import Project from './Components/Project.jsx'
import Skills from './Components/Skills.jsx'
import Contact from './Components/Contact.jsx'

import About from './Pages/About.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import ProjectDetails from './Pages/ProjectDetails.jsx'
import NotFound from './Pages/NotFound.jsx'

import cropDiseaseCard from './portfolio_assets/crop-disease-card.png'
import smartWasteCard from './portfolio_assets/smart-waste-card.png'
import librarySystemCard from './portfolio_assets/library-system-card.png'

/* =========================================================
   SERVICES
   ========================================================= */

const services = [
  {
    icon: '▥',
    title: 'Data & Analytics',
    text:
      'Advanced analysis that reveals patterns, generates actionable insights, and supports evidence-based decisions.',
  },

  {
    icon: '♧',
    title: 'Machine Learning',
    text:
      'Predictive models designed to learn from data, evaluate outcomes, and address complex problems.',
  },

  {
    icon: '⚙',
    title: 'Intelligent Solutions',
    text:
      'Practical technology solutions combining data, software, and engineering to address real-world needs.',
  },
]

/* =========================================================
   PROJECTS
   ========================================================= */

const projects = [
  {
    image: cropDiseaseCard,
    tag: 'AGRICULTURE',
    title: 'Crop Disease Detection',
    text:
      'Machine learning for early identification of crop diseases to support sustainable agricultural practice.',
    slug: 'crop-disease-detection',
  },

  {
    image: smartWasteCard,
    tag: 'SUSTAINABILITY',
    title: 'Smart Waste Management',
    text:
      'A solar-powered waste management concept for efficient collection, sorting, and responsible recycling.',
    slug: 'smart-waste-management',
  },

  {
    image: librarySystemCard,
    tag: 'EDUCATION',
    title: 'Library Management System',
    text:
      'A digital platform designed to streamline library operations and improve access to resources.',
    slug: 'library-management-system',
  },
]

/* =========================================================
   SKILLS
   ========================================================= */

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

/* =========================================================
   HOME PAGE
   ========================================================= */

function Home() {
  return (
    <>
      <Hero />

      <Services
        services={services}
      />

      <Project
        projects={projects}
      />

      <Skills
        skills={skills}
      />

      <Contact />
    </>
  )
}

/* =========================================================
   APPLICATION ROUTES
   ========================================================= */

function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

        {/* PROJECT DETAILS */}
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Route>

    </Routes>
  )
}

export default App
