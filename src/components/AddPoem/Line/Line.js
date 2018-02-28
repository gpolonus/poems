
import React from 'react';
import './Line.css';

export default ({select, selected, line}) => {
  return (
    <div className="Line" onClick={select}>
      <p className={selected ? 'selected' : ''}>{line}</p>
    </div>
  );
}