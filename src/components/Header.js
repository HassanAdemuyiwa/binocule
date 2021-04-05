import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
import logo from '../asset/logo.svg'
import SearchIcon from '@material-ui/icons/Search'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {  InputBase } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';



const useStyles = makeStyles((theme) => ({
    appBar:{
        borderRadius: 5,
        backgroundColor: 'white',
        width: '80%',
        height: '50px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '50px'
    },
    searchIcon: {
        color: 'black',
        marginLeft: '10px'
    },
    input: {
        paddingLeft: '1px',
        marginLeft: '10px'
    },
    drawer:{
        width:'95%',
        height: '10%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius: 10
    }


}))




export default function Header (){

    const classes = useStyles();
    const [openDrawer, setOpenDrawer]=useState(false)
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


    const handleClick=()=>{
      setOpenDrawer(true)
    }
  
    const drawer = (

        <React.Fragment>
          <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} anchor="top" open={openDrawer} onClose= {()=> setOpenDrawer(false)} onOpen={()=> setOpenDrawer(true)} classes={{paper:classes.drawer}}>
          Hello World
          </SwipeableDrawer>
    
    
        </React.Fragment>
    
    
      )
    


    return(
    <React.Fragment>
        <AppBar position='relative' className={classes.appBar}>
        <Toolbar >

            <img alt="logo" src={logo}/>
            <div>
                <InputBase placeholder="Find places, activities"
              className={classes.input}
              inputProps={{ 'aria-label': 'search' }}/>
        
            </div>
            <SearchIcon className={classes.searchIcon}/>
          
            <AccessTimeIcon className={classes.searchIcon} onClick={(e)=>handleClick(e)}/>
            {drawer}
        
        </Toolbar>

            
        </AppBar>

    </React.Fragment>
    )
}