import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
import logo from '../asset/logo.svg'
import SearchIcon from '@material-ui/icons/Search'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {  InputBase } from '@material-ui/core';



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
    }


}))




export default function Header (){

    const classes = useStyles();



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
          
            <AccessTimeIcon className={classes.searchIcon}/>
        
        </Toolbar>

            
        </AppBar>

    </React.Fragment>
    )
}