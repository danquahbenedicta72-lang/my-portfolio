import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section">
      <div className="section-heading">
        <div className="heading-main">
          <div className="section-label">
            <span></span>
            404
          </div>

          <h2>This page doesn't exist.</h2>
        </div>

        <div className="heading-copy">
          The page you're looking for may have been moved, renamed, or
          never existed. Head back to the homepage to find your way around.
        </div>
      </div>

      <div className="hero-buttons">
        <Link className="primary-button" to="/">
          Return Home <span>↗</span>
        </Link>
      </div>
    </section>
  )
}

export default NotFound