import './AppIndex.js';
import { useEffect } from "react";
import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import theme from "./styles/theme/index"
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Banner2 from './components/Banner2/index.js';
import Footer from './components/Footer/index.js';

function App() {

  useEffect(() => {
    document.title = "Michaela King";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
        <Container  maxWidth="false" sx={{background: "#f5f2e8", 
        fontFamily: "Roboto",display: "flex", minHeight: "87vh", flexDirection: "column"}}> 
        <Banner></Banner>
        <Testimonials></Testimonials>
        <Banner2 ></Banner2>
        </Container>
    </ThemeProvider>
  );
}

export default App;
