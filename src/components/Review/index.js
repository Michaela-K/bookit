import React from 'react';
import { Box } from '@mui/system';
import {
 Avatar,
 Card,
 CardContent,
 CardHeader,
 IconButton,
 Typography,
} from '@mui/material';
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
  name: 'Alice Zhao',
  date: 'June 19th,2022',
  initials: 'AZ',
  statement:
   '- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
 },
 {
  name: 'Maliyah Pie',
  date: 'December 22nd,2022',
  initials: 'MP',
  statement:
   '- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
 },
];

const Review = ({}) => {
 return (
  <>
  <Box
    sx={{mt: "8vh",display:"flex", flexDirection: "column",justifyContent:"center", alignItems:"center", width: '100vw', padding: "50px 20px" }}
   >

   <Typography variant="h5">What people have to say:</Typography>
   <Box
    sx={{ display: 'flex', mt: '2vh', transform: 'scale(0.8)', width: '100%' }}
   >
    {reviews.map((list) => {
     return (
      <Card key={list.name} sx={{ width: "40vw",minWidth: 250, mr: '30px'}}>
       <CardHeader
        avatar={
         <Avatar
          sx={{ bgcolor: '#E85A4F', fontSize: '1.5rem' }}
          aria-label="recipe"
         >
          {list.initials}
         </Avatar>
        }
        title={list.name}
        subheader={list.date}
       />
       <CardContent>
        <Typography variant="h5">{list.statement}</Typography>
       </CardContent>
      </Card>
     );
    })}
    </Box>
   </Box>
  </>
 );
};

export default Review;
