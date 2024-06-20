// import { useState } from 'react'

import Header from './components/Header';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Summary from './components/Summary';
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import './App.css';


function App() {
    // const [count, setCount] = useState(0)

    return (
        <div className="App">
           <Sidebar />
           
            <div className="main-content">
                <Header />
                <Summary />
                <Projects />
                <ContactForm />
                <Footer />
            </div>
           
        </div>
    );
}

export default App;
