import './AppIndex.js';
import { useEffect } from "react";
import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Slider from './components/Slider';
import theme from "./styles/theme/index"
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Banner2 from './components/Banner2/index.js';
import Footer from './components/Footer/index.js';
import Review from './components/Review/index.js';
import { Box } from '@mui/material';

function App() {

  useEffect(() => {
    document.title = "Michaela King";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
        <Box  maxWidth="false" sx={{background: "#fcfcfc", fontFamily: "Arial",
        display: "flex", minHeight: "100vh", flexDirection: "column"}}> 
        <Banner></Banner>
        <Review></Review>
        <Slider></Slider>
        <Banner2 ></Banner2>
        </Box>
    </ThemeProvider>
  );
}

export default App;
