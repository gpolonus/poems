
import React from 'react';
import './PoemCard.css';

const size = 4;

export default ({ content }) => {
  if (content)
    return (
      <div className="PoemCard">
        {Array(size).fill(1).map((n, index) => <div key={index}>{content[index]}</div>)}
      </div>
    );
}