// import { useState } from 'react'

import Header from './components/Header'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Summary from './components/Summary'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
 
  return (

    <div>
      <Header />
      <Summary />
      <Projects />
      <ContactForm />
 
    </div>
  )
}

export default App
