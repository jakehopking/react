import React, { useEffect } from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('Cockpit.js: useEffect');

    const timer = setTimeout(() => {
      console.log('!!!ALERT!!!');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('Cockpit.js: useEffect clean up');
    }
  }, [props.persons]); // If defined state same, don't call useEffect again.

  let assignedClasses = [];
  let buttonClass = '';

  if (props.personsLength <= 2) {
    assignedClasses.push( styles.red );
  }
  if (props.personsLength <= 1) {
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

export default React.memo(cockpit);