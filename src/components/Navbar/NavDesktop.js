import { ListItemText, ListItemButton,ListItemIcon } from "@mui/material";
import {NavbarContainer, NavbarHeader, MyList} from "../../styles/Navbar/index";
import SearchIcon from "@mui/icons-material/Search";

export default function NavDesktop({matches}){

  return (
    <>
     {/* <h1>Desktop</h1> */}
     <NavbarContainer>
      <NavbarHeader>Booked Desktop</NavbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Events" />
        <ListItemText primary="My Events" />
        <ListItemText primary="Log In" />
        <ListItemText primary="Register" />
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
     </NavbarContainer>
    </>
  );

}