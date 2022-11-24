import './App.css';
import { useEffect } from "react";
import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';

function App() {

  useEffect(() => {
    document.title = "Michaela King";
  }, []);

  return (
    <Container  maxWidth="xl"sx={{background: "#fcfcfc", fontFamily: "Roboto"}}> 
    <Navbar></Navbar>
    <Banner></Banner>
    <Testimonials></Testimonials>
    </Container>
  );
}

export default App;
