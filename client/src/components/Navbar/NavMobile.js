import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { NavbarContainer, NavbarHeader } from "../../styles/Navbar";

export default function NavMobile() {

  /*
  react useState hook to save the current open/close state of the drawer,
  normally variables dissapear afte the function was executed
  */
  const [open, setState] = useState(false);

  
  /*
  function that is being called every time the drawer should open or close,
  the keys tab and shift are excluded so the user can focus between
  the elements with the keys
  */
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (

    <NavbarContainer position="static">
      <Container maxWidth="lg" disableGutters={true}>
        <Toolbar>
        <NavbarHeader textAlign={"center"} variant="h4">
         Finally!
        </NavbarHeader>

            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="open drawer" 
              onClick={toggleDrawer(true)}
              sx={{ 
                mr: 2,
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
              //from which side the drawer slides in
              anchor="right"
              //if open is true --> drawer is shown
              open={open}
              //function that is called when the drawer should close
              onClose={toggleDrawer(false)}
              //function that is called when the drawer should open
              onOpen={toggleDrawer(true)}
            >
                {/* The inside of the drawer */}
                <Box sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#D8C3A5",
                  width:"50vw"
                }}>

                  {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}


                  <Box sx={{mb: 2, display: "flex", flexDirection:"column",alignItems:"center" }}>
                  <IconButton sx={{mb: 2}} onClick={toggleDrawer(false)}>
                    <CloseIcon/>
                  </IconButton>
                  <Divider sx={{mb: 2}} />
                    <ListItemButton>
                      <ListItemText primary="Create" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemText primary="My Events" />
                    </ListItemButton>

                  <Box sx={{
                    display: "flex", 
                    justifyContent:"center", 
                    }}
                  >
                    <Button variant="contained" sx={{m:1, width: .3,backgroundColor: "#E85A4F"}}>Login</Button> 
                  </Box>
                  </Box>
                  
                  {/* {search} */}

                </Box>
              
            </Drawer>
           

        </Toolbar>
      </Container>
    </NavbarContainer>

  );
}