import './App.css';
import { useEffect } from "react";
import { Container } from '@mui/system';

function App() {

  useEffect(() => {
    document.title = "Michaela King";
  }, []);

  return (
    <Container  maxWidth="xl"sx={{background: "#fff"}}> TEST </Container>
  );
}

export default App;
