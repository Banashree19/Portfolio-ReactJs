
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testemonials from './components/Testemonials';
import Contacts from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
  
   <Navbar/>
   <Header/>
   <AboutMe/>
   <Services/>
   <Experience/>
   <Portfolio/>
   <Testemonials/>
   <Contacts/>
   <Footer/>
   </>
  );
}

export default App;
