import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, IconButton, Collapse } from '@material-ui/core';
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
 }));

const Course = (props) => {
 const classes = useStyles();
 const [expanded, setExpanded] = useState(false);
 function handleExpandingClick() {
  setExpanded(!expanded);
 }
 console.log(props)
 return(
     <div>
         { props.course ? (
             <Card >
                 <CardMedia className={classes.media}
                 image={props.course.fields.courseImage.fields.file.url}
                 title={props.course.fields.title}
                 />
                 <CardContent>
                 <Typography gutterBottom variant="h2" component="h2">
                     {props.course.fields.title}
                 </Typography>
                 </CardContent>
                 <CardActions>
                 <Button size="small" color="primary" href={props.course.fields.url} target="_blank">
                     Go To Course
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
                    {props.course.fields.description}
                   </Typography>
                  </CardContent>
                 </Collapse>
             </Card>
         ) : null}
     </div>
  )
}
export default Course;
