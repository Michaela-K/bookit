import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  height: '8vh',
  margin: "0vh 0vh",
  [theme.breakpoints.up("md")]: {
    padding: "5px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: Colors.denim,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", "serif"',
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
  color: Colors.white,
  fontSize: "1.3rem",
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

