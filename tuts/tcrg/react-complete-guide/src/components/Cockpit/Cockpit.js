import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleButtonRef = useRef(null);
  const context = useContext(AuthContext);

  console.log('Cockpit.js: ', context);
  

  useEffect(() => {
    console.log('Cockpit.js: useEffect');
    toggleButtonRef.current.click();
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
      <button 
        className={buttonClass}
        ref={toggleButtonRef}
        onClick={props.clicked}>
        Toggle persons
      </button>
      <button onClick={context.login}>Login</button>
    </div>
  )
};

export default React.memo(cockpit);