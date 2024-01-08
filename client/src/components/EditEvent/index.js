import React, { useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { sendApiRequest } from "../../helpers/api";

export default function EditEvent({ clickedEvent, onSave, onCancel }) {
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
    thumbnail: clickedEvent.thumbnail,
  });

  const handleChange = (e) => {
    setEvent({
      ...clickedEvent,
      [e.target.name]: e.target.name ? e.target.value : undefined,
    });
  };

  const handleDatePickerChange = (name, dateValue) => {
    const localDate = dateValue ? dayjs(dateValue).format("YYYY-MM-DDTHH:mm:ssZ") : null;
    setEvent({
      ...event,
      start: dayjs(valueStart).format("YYYY-MM-DDTHH:mm:ssZ"),
      enddate: dayjs(valueEnd).format("YYYY-MM-DDTHH:mm:ssZ"),
      [name]: localDate,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let id = Number(clickedEvent.id);
    try {
      const url = `http://localhost:4000/api/events/edit/${id}`;
      const method = "POST";
      const responseData = await sendApiRequest(url, method, event);
      console.log("Event edited successfully");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
    window.location.reload();
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div className="modal-container">
          <div className="heading">
            <h2>Edit the Event</h2>
            <button className="close-modal" onClick={onCancel}>
              X
            </button>
          </div>
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <form
                onSubmit={handleSubmit}
                action={`/edit/${clickedEvent.id}`}
                method="POST"
              >
                <Box noValidate sx={{ width: "100%", mb: 5 }}>
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
                        rows={3}
                        id="description"
                        name="description"
                        autoComplete="description"
                        value={event.description}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid container justifyContent="center" item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Grid container spacing={2} mt={3}>
                          <Grid item xs={12} sm={6}>
                            <DateTimePicker
                              name="start"
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
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
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Grid>
                        </Grid>
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Button type="submit" variant="contained" sx={{ mt: 5 }}>
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
}
