import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  let assignedClasses = [];
  let buttonClass = '';

  if (props.persons.length <= 2) {
    assignedClasses.push( styles.red );
  }
  if (props.persons.length <= 1) {
    assignedClasses.push( styles.uppercase );
  }
  if (props.showPersonsList) {
    buttonClass = styles.red;
  }

  return(
    <div className={styles.Cockpit}>
      <h1 className={assignedClasses.join( ' ' )}>{props.title}</h1>
      <button className={buttonClass}
        onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  )
};

export default cockpit;