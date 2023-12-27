import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  height: "100%",
  padding: "7vh 4vh 2vh 4vh",
  background:"rgb(234,231,220)",
  background:"linear-gradient(120deg, rgba(234,231,220,1) 20%, rgba(255,255,255,1) 100%)",
  [theme.breakpoints.down("md")]: {
    padding: "10vh 0vh 2vh 2vh",
    marginBottom: "0vh",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "60%",
  maxWidth:"420px",
  // padding: "2vw",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "40vw",
  minWidth: "40px",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    width: "80vw",
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width:"90vw",
  //  display:"none"
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  fontFamily: '"Montserrat", "sans-serif"',
  fontWeight: "600",
  lineHeight: 1.5,
  fontSize: "4rem",
  marginBottom: "40px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign:"center",
  padding: "0px, 40px",
  color: "#282003",
  [theme.breakpoints.down('md')]: {
    fontSize: '3.5rem',    
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',    
  }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", "sans-serif"',
  fontSize: "1.8rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  textAlign:"center",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));