import React, { useState } from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { EventRepeat } from '@mui/icons-material';


const EditEvent = ({clickedEvent, handleEventSave}) => {
  const [valueStart, setValueStart] = React.useState(dayjs().format());
  const [valueEnd, setValueEnd] = React.useState(dayjs().format());
  
  const user_id = 1;
  const [event, setEvent] = useState({
    organizer: user_id,
    title: clickedEvent.title,
    location: clickedEvent.location,
    start: clickedEvent.start,
    enddate: clickedEvent.enddate,
    description: clickedEvent.description,
    thumbnail: clickedEvent.thumbnail
  })

  const handleChange = (e) => {
    console.log(e);
    setEvent({
      ...clickedEvent,
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

  const handleSubmit = (e) =>{
    e.preventDefault();
    let id = Number(clickedEvent.id);
    console.log(id)
    console.log(event)
    
    fetch(`http://localhost:4000/api/events/edit/${id}`,{
      method:'POST',
      body: JSON.stringify(event),
      headers: {"Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'}
    })
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .then((data) => {
      // Handle the parsed JSON data here
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors, including parsing errors
      console.error('Error fetching data:', error);
    });
      window.location.reload()
  }


  return (
    <Container component="main" maxWidth="sm">
    <CssBaseline />
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#E85A4F" }}>
        <EditIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
       Edit the Event
      </Typography>
      <form onSubmit={handleSubmit} action={`/edit/${clickedEvent.id}`} method="POST">
      <Box noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="title"
              name="title"
              autoComplete="title"
              value={event.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="location"
              name="location"
              autoComplete="location"
              value={event.location}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="thumbnail"
              name="thumbnail"
              autoComplete="thumbnail"
              value={event.thumbnail}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              id="description"
              name="description"
              autoComplete="description"
              value={event.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid container justifyContent="center"  item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2} mt={5}>
            
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                name="start"
                renderInput={(params) => <TextField {...params} />}
                value={event.start}
                onChange={(startValue) => {
                  setValueStart(startValue);
                  handleDatePickerChange("start", startValue);
                }}
                format="YYYY-MM-DD HH:mm:ss"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                name="enddate"
                onChange={(endValue) => {
                  setValueEnd(endValue);
                  handleDatePickerChange("enddate", endValue);
                }}
                value={event.enddate}
                format="YYYY-MM-DD HH:mm:ss"
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
          </Grid>
          </LocalizationProvider>
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

export default EditEvent