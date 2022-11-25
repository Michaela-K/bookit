import { Link, List, ListItem, ListItemText, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
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
    } 
];

  return (
    <>
     <NavbarContainer>
      <NavbarHeader>Finally!</NavbarHeader>
      <MyList type="row">

      <List >
      {listItem.map((list) => {
        // const { text, onclick } = item;
          return (
            <Link href={list.onclick} key={list.text}>
              <Typography variant="h5">{list.text}</Typography>
            </Link> 
            )})};
      </List>
        {/* <ListItemText primary="Events" sx={{textAlign: "center"}} />
        <ListItemText primary="My Events"  sx={{textAlign: "center"}}/>
      <Actions matches={matches}></Actions>
        <ListItemText primary="Log In"  sx={{textAlign: "center"}}/>
        <ListItemText primary="Register"  sx={{textAlign: "center"}}/> */}
      </MyList>
     </NavbarContainer>
    </>
  );

}