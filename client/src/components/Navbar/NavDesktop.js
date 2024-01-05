import { Button, Link, ListItemText } from "@mui/material";
import {
  NavbarContainer,
  NavbarHeader,
  MyList,
} from "../../styles/Navbar/index";
// import Actions from "./Actions";

export default function NavDesktop({ matches }) {
  const listItem = [
    {
      text: "Create",
      onclick: "/events",
    },
    {
      text: "Events",
      onclick: "/myevents",
    },
    // {
    //   text:'Login',
    //   onclick:"/login"
    // },
    // {
    //   text:'Register',
    //   onclick:"/register"
    // },
  ];

  return (
    <>
      <NavbarContainer sx={{ boxShadow: 3 }}>
        <NavbarHeader>
          <Button
            href="/"
            sx={{
              color: "#E85A4F",
              fontSize: "2.5rem",
              fontFamily: '"Playfair Display"',
              textTransform: "none",
              margin: "0px",
              padding: "0px",
            }}
          >
            Finally !
          </Button>
        </NavbarHeader>
        <MyList type="row">
          {/* <Actions matches={matches}></Actions> */}
          {listItem.map((list) => {
            return (
              <Link
                href={list.onclick}
                key={list.text}
                sx={{
                  width: "10%",
                  display: "flex",
                  color: "black",
                  textAlign: "center",
                  textDecoration: "none",
                  fontFamily: '"Montserrat"',
                  fontSize: "2rem",
                  marginRight: "20px"
                }}
              >
                <ListItemText primary={list.text}></ListItemText>
              </Link>
            );
          })}
        </MyList>
      </NavbarContainer>
    </>
  );
}
