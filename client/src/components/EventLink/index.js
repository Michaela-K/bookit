import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  Button,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";

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
      <Card
        elevation={10}
        style={{
          display:"flex", 
          flexDirection:"column", 
          justifyContent:"center",
          alignItems:"center",
          width:"100%",
          marginTop:"4vh",
          borderRadius:"10px"
        }}>
        <Typography variant="h4" m={3}>Event Details</Typography>
        <Box
          elevation={8}
          style={{
            width: "30vw",
            height:"auto",
            minWidth: "300px",
            marginBottom: "60px",
            padding: "0px",
            borderRadius:"100px"
          }}
          >
          <CardMedia
            component="img"
            alt="Event Thumbnail"
            height="100%"
            image={eventData.thumbnail}
          />
        </Box>
        <Box
          style={{
            width: "30vw",
            minWidth: "300px",
            display: "flex",
            justifyContent:"left",
            gap: "20px",
            padding: "0px 10px",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "2px dotted lightgrey",
          }}
        >
          <Typography fontSize="1.1rem">Title:</Typography>
          <Typography ml={8.5}>{eventData.title}</Typography>
        </Box>
        <Box
          style={{
            width: "30vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "0px 10px",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "2px dotted lightgrey",
          }}
        >
          <Typography fontSize="1.1rem">Location:</Typography>
          <Typography ml={3}>{eventData.location}</Typography>
        </Box>
        <Box
           style={{
            width: "30vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "0px 10px",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "2px dotted lightgrey",
          }}
        >
          <Typography fontSize="1.1rem">Description:</Typography>
          <Typography ml={0}>{eventData.description}</Typography>
        </Box>
        <Box
          style={{
            width: "30vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "0px 10px",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "2px dotted lightgrey",
          }}
        >
          <Typography fontSize="1.1rem">Start Date:</Typography>
          <Typography ml={1}>{dayjs(eventData.start).format("dddd D MMMM YYYY, h:mm A")}</Typography>
        </Box>
        <Box
           style={{
            width: "30vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "0px 10px",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "2px dotted lightgrey",
          }}
        >
          <Typography fontSize="1.1rem">End Date:</Typography>
          <Typography ml={2}>{dayjs(eventData.end).format("dddd D MMMM YYYY, h:mm A")}</Typography>
        </Box>
        <Box
           style={{
            width: "30vw",
            minWidth: "300px",
            display: "flex",
            gap: "30px",
            padding: "0px 10px",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "2px dotted lightgrey",
          }}
        >
          <Typography fontSize="1.1rem">Attending:</Typography>
          <Typography ml={2}>{eventData.attendee_user_names.length}</Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            flexDirection="column"
            justifyContent="center"
            alignItems={"center"}
            mt={5}
            sx={{ minWidth: "300px", width: "65vw" }}
          >
            <Typography variant="h4" >RSVP : </Typography>
            <Grid item xs={12} sm={6} sx={{ minWidth: "300px", width: "100%" }}>
              <TextField
                required
                id="Full Name"
                label="First Name, Last Name"
                name="user_name"
                autoComplete="Full Name"
                onChange={handleChange}
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ minWidth: "300px", width: "100%" }}>
              <TextField
                required
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" sx={{ mt: 8, mb: 2 }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
};

export default EventDetail;
