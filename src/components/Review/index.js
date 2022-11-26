import React from 'react';
import { Box } from '@mui/system';
import { Avatar, Card, CardContent,CardHeader,IconButton,Typography } from '@mui/material';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const reviews = [
 {
  name: 'Anna Karenina',
  date: 'September 12th,2022',
  initials: 'AK',
  statement:
   '- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
 },
 {
  name: 'Nelly Kwan',
  date: 'June 19th,2022',
  initials: 'NK',
  statement:
   '- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
 },
 {
  name: 'Nicola Beare',
  date: 'December 22nd,2022',
  initials: 'NB',
  statement:
   '- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
 },
];

const Review = ({}) => {

 return (
  <Box sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)', width:'100vw'}}>
   {reviews.map((list) => {
    return (
     <Card key={list.name} sx={{ minWidth: 250, mr:"30px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#F7CE3E", fontSize:"1.5rem" }} aria-label="recipe">
            {list.initials}
          </Avatar>
        }
        title={list.name}
        subheader={list.date}
      />
      <CardContent>
       <Typography variant="h5">
        {list.statement}
       </Typography>
       
      </CardContent>
     </Card>
    );
   })}
  </Box>
 );
};

export default Review;
