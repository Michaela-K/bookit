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
  const [valueStart, setValueStart] = React.useState(dayjs().format());
  const [valueEnd, setValueEnd] = React.useState(dayjs().format());
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = React.useRef();

  const user_id = 1;
  const [event, setEvent] = useState({
    organizer: user_id,
    title:"",
    location:"",
    start:"",
    enddate:"",
    description:"",
    fullName:"",
    email:""
  })

  const handleChange2 = (e) => {
    console.log(e);
    setEvent({
      ...event,
      start: valueStart,
      enddate: valueEnd,
      [e.target.name]: e.target.name ? e.target.value : undefined
    });
  };

  const handleDatePickerChange = (name, dateValue) => {
    setEvent({
      ...event,
      start: valueStart,
      enddate: valueEnd,
      [name]: dateValue
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(event)

    const res = await fetch('http://localhost:4000/api/events/user_id',{
      method:'POST',
      body: JSON.stringify(event),
      headers: {"Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'}
    })
    const data = await res.json()
    console.log(data)
    console.log(event)
    window.location.reload()
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
                
                <Grid item xs={12} sm={6}>
                  <DateTimePicker
                    label="Start date and time"
                    name="start"
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(startValue) => {
                      setValueStart(startValue);
                      handleDatePickerChange("start", startValue);
                    }}
                    value={valueStart}
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DateTimePicker
                    label="End date and time"
                    name="enddate"
                    onChange={(endValue) => {
                      setValueEnd(endValue);
                      handleDatePickerChange("enddate", endValue);
                    }}
                    value={valueEnd}
                    format="YYYY-MM-DD HH:mm:ss"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </Grid>
              </LocalizationProvider>
              </Grid>


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