import { Link, useSearchParams } from 'react-router-dom'
import './ContactPage.css'

const contactEmail = 'danquahbenedicta72@gmail.com'
const linkedInUrl = 'https://www.linkedin.com/in/benedicta-danquah-444b412ab/'
const githubUrl = 'https://github.com/danquahbenedicta72-lang'

function ContactPage() {
  const [searchParams] = useSearchParams()
  const project = searchParams.get('project') || ''

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name')).trim()
    const email = String(formData.get('email')).trim()
    const projectType = String(formData.get('projectType')).trim()
    const projectName = String(formData.get('project')).trim()
    const message = String(formData.get('message')).trim()
    const subject = `Project enquiry: ${projectName}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      `Project: ${projectName}`,
      '',
      'Project details:',
      message,
    ].join('\n')

    window.location.href =
      `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="contact-page">
      <div className="contact-page-shell">
        <Link className="contact-page-back" to="/#projects">
          <span aria-hidden="true">←</span>
          Back to Projects
        </Link>

        <div className="contact-page-heading">
          <div className="contact-page-label">
            <span />
            PROJECT ENQUIRY
          </div>
          <h1>Tell me about your project.</h1>
          <p>
            Share the goal, challenge, or idea you have in mind. A few details
            will help start a focused conversation.
          </p>
        </div>

        <div className="contact-page-grid">
          <aside className="contact-page-aside">
            <h2>Let’s connect</h2>
            <p>
              Have a collaboration in mind or a question about my work? Choose
              the channel that works best for you.
            </p>

            <div className="contact-page-links">
              <a href={`mailto:${contactEmail}`}>
                <span aria-hidden="true">✉</span>
                <span>
                  <small>EMAIL</small>
                  <strong>{contactEmail}</strong>
                </span>
                <span aria-hidden="true">↗</span>
              </a>

              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">in</span>
                <span>
                  <small>LINKEDIN</small>
                  <strong>Connect professionally</strong>
                </span>
                <span aria-hidden="true">↗</span>
              </a>

              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">⌘</span>
                <span>
                  <small>GITHUB</small>
                  <strong>Explore my work</strong>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-page-note">
              <span aria-hidden="true">✦</span>
              <p>
                You can also use the form to open a prefilled message in your
                email app.
              </p>
            </div>
          </aside>

          <form className="contact-page-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <h2>Project details</h2>
              <p>Fields marked with * are required.</p>
            </div>

            <div className="contact-form-row">
              <label>
                Your name *
                <input
                  autoComplete="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Email address *
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </label>
            </div>

            <label>
              Project type *
              <select name="projectType" defaultValue="" required>
                <option disabled value="">Choose a project type</option>
                <option>Data &amp; analytics</option>
                <option>Machine learning</option>
                <option>Software or intelligent systems</option>
                <option>Consultation or collaboration</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Project or idea *
              <input
                name="project"
                placeholder="What are you working on?"
                required
                defaultValue={project}
              />
            </label>

            <label>
              What would you like to build? *
              <textarea
                name="message"
                placeholder="Tell me about the challenge, your goals, and how I can help."
                required
                rows="5"
              />
            </label>

            <button className="contact-page-submit" type="submit">
              Send project enquiry
              <span aria-hidden="true">↗</span>
            </button>
            <p className="contact-form-footnote">
              Your email app will open with your message ready to send.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
