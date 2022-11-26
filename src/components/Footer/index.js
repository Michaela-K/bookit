import styled from "@emotion/styled";
import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.denim,
        // paddingTop: "20px",
        // height: "5vh",
        position: "static",
        bottom: 0,
        left: 0,
        width: '100%',
        alignItems: 'center',
        zIndex: 99,  
        color: Colors.white,
        fontSize: { xs: '12px', md: '14px' },
        boxShadow: "0px -5px 13px -7px grey",
      }}
    >
      {/* <Grid container spacing={1} justifyContent="center">
        <Grid item md={6} lg={2}> */}
          <List>
            <ListItemText>
              {/* <Typography lineHeight={2} variant="caption2"> */}
                Login
              {/* </Typography> */}
            </ListItemText>
            <ListItemText>
              {/* <Typography lineHeight={2} variant="caption2"> */}
                My Account
              {/* </Typography> */}
            </ListItemText>
          </List>
        {/* </Grid>
      </Grid> */}
    </Box>
  );
}