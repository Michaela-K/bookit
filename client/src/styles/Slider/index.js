import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  height:"8vh",
  margin: "0vh 0vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: Colors.denim,
  [theme.breakpoints.up("md")]: {
    padding: "5px",
  },
  [theme.breakpoints.up("sm")]: {
    padding:"15px",
    height:"10vh",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", "serif"',
  color: Colors.white,
  fontSize: "1.8rem",
  display:"flex",
  justifyContent:"center",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
}));

export const SliderImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "70vw",
  maxWidth: "700px",
  [theme.breakpoints.down("md")]: {
    width: "40vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));
