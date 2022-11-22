import './App.css';
import { useEffect } from "react";
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import Navbar from './components/Navbar';

function App() {

  useEffect(() => {
    document.title = "Michaela King";
  }, []);

  return (
    <Container  maxWidth="xl"sx={{background: "#fff"}}> 
    <Navbar></Navbar>
    </Container>
  );
}

export default App;
