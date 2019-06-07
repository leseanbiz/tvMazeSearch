import React, { useState } from 'react';
import {Grid} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import * as contentful from 'contentful';
import Course from './Course';

const SPACE_ID = 'ub51jq8qofkb';
const ACCESS_TOKEN = '2wFwo4Y90ewOHn2TPXx0qmrTq_7Aj0JfBw-jc_rM0ts';

const client = contentful.createClient({
 space: SPACE_ID,
 accessToken:ACCESS_TOKEN
});

export default function CourseList() {

 const [courses, setCourses] = useState([]);
 const [searchString, setSearchString] = useState('');
 console.log("Courses", courses)
 //convert to useEffect
 const getCourses = () => {
  client.getEntries ({
   content_type: 'course',
   query: searchString
  })
  .then((response) => {
   setCourses(response.items)
   console.log(courses)
  })
  .catch((error) => {
   console.log("Error occured while fetching entries, error :", error);
  })
 }

 const onSearchInputChange = (event) => {
  console.log("search input changed...", searchString);
  event.target.value ? setSearchString(event.target.value) : setSearchString('');
  getCourses();
 }

 return (
  <div>
      <div>
    <TextField
     style={{ padding: 24 }}
     id="searchInput"
     placeholder="search for courses"
     margin="normal"
     onChange={onSearchInputChange}
    />
    <Grid container style={{ padding: 24 }}>
     {
      courses.map((currentCourse, i) => (
      <Grid key={i} item xs={12} sm={6} lg={4} xl={3}>
       <Course course={currentCourse}/>
      </Grid>
     ))
    }
    </Grid>
   </div>
  </div>
 )

}