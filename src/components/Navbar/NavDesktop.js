import { Link, List, ListItem, ListItemText, Typography} from "@mui/material";
import {NavbarContainer, NavbarHeader, MyList} from "../../styles/Navbar/index";
import Actions from "./Actions";

export default function NavDesktop({matches}){
  
  const listItem = [
    {
      text:'Events',
      onclick:"/events"
    }, 
    {
      text:'My Events',
      onclick:"/myevents"
    }, 
    {
      text:'Login',
      onclick:"/login"
    }, 
    {
      text:'Register',
      onclick:"/register"
    }, 
];

  return (
    <>
     <NavbarContainer>
      <NavbarHeader>Finally!</NavbarHeader>
      <MyList type="row">
        <Actions matches={matches}></Actions>
          {listItem.map((list) => {
            return (
              <Link href={list.onclick} key={list.text} 
                sx={{width: "15%",display: "flex", color:"white",textAlign: "right"}}>
                  <ListItemText primary={list.text}></ListItemText>
                </Link> 
          )})};
      </MyList>
     </NavbarContainer>
    </>
  );

}