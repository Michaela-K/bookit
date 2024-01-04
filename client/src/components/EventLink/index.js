import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Paper,
  Card,
  CardMedia,
  Button,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";

const EventDetail = () => {
  const { eventId } = useParams(); //this is really user_id
  const [eventData, setEventData] = useState(null);
  const [email, setEmail] = useState("");
  const [user_name, setUserName] = useState("");
  const [attendee, setAttendee] = useState({
    event_id: eventId,
    user_name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttendee((prevAttendee) => ({
      ...prevAttendee,
      [name]: value,
    }));
  };

  // Fetch event details based on the eventId from the URL
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/events/${eventId}`
        );
        if (response.ok) {
          const data = await response.json();
          const matchingEvent = data.find((event) => eventId == event.id);
          setEventData(matchingEvent);
        } else {
          console.error("Error fetching event details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/api/events/attendees/${eventId}`, {
      method: "POST",
      body: JSON.stringify(attendee),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        if (res.ok === true) {
          console.log("Attendee successfully added");
        } else if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
      window.location.reload();
  };

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Box mt={8} textAlign="center">
        <Typography variant="h4">Event Details</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
        <Card
          elevation={8}
          style={{
            width: "40vw",
            minWidth: "300px",
            marginBottom: "60px",
            padding: "0px",
          }}
        >
          <CardMedia
            component="img"
            alt="Event Thumbnail"
            height="100%"
            image={eventData.thumbnail}
          />
        </Card>
        <Paper
          elevation={2}
          style={{
            width: "40vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "10px 20px",
            alignItems: "center",
            marginBottom: "20px",
            backgroundColor: "#fffcf3",
          }}
        >
          <Typography variant="h6">Title:</Typography>
          <Typography>{eventData.title}</Typography>
        </Paper>
        <Paper
          elevation={2}
          style={{
            width: "40vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "10px 20px",
            alignItems: "center",
            marginBottom: "20px",
            backgroundColor: "#fffcf3",
          }}
        >
          <Typography variant="h6">Location:</Typography>
          <Typography>{eventData.location}</Typography>
        </Paper>
        <Paper
          elevation={2}
          style={{
            width: "40vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "10px 20px",
            alignItems: "center",
            marginBottom: "20px",
            backgroundColor: "#fffcf3",
          }}
        >
          <Typography variant="h6">Description:</Typography>
          <Typography>{eventData.description}</Typography>
        </Paper>
        <Paper
          elevation={2}
          style={{
            width: "40vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "10px 20px",
            alignItems: "center",
            marginBottom: "20px",
            backgroundColor: "#fffcf3",
          }}
        >
          <Typography variant="h6">Start Date:</Typography>
          <Typography>{eventData.start}</Typography>
        </Paper>
        <Paper
          elevation={2}
          style={{
            width: "40vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "10px 20px",
            alignItems: "center",
            marginBottom: "20px",
            backgroundColor: "#fffcf3",
          }}
        >
          <Typography variant="h6">End Date:</Typography>
          <Typography>{eventData.end}</Typography>
        </Paper>
        <Paper
          elevation={2}
          style={{
            width: "40vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "10px 20px",
            alignItems: "center",
            marginBottom: "20px",
            backgroundColor: "#fffcf3",
          }}
        >
          <Typography variant="h6">Attending:</Typography>
          <Typography>{eventData.attendee_user_names.length}</Typography>
        </Paper>

        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            flexDirection="column"
            justifyContent="center"
            alignItems={"center"}
            mt={5}
          >
            <Typography variant="h6">RSVP : </Typography>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Full Name"
                label="First Name, Last Name"
                name="user_name"
                autoComplete="Full Name"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" sx={{ mt: 8, mb: 2 }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default EventDetail;
