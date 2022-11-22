import { List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
// import "@fontsource/montez";
import { Colors, DrawerWidth } from '../theme';
// import { textPopUpTop } from "../../animation";

export const NavbarContainer = styled(Box)(() => ({
 display: 'flex',
 marginTop: 4,
 justifyContent: 'center',
 alignItems: 'center',
 padding: '2px 8px',
}));

export const NavbarHeader = styled(Typography)(() => ({
 padding: '4px',
 flexGrow: 1,
 fontSize: '3em',
 // fontFamily: '"Montez", "cursive"',
 color: Colors.denim,
 // "&:hover": {
 //   animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
 // },
}));

export const MyList = styled(List)(({ type }) => ({
 display: type === 'row' ? 'flex' : 'block',
 flexGrow: 3,
 justifyContent: 'center',
 alignItems: 'center',
}));
