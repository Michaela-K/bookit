import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Paper, Card, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid';

const EventDetail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);

  // Fetch event details based on the eventId from the URL
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/events/${eventId}`);
        if (response.ok) {
          const data = await response.json();
          setEventData(data); 
        } else {
          console.error('Error fetching event details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
    <Box mt={8} textAlign="center">
      <Typography variant="h4">Event Details</Typography>
    </Box>
    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
      <Card elevation={8} style={{width: '40vw', minWidth: '300px', marginBottom: '60px', padding:"0px" }}>
          <CardMedia
            component="img"
            alt="Event Thumbnail"
            height="100%"
            image={eventData.thumbnail}
          />
       </Card>
      <Paper elevation={2} style={{width: '40vw', minWidth: '300px', display:"flex", gap:"30px", padding:'10px 20px', alignItems:"center", marginBottom: '20px', backgroundColor:'#fffcf3'}}>
        <Typography variant="h6">Title:</Typography>
        <Typography>{eventData.title}</Typography>
      </Paper>
      <Paper elevation={2} style={{width: '40vw', minWidth: '300px', display:"flex", gap:"30px", padding:'10px 20px', alignItems:"center", marginBottom: '20px', backgroundColor:'#fffcf3' }}>
        <Typography variant="h6">Location:</Typography>
        <Typography>{eventData.location}</Typography>
      </Paper>
      <Paper elevation={2} style={{width: '40vw', minWidth: '300px', display:"flex", gap:"30px", padding:'10px 20px', alignItems:"center", marginBottom: '20px', backgroundColor:'#fffcf3' }}>
        <Typography variant="h6">Description:</Typography>
        <Typography>{eventData.description}</Typography>
      </Paper>
      <Paper elevation={2} style={{width: '40vw', minWidth: '300px', display:"flex", gap:"30px", padding:'10px 20px', alignItems:"center", marginBottom: '20px', backgroundColor:'#fffcf3' }}>
        <Typography variant="h6">Start Date:</Typography>
        <Typography>{eventData.start}</Typography>
      </Paper>
      <Paper elevation={2} style={{width: '40vw', minWidth: '300px', display:"flex", gap:"30px", padding:'10px 20px', alignItems:"center", marginBottom: '20px', backgroundColor:'#fffcf3' }}>
        <Typography variant="h6">End Date:</Typography>
        <Typography>{eventData.end}</Typography>
      </Paper>
      {/* Add more event details here */}
    </Box>
  </Container>
  );
};

export default EventDetail;