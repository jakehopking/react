import React from 'react';
import './CharCount.css'

const CharCount = (props) => {
  return <div onClick={props.clicked} className="CharCount">{props.input}</div>;
};

export default CharCount;