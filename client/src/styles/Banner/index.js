import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "60%",
  padding: "7vh 6vw 2vh 6vw",
  background:
    "linear-gradient(120deg, rgba(234,231,220,1) 20%, rgba(255,255,255,1) 100%)",
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
  alignItems: "left",
  width: "50%",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "40vw",
  minWidth: "25vw",
  paddingRight: "5vw",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    width: "50vw",
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "30vw",
    display:"none"
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  fontFamily: '"Montserrat", "sans-serif"',
  fontWeight: "600",
  lineHeight: 1.5,
  fontSize: "3.2rem",
  marginBottom: "10px",
  width: "100%",
  display: "flex",
  padding: "0px, 40px",
  color: "#282003",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
    padding: "0px, 0px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    padding: "0px, 0px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", "sans-serif"',
  fontSize: "1.2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10vh"
  },
}));
