import React from 'react';
import  {Index} from './Index';
import DynamicCards from './Cards';
import CustomButtons from './Button';
import CustomNavbar from './Navbar';
import HeroSection from './HeroSection';
import BlogsSection from './components/BlogsSection';
import ContactUsSection from './ContactUs';
import './App.css';



function App() {
  return (
    <>


      <CustomNavbar/>
      <Index/>
      <HeroSection/><br/><br/><br/>
      <CustomButtons/><br/><br/><br/>
     <DynamicCards/><br/><br/><br/>
     <BlogsSection/>
     <ContactUsSection/>
  
    </>
  );
}

export default App;
