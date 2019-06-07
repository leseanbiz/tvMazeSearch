import React, { useState } from 'react';
import _ from 'lodash';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, IconButton, Collapse, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
 media: {
  height: 0, 
  paddingTop: '56.25%'
 },
 expand: {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
   duration: theme.transitions.duration.short,
  }),
 },
   expandOpen: {
    transform: 'rotate180deg'
   },
   card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    // flexGrow: 1,
  }
 }));

const Episode = (props) => {
 const classes = useStyles();
 const [expanded, setExpanded] = useState(false);
 function handleExpandingClick() {
  setExpanded(!expanded);
 }
 const { name, season, number, summary } = props.episode;
 const { favorites, toggleFavAction } = props;
//  console.log(favorites);
//  console.log(props)
 const defaultImg = "http://static.tvmaze.com/uploads/images/medium_landscape/15/37912.jpg";

 return(
    //  <div>
    //          <Card >
    //          <CardMedia className={classes.media}
    //            image={_.get(props.episode, 'image.medium' , defaultImg)}
    //            title={`Rick and Morty ${name}`}
    //          />
    //          <CardContent>
    //          <Typography gutterBottom variant="h2" component="h2">
    //            {name}
    //          </Typography>
    //          <Typography gutterBottom variant="p" component="p">
    //            Season: {season} Episode: {number}
    //          </Typography>
    //          </CardContent>
    //          <CardActions>
    //            <Button size="small" color="primary" onClick={() => toggleFavAction(props.episode)} target="_blank">
    //              {favorites.includes(props.episode) ? "un-Fav" : "Fav"}
    //            </Button>
    //            <IconButton
    //              className={clsx(classes.expand, {
    //              [classes.expandOpen]: expanded,
    //              })}
    //              onClick={handleExpandingClick}
    //              aria-expanded={expanded}
    //              aria-label="show more">
    //              <ExpandMoreIcon />
    //            </IconButton>
    //          </CardActions>
    //          <Collapse in={expanded} timeout='auto' unmountOnExit>
    //            <CardContent>
    //              <Typography component="p">
    //                {summary}
    //              </Typography>
    //            </CardContent>
    //          </Collapse>
    //      </Card>
    //  </div>
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={_.get(props.episode, 'image.medium' , defaultImg)}
        title={`Rick and Morty ${name}`}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h5">
          {name}
        </Typography>
        <Typography>
          Season: {season} Episode: {number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => toggleFavAction(props.episode)} target="_blank">
          {favorites.includes(props.episode) ? "un-Fav" : "Fav"}
        </Button>
        <IconButton
          className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandingClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography component="p">
            {summary}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </Grid>
  )
}
export default Episode;
