import './App.css'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Work from './Components/Work'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
