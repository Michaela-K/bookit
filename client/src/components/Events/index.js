import React, { useState } from 'react'

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

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


const Events = () => {
  const [value, setValue] = React.useState(dayjs().format());
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = React.useRef();

  const fileSelected = e => {
    setSelectedFile(e.target.files[0].name)
  }

  const handleChange = (newValue) => {
    setValue(newValue.format());
  };

  const user_id = 1;
  const [event, setEvent] = useState({
    organizer: user_id,
    title:"",
    location:"",
    startdate:"",
    startend:"",
    description:"",
    fullName:"",
    email:""
  })

  const handleChange2 = (e) => {
    setEvent({...event, [e.target.name]: e.target.value, "date":value});
    // console.log(e.target.name, e.target.value)
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(event)

    const res = await fetch('http://localhost:4000/api/events',{
      method:'POST',
      body: JSON.stringify(event),
      headers: {"Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'}
    });
    const data = await res.json()
    // window.location.reload()
    console.log(data)
    console.log(event)
  }


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
          <form onSubmit={handleSubmit} action="/create" method="POST">
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="organizer"
                  name="organizer"
                  fullWidth
                  id="organizer"
                  label="User Name"
                  autoFocus
                  onChange={handleChange2}
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
                  onChange={handleChange2}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  autoComplete="location"
                  onChange={handleChange2}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                label="Date"
                type="date"
                name="date"
                // defaultValue="2022-12-30"
                fullWidth
                onChange={handleChange2}
                // sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
              <TextField
                id="time"
                label="Time"
                type="time"
                name="time"
                // defaultValue="08:30"
                fullWidth
                onChange={handleChange2}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                // sx={{ width: 150 }}
              />
              </Grid> */}
              {/* <Grid item xs={12}>
              <TextField
                id="date"
                label="date"
                type="datetime-local"
                // pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
                inputFormat="yyyy-MM-dd"
                name="date"
                defaultValue={Date.now()}
                fullWidth
                // sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="thumbnail"
                  label="add a link to your event image"
                  name="thumbnail"
                  autoComplete="thumbnail"
                  onChange={handleChange2}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  id="description"
                  label="Description: describe the event, attach a map location or a pinterest idea board"
                  name="description"
                  autoComplete="description"
                  onChange={handleChange2}
                />
              </Grid>

              <Grid container justifyContent="center"  item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={2} mt={5}>
                {/* <Grid item xs={12} sm={6}>
                  <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MobileDatePicker
                    label="Date mobile"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                        </Grid>
                <Grid item xs={12} sm={6}>
                  <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <DateTimePicker
                    label="Date&Time picker"
                    name="startdate"
                    onChange={(newValue) => {
                      setValue(newValue.format());
                      // handleChange(newValue);
                      console.log(newValue)
                      handleChange2(value);
                    }}
                    value={value}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DateTimePicker
                    label="Date&Time picker"
                    name="enddate"
                    onChange={(newValue) => {
                      setValue(newValue.format());
                      // handleChange(newValue);
                      console.log(newValue)
                      handleChange2(value);
                    }}
                    value={value}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </Grid>
              </LocalizationProvider>
              </Grid>


              {/* <Grid container justifyContent="center"  item xs={12}>
              <label htmlFor="thumbnail">
              <input
                accept="image/*"
                ref={fileInput} 
                // className={classes.input}
                style={{ display: 'none' }}
                id="thumbnail"
                name="thumbnail"
                type="file"
                hidden
                onChange={fileSelected}
                />
                <Button 
                //  variant="contained"
                 variant="outlined"
                 component="label"
                 onClick={()=>fileInput.current.click()}
                  // variant="raised" 
                  // component="span" 
                  // className={classes.button}
                  >
                  Upload Attachments
                </Button>
              </label> 
              </Grid> */}


            </Grid>
              {/* <Divider orientation="vertical" flexItem /> */}
            <Typography component="h1" variant="h5" sx={{mt: "15vh", display: "flex", justifyContent: "center"}}>
              Your Information
            </Typography>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  onChange={handleChange2}
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
                  onChange={handleChange2}
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
          </form>
        </Box>
      </Container>
  )
}

export default Events