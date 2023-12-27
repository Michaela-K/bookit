import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";

export const NavbarContainer = styled(Box)(() => ({
  display: "flex",
  background: Colors.news,
  position: "static",
  top: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  marginTop: 0,
  justifyContent: "center",
  padding: "2px 2vw",
}));

export const NavbarHeader = styled(Typography)(() => ({
  // flexGrow: 1,
  fontSize: "3em",
  fontFamily: '"Playfair Display", "serif"',
  color: Colors.denim,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "right",
  alignItems: "center",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
