
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import LandBody from './Component/LandBody/LandBody'
import Navbar from './Component/Navbar/Navbar'
import Client from './Component/Client/Client'
import Work from './Component/Work/Work'

function App() {

  return (
    <div className="scrollable-container">
    <Navbar/>
    <LandBody/>
    <Work/>
    <Client/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
