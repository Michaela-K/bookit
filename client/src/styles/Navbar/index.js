import { List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
// import "@fontsource/montez";
import { Colors } from '../theme';
// import { textPopUpTop } from "../../animation";

export const NavbarContainer = styled(Box)(() => ({
  display: 'flex',
  background: Colors.news,
  position: "static",
  top: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
 marginTop: 0,
 justifyContent: 'center',
 padding: '2px 3vw',
}));

export const NavbarHeader = styled(Typography)(() => ({
  //  padding: '4px',
  flexGrow: 1,
 fontSize: '3em',
 fontFamily: '"Playfair Display", "serif"',
 color: Colors.denim,
 // "&:hover": {
 //   animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
 // },
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'right',
  alignItems: 'center',
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  // background: Colors.white,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid ${Colors.border}`
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
