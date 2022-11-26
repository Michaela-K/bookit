import {ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import { Colors } from "../../styles/theme";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../styles/Navbar/index";

export default function Actions({ matches }) {

  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
          </ListItemIcon>
        </ListItemButton>
        {/* <Divider orientation="vertical" flexItem /> */}
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
        <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        {/* <Divider orientation="vertical" flexItem /> */}
      </MyList>
    </Component>
  );
}