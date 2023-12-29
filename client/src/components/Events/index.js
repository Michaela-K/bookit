import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CreateIcon from "@mui/icons-material/Create";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const Events = () => {
  const [valueStart, setValueStart] = React.useState(dayjs().format());
  const [valueEnd, setValueEnd] = React.useState(dayjs().format());
  const [eventLink, setEventLink] = useState();

  const user_id = 1;
  const [event, setEvent] = useState({
    organizer: user_id,
    title: "",
    location: "",
    start: "",
    enddate: "",
    description: "",
    fullName: "",
    email: "",
  });

  const handleChange2 = (e) => {
    setEvent({
      ...event,
      start: valueStart,
      enddate: valueEnd,
      [e.target.name]: e.target.name ? e.target.value : undefined,
    });
  };

  const handleDatePickerChange = (name, dateValue) => {
    setEvent({
      ...event,
      start: valueStart,
      enddate: valueEnd,
      [name]: dateValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:4000/api/events/${user_id}`, {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res)
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("handle submit btn in Events.js", data);
        // const eventId = data.id; // Assuming the response includes the event ID
        // const eventLink = `http://localhost:3000/event/${eventId}`; // Update with your website URL
        // setEventLink(eventLink); // Save the event link in state

        // window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          margin: "5vh 0vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#E85A4F" }}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create an Event
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                  label="Add a link to your event image"
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
                  label="Describe the event, attach a map location or a pinterest idea board"
                  name="description"
                  autoComplete="description"
                  onChange={handleChange2}
                />
              </Grid>

              <Grid container justifyContent="center" item xs={12}>
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
            <Grid container justifyContent="center">
              <Grid item>
                <Button type="submit" variant="contained" sx={{ mt: 8, mb: 2 }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
        {eventLink && (
          <Typography variant="h6">
            Event Link: <a href={eventLink}>{eventLink}</a>
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Events;
