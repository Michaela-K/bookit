import React from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';

const Events = () => {
  return (
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            margin: "8vh 0vh",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#E85A4F" }}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Create an Event
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="organizer"
                  name="organizer"
                  required
                  fullWidth
                  id="organizer"
                  label="Organizer"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Event Name"
                  name="title"
                  autoComplete="title"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  autoComplete="location"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="I'm not sure what this should be yet?"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                />
              </Grid>
              <Grid container justifyContent="center"  item xs={12}>
              <input
                accept="image/*"
                // className={classes.input}
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                hidden
                />
              <label htmlFor="raised-button-file">
                <Button 
                //  variant="contained"
                 variant="outlined"
                 component="label"
                  // variant="raised" 
                  // component="span" 
                  // className={classes.button}
                  >
                  Upload Attachments
                </Button>
              </label> 
              </Grid>
            </Grid>
              {/* <Divider orientation="vertical" flexItem /> */}
            <Typography component="h1" variant="h5" sx={{mt: "15vh", display: "flex", justifyContent: "center"}}>
              Your Information
            </Typography>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  )
}

export default Events