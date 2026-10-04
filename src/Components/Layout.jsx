import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToHash from './ScrollToHash.jsx'

function Layout() {
  return (
    <div className="assignment-page">
      <div className="assignment-canvas">
        <Navbar />
        <ScrollToHash />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout