import { BrowserRouter } from 'react-router-dom';
import {useState,useContext} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from "./components/Hero2"
import Footer from './components/Footer';
import ReferForm from "./components/ReferForm";
import DataContext from './AppContext/DataContext';
function App() {
  const {showForm}=useContext(DataContext);
  return (
    <BrowserRouter>
      {
          showForm && 
          (
            <ReferForm/>
          )
        }
      <Navbar />
      <Hero />
      <Hero2/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
