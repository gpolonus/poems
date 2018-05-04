
import React from 'react';
import './Line.css';


export default ({change, line, addLine, autoFocus}) => {

  const classes = ['Line'];
  if(line === '') {
    classes.push('empty');
  }

  const keyHandler = ({which}) => {
    // if([13].find(_which => _which === event.which)) {
    if(which === 13) {
      addLine();
    }
  }

  return (
      <input
        className={classes.join(' ')}
        type="text"
        value={line}
        onChange={({target}) => change(target.value)}
        onKeyUp={keyHandler}
        autoFocus={autoFocus}
        tabIndex="-1"
      />
  );
}