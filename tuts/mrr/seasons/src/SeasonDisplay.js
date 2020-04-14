import './SeasonDisplay.scss';
import React from 'react';

const seasonConfig = {
  summer: {
    text: `Let's hit the beach!`,
    iconName: 'sun'
  },
  winter: {
    text: `Brrr, it's chilly!`,
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  // console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth()); //=> winter, summer
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
  const { text, iconName } = seasonConfig[season]; // { text, iconName }
  
  return <div className={`season-display ${season}`}>
    <i className={`${iconName} icon massive icon-left`}></i>
    <h1>
      {text}
    </h1>
    <i className={`${iconName} icon massive icon-right`}></i>
  </div>
};

export default SeasonDisplay;