
import React from 'react';

const size = 4;

export default ({content}) => {
  if(content)
    return (
      <div className="Poem">
        {Array(size).fill(1).map((n, index) => <p>{content[index]}</p>)}
      </div>
    );
}