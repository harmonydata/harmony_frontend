import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//hmm have i broken github?


const matchUnit = ({ Q1, Q2, percentage }) => {

    const interpolateBetweenColors = (
        fromColor,
        toColor,
        percent
      ) => {
        const delta = percent / 100;
        const r = Math.round(toColor.r + (fromColor.r - toColor.r) * delta);
        const g = Math.round(toColor.g + (fromColor.g - toColor.g) * delta);
        const b = Math.round(toColor.b + (fromColor.b - toColor.b) * delta);
      
        return `rgba(${r}, ${g}, ${b}, 0.7)`;
      };
    

  return (
      <Card variant="outlined" sx={{ display: 'flex', width:'100%', height: '6rem', padding: '0.5rem', margin: '0.5rem', justifyContent: 'space-between', alignItems: 'center', textAlign:"center"}} >
        <Box sx={{display:'flex',height:'100%', flexDirection:'column', justifyContent: 'space-between', alignItems: 'center',width:'45%'}}>
        <Typography variant="caption" sx={{fontSize:'0.625rem',}}>
          {Q1.instrument.name} - Q{Q1.no}
        </Typography>
          <Typography variant="body" sx={{fontSize:'0.75rem'}}>
                {Q1.text}   
        </Typography>
        <Typography variant="caption" sx={{visibility:"hidden"}}>
          {Q1.instrument.name} - Q{Q1.no}
        </Typography>
        </Box>
        <Box sx={{ width: '4em', margin:'0.5rem' }} >
            <CircularProgressbar 
                text={percentage} 
                value={`${Math.abs(percentage)}`}
                strokeWidth={15}
                styles={{
                    path: {
                        stroke:  interpolateBetweenColors({ r: 30, g: 255, b: 30 }, { r: 255, g: 30, b: 30 }, Math.abs(percentage))
                    },
                    text: {
                        fill: 'black',
                        fontSize: '1.5rem'
                    }
                  }}
            />
        </Box>
        <Box sx={{display:'flex',height:'100%', flexDirection:'column', justifyContent: 'space-between', alignItems: 'center',width:'45%', textAlign:"center"}}>
        <Typography variant="caption">
          {Q2.instrument.name} - Q{Q2.no}
          </Typography>
          <Typography variant="body" sx={{fontSize:'0.75rem',}}>
            {Q2.text}
        </Typography>
        <Typography variant="caption" sx={{visibility:"hidden"}}>
          {Q2.instrument.name} - Q{Q2.no}
        </Typography>
        </Box>
      </Card>
  );
};

export default matchUnit;