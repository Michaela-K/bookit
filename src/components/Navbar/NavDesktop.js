import { ListItemText, ListItemButton,ListItemIcon } from "@mui/material";
import {NavbarContainer, NavbarHeader, MyList} from "../../styles/Navbar/index";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { PersonPinCircleOutlined } from "@mui/icons-material";

export default function NavDesktop({matches}){

  return (
    <>
     {/* <h1>Desktop</h1> */}
     <NavbarContainer>
      <NavbarHeader>Booked Desktop</NavbarHeader>
      <MyList type="row">
        {/* <ListItemText primary="Home" /> */}
        <ListItemText primary="Events" />
        <ListItemText primary="My Events" />
      <Actions matches={matches}></Actions>
        <ListItemText primary="Log In" />
        <ListItemText primary="Register" />
      </MyList>
     </NavbarContainer>
    </>
  );

}