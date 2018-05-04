
import React from 'react';
import './Poem.css';
import Aux from '../../../hoc/Aux';

export default ({content}) => {
  if(content)
    return (
      <Aux>
        <div className="Poem">
          {content.join(' / ')}
        </div>
        <Aux>&nbsp;</Aux>
      </Aux>
    );
}