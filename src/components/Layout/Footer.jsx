import React from 'react'
import classes from './Footer.module.css';
import ListBox from './ListBox';
import Box from './Box';

const Footer = (props) => {
  return (
    <>
        <footer className={classes.footer}>         
          <ListBox onOpen={props.onOpen}/>
          <Box onOpen={props.onOpen}/>
        </footer>
    </>
  )
}

export default Footer