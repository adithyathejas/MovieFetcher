import React from 'react';

import classes from './Movie.module.css';
import { Button } from 'react-bootstrap';



const Movie = (props) => {
  const DeleteButtonHandler = ()=> {
    props.deleteEntry(props.id) 

  }
  console.log('movie')
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <p><Button onClick={DeleteButtonHandler}>Delete</Button></p>
    </li>
  );
};

export default Movie;
