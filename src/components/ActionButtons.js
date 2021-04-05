import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { List, ListItem, ListItemText, Divider} from '@material-ui/core';
import Incidents from '../asset/Incidents.svg';
import Places from '../asset/Places.svg';
import Things from '../asset/Things.svg'
import Grid from '@material-ui/core/Grid'



const useStyles = makeStyles((theme) => ({
  root:{
    position:'relative',
    width: '80%', 
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop:  '35em'
  },
  gpsIcon:{
    color: theme.palette.common.blue,
    
  },
  locationIcon:{
    color: theme.palette.common.blue,
    marginLeft: '15em'
  },
  drawer:{
    width:'95%',
    height: '50%',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius: 10
  },
  heading:{
    ...theme.typography.head,
    marginLeft: "20px"
  },
  subheading:{
    ...theme.transitions.subhead,
    marginBottom: '0'
  },
  list:{
    marginLeft: "20px"
  },
  listIcon:{
    flexBasis: '10%',
    marginTop: '10px'
  },
  listText:{
   
  }

}))


export default function ActionButtons(props) {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


  const [openDrawer, setOpenDrawer] = useState(false)


  const handleClick=()=>{
    setOpenDrawer(true)
  }





  const drawer = (

    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} anchor="bottom" open={openDrawer} onClose= {()=> setOpenDrawer(false)} onOpen={()=> setOpenDrawer(true)} classes={{paper:classes.drawer}}>
      <List className={classes.list}>
        <h1 className={classes.heading}>New Safety Post</h1>
        <ListItem>
          <ListItemText>
            <Grid container >
              <Grid item xs={3} className={classes.listIcon}>
                <img alt='safety things' src={Things}/>
              </Grid>
              <Grid item xs={9}>
                  <div> <h5 className={classes.subheading}>Safety things </h5><p>Ambulance, fire extinguisher, etc</p></div>
              </Grid>
          </Grid>
          </ListItemText>
        </ListItem>
        <Divider/>       
        <ListItem>
          <ListItemText>
            <Grid container >
              <Grid item xs={3} className={classes.listIcon}>
                <img alt='safety things' src={Incidents}/>
              </Grid>
              <Grid item xs={9}>
                  <div> <h5 className={classes.subheading}>Incidents </h5><p>Robbery, fire outbread, accidents</p></div>
              </Grid>
          </Grid>
          </ListItemText>
        </ListItem>
        <Divider/>       
        <ListItem>
          <ListItemText>
            <Grid container >
              <Grid item xs={3} className={classes.listIcon}>
                <img alt='safety things' src={Things}/>
              </Grid>
              <Grid item xs={9}>
                  <div> <h5 className={classes.subheading}>Safety places </h5><p>Hospital, police station, fire station</p></div>
              </Grid>
          </Grid>
          </ListItemText>
        </ListItem>
      </List>

      </SwipeableDrawer>


    </React.Fragment>


  )

  return (
    <div className={classes.root} >
      <Fab className={classes.gpsIcon} disableRipple>
       <GpsFixedIcon  />
      </Fab>
      <Fab className={classes.locationIcon} disableRipple onClick={(e)=>handleClick(e) } >
        <AddLocationIcon />
      </Fab>
      {drawer}
    </div>
  );
}
