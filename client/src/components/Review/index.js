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
  date: 'January 12th,2024',
  initials: 'AK',
  statement:
   '- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
 },
 {
  name: 'Alice Zhao',
  date: 'February 19th,2024',
  initials: 'AZ',
  statement:
   '- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
 },
 {
  name: 'Mali Pie',
  date: 'March 22nd,2024',
  initials: 'MP',
  statement:
   '- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
 },
];

const Review = ({}) => {
 return (
  <>
  <Box
    sx={{mt: "8vh", display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", width: '100%', padding: "50px 20px" }}
   >

   <Typography variant="h4">What some of our customers have to say:</Typography>
   <Box
    sx={{ display: 'flex', flexDirection: "row", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}
   >
    {reviews.map((list) => {
     return (
      <Card key={list.name} sx={{ width: "29vw", margin:"30px 10px", minWidth: "290px" }}>
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
