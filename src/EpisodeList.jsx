import React, { useState } from 'react';
import './index.css';

import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Episode from './Episode';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default function EpisodeList(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  
  function handleExpandingClick() {
   setExpanded(!expanded);
  }

 const { episodes, favorites, toggleFavAction } = props;
 console.log(favorites);
 
return (
    <React.Fragment>
      {/* <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Album layout
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc.
            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
            entirely.
          </Typography>
        </Container>
      </div> */}
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {episodes.map(episode => (
            <Episode key={episode.id} episode={episode} favorites={favorites} toggleFavAction={toggleFavAction} handleExpandingClick={handleExpandingClick}/>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
 
 )}

