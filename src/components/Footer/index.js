import styled from "@emotion/styled";
import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Container
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/theme";

export default function Footer() {
  return (
  <>
    <Box
      sx={{
        background: Colors.denim,
        height: "4vh",
        width: "100%",
        display: "flex",
        // flexDirection: "column",
        justifyContent:"center",
        // paddingTop: "20px",
        // height: "5vh",
        position: "fixed",
        bottom: 0,
        // left: 0,
        alignItems: 'center',
        zIndex: 99,  
        color: Colors.white,
        fontSize: { xs: '12px', md: '14px' },
        boxShadow: "0px -5px 13px -7px grey",
      }}
    >
          {/* <List sx={{ display:"flex", alignItems:"center", width: "80vw", padding: "10px"}}>
            <ListItemText>
              <Button href="/login" sx={{color:"#F7CE3E"}}>Login</Button>
              <Button href="/register" sx={{color:"#F7CE3E"}}>Register</Button>
            </ListItemText>
          </List> */}
      <Typography variant="body2" color="text.white" align="center">
        {'Copyright © '}
        <Link color="white" href="https://mui.com/">
          Filled!
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  </>
  );
}