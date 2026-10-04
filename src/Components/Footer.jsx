import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-person">
        <span className="footer-mark">BD</span>
        <div>
          <strong>Benedicta Danquah</strong>
          <small>Machine Learning Engineer</small>
        </div>
      </div>

      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/#services">Services</Link>
        <Link to="/#skills">Skills</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/#contact">Contact</Link>
      </nav>

      <span className="copyright">© 2026 Benedicta A. Danquah</span>
    </footer>
  )
}

export default Footer