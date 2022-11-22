import { ListItemText} from "@mui/material";
import {NavbarContainer, NavbarHeader, MyList} from "../../styles/Navbar/index";
import Actions from "./Actions";

export default function NavDesktop({matches}){

  return (
    <>
     <NavbarContainer>
      <NavbarHeader>Booked</NavbarHeader>
      <MyList type="row">
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