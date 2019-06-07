import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, makeStyles, Grid, Button } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
 icon: {
   marginRight: theme.spacing(2),
 },
 links: {
  display: 'flex',
  justifyItems: 'center'
 },
 search: {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
},
searchIcon: {
  width: theme.spacing(7),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
inputRoot: {
  color: 'inherit',
},
inputInput: {
  padding: theme.spacing(1, 1, 1, 7),
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: 200,
  },
},
}))

const NavBar = (props) => {
 const {favorites} = props;
 const classes = useStyles();
 const [searchInput, setSearchInput] = useState('');
 const { fetchDataAction } = props;

 const searchField = () => {
  return window.location.href === 'http://localhost:3000/'? (
  <Grid item>
  <div className={classes.search}>
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'Search' }}
      onChange={(event) => setSearchInput(event.target.value)}
    />
    <Button color="inherit" onClick={() => fetchDataAction(searchInput)}>Search</Button>
  </div>
 </Grid>
  ) : null;
 }

 return (
  <React.Fragment>
  <CssBaseline />
  <AppBar position="sticky">
    <Toolbar>
    <Grid
      justify="space-between"
      container 
      
    >
      <Grid item>
       </Grid>
       <Grid item>
       <Typography variant="h6" color="inherit" noWrap>
         TV maze api search
       </Typography>
       </Grid>
      {searchField()}
      <Grid item>
       <div className={classes.links}>
         <Button color="inherit" href='/'>Home</Button>{' '}
         <Button color="inherit" href='/FavPage'>Favorites: {favorites}</Button>
       </div>
      </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
  </ React.Fragment>
 )
}

export default NavBar;