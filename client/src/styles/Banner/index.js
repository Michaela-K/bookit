import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "auto",
  padding: "10vh 0vh 0vh 0vh",
  background: Colors.news,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));

export const BannerContent = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 420,
  padding: "30px",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "60vw",
  minWidth: "45vw",
  [theme.breakpoints.down("md")]: {
    width: "40vw",
    // height: "45vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  fontFamily: '"Montserrat", "sans-serif"',
  fontWeight: "400",
  lineHeight: 1.5,
  fontSize: "3rem",
  marginBottom: "20px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down('sm')]: {
    fontSize: '42px',    
  }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", "sans-serif"',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));