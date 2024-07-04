
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero.tsx'
import Dive from './components/Dive.tsx'
import TabPost from './components/TabPost/TabPost.tsx'
import SupplierGroup from './components/SupplierGroup.tsx'
import FunctionsTab from './components/FunctionsTab/FunctionsTab.tsx'
import Footer from './components/Footer/Footer.tsx'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Dive/>
      <TabPost/>
      <SupplierGroup/>
      <FunctionsTab/>
      <Footer/>
    </div>
  )
}

export default App
