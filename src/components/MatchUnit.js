import React, {useState} from 'react';
import { Box, Card, Typography, IconButton, Menu, MenuItem, ListItemIcon} from '@mui/material';
import 'react-circular-progressbar/dist/styles.css';
import MatchCircle from './MatchCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import BugReportIcon from '@mui/icons-material/BugReport';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';

const MatchUnit = ({ Q1, Q2, percentage, matchUnitMenuAction }) => {
const [menuElement, setMenuElement] = useState(null);

const openMenu = (event)=>{
  setMenuElement(event.currentTarget);
}
const closeMenu = (value)=> {
  matchUnitMenuAction({q1: Q1, q2:Q2, action: value});
  setMenuElement(null);
}


  return (
      <Card variant="outlined" sx={{ display: 'flex', width:'100%', height: '7rem', padding: '0.5rem', margin: '0 0 1rem 0', justifyContent: 'space-between', alignItems: 'center', textAlign:"center"}} >
        <Box sx={{display:'flex',height:'100%', flexDirection:'column', justifyContent: 'space-between', alignItems: 'center',width:'45%'}}>
        <Typography variant="caption" sx={{fontSize:'0.625rem',}}>
          {Q1.instrument && Q1.instrument.name} - Q{Q1.question_no}
        </Typography>
          <Typography variant="body1">
                {Q1.question_text}   
        </Typography>
        <Typography variant="caption" sx={{visibility:"hidden"}}>
          {Q1.instrument && Q1.instrument.name} - Q{Q1.question_no}
        </Typography>
        </Box>
        <Box sx={{ width: '4em', margin:'0.5rem' }} >
            <MatchCircle percentage={percentage}/>
        </Box>
        <Box sx={{display:'flex',height:'100%',  flexDirection:'column', justifyContent: 'space-between', alignItems: 'center',width:'45%', textAlign:"center"}}>
        <Typography variant="caption">
          {Q2.instrument && Q2.instrument.name} - Q{Q2.question_no}
          </Typography>
          <Typography variant="body1" >
            {Q2.question_text}
        </Typography>
        <Typography variant="caption" sx={{visibility:"hidden"}}>
          {Q2.instrument && Q2.instrument.name} - Q{Q2.question_no}
        </Typography>
        </Box>
        <IconButton edge="end" sx={{mb:'auto', mt:'-1rem', width:0}} onClick={openMenu}  >
          <MoreVertIcon />
        </IconButton>
        <Menu
        anchorEl={menuElement}
        id="match-unit-menu"
        open={Boolean(menuElement)}
        onClose={setMenuElement.bind(this,null)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0,
           
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
        <MenuItem onClick={closeMenu.bind(this,'remove')}>
          <ListItemIcon><PlaylistRemoveIcon /></ListItemIcon>
           <Typography>Remove this match from results</Typography>
        </MenuItem>
        <MenuItem onClick={closeMenu.bind(this,'report')}>
        <ListItemIcon><BugReportIcon /></ListItemIcon>
             <Typography>Report incorrect match to Harmony (and remove)</Typography>
        </MenuItem>
      </Menu>


      </Card>
  );
};

export default MatchUnit;