import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";
import { NavbarContainer, NavbarHeader } from "../../styles/Navbar";
import Actions from "./Actions";


export default function NavMobile({matches}){

  return (
    <>
     <NavbarContainer>
      <NavbarHeader textAlign={"center"} variant="h4">
        Finally!
      </NavbarHeader>
      {/* <IconButton>
        <PersonIcon />
      </IconButton> */}
      <IconButton >
        <MenuIcon />
      </IconButton>
      {/* <Actions matches={matches} /> */}
    </NavbarContainer>
    </>
  );

}