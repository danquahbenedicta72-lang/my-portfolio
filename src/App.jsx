import './App.css'
import Hero from './Components/Hero.jsx'
import Services from './Components/Service.jsx'
import cropDisease from './portfolio_assets/crop-disease.png'
import smartWaste from './portfolio_assets/smart-waste.png'
import librarySystem from './portfolio_assets/library-system.png'
import Project from './Components/Project.jsx'
import Skills from './Components/Skills.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
const services = [
  {
    icon: '▥',
    title: 'Data & Analytics',
    text: 'Advanced analysis that reveals patterns, generates actionable insights, and supports evidence-based decisions.',
  },
  {
    icon: '♧',
    title: 'Machine Learning',
    text: 'Predictive models designed to learn from data, evaluate outcomes, and address complex problems.',
  },
  {
    icon: '⚙',
    title: 'Intelligent Solutions',
    text: 'Practical technology solutions combining data, software, and engineering to address real-world needs.',
  },
]

const projects = [
  {
    image: cropDisease,
    tag: 'AGRICULTURE',
    title: 'Crop Disease Detection',
    text: 'Machine learning for early identification of crop diseases to support sustainable agricultural practice.',
  },
  {
    image: smartWaste,
    tag: 'SUSTAINABILITY',
    title: 'Smart Waste Management',
    text: 'A solar-powered waste management concept for efficient collection, sorting, and responsible recycling.',
  },
  {
    image: librarySystem,
    tag: 'EDUCATION',
    title: 'Library Management System',
    text: 'A digital platform designed to streamline library operations and improve access to resources.',
  },
]

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

function App() {
  return (
    <div className="assignment-page">
      <div className="assignment-canvas">
        <header className="navbar">
          <a className="brand" href="#home" aria-label="Benedicta Danquah home">
            <span className="brand-mark">BD</span>
            <span className="brand-name">Benedicta Danquah</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a className="active" href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="talk-button"
            href="mailto:danquahbenedicta72@gmail.com?subject=Project%20Enquiry"
          >
            Let's Talk <span>↗</span>
          </a>
        </header>

        <main>
     <Hero/>
         <Services services={services} />   
<Project projects = {projects}/>
<Skills skills={skills} />
<Contact  />

          
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
