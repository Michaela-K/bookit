import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  height: '50vh',
  marginTop: '5vh',
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  // background: Colors.secondary,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
     fontFamily: '"Montez", "cursive"',
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  // color: Colors.white,
  fontSize: "1.5rem",
}));

export const TestimonialImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // src: `url(${customers[messageIndex].src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "70vw",
  minWidth: "60vw",
  [theme.breakpoints.down("md")]: {
    width: "40vw",
    // height: "45vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));