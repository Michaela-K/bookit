import './App.css';
import { useEffect } from "react";
import { Container } from '@mui/system';
import { Button } from '@mui/material';

function App() {

  useEffect(() => {
    document.title = "Michaela King";
  }, []);

  return (
    <Container  maxWidth="xl"sx={{background: "#fff"}}> 
      <Button variant='contained'>TEST</Button>  
    </Container>
  );
}

export default App;
