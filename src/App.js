import './App.css';
import { useEffect } from "react";
import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {

  useEffect(() => {
    document.title = "Michaela King";
  }, []);

  return (
    <Container  maxWidth="xl"sx={{background: "#fff"}}> 
    <Navbar></Navbar>
    <Banner></Banner>
    </Container>
  );
}

export default App;
