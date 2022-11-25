import { ListItemText} from "@mui/material";
import {NavbarContainer, NavbarHeader, MyList} from "../../styles/Navbar/index";
import Actions from "./Actions";

export default function NavDesktop({matches}){

  return (
    <>
     <NavbarContainer>
      <NavbarHeader>Finally!</NavbarHeader>
      <MyList type="row">
        <ListItemText primary="Events" sx={{textAlign: "center"}} />
        <ListItemText primary="My Events"  sx={{textAlign: "center"}}/>
      <Actions matches={matches}></Actions>
        <ListItemText primary="Log In"  sx={{textAlign: "center"}}/>
        <ListItemText primary="Register"  sx={{textAlign: "center"}}/>
      </MyList>
     </NavbarContainer>
    </>
  );

}