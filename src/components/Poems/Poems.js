
import React, { Component } from 'react';
import './Poems.css';
import Poem from './Poem/Poem'
import PoemCard from './PoemCard/PoemCard';
import CSSTransition from 'react-transition-group/CSSTransition';

export const POEM_TYPES = {
  NORMAL: 'normal',
  CARDS: 'cards'
};

const POEM_MAP = {
  [POEM_TYPES.NORMAL]: {
    el: Poem,
    style: { marginTop: '16px' }
  },
  [POEM_TYPES.CARDS]: {
    el: PoemCard,
    style: {}
  }
};


export default class Poems extends Component {
  state = {
    type: POEM_TYPES.NORMAL
  }

  render () {
    let {type, poems} = this.props;
    
    if(!POEM_MAP[type]) {
      type = POEM_TYPES.NORMAL;
    }
    const poemType = POEM_MAP[this.state.type];
    const PoemElement = poemType.el;
    const style = poemType.style;
    
    return (
      <div 
      // style={{position: 'relative', left: '-100%'}}
      >
      {
        Object.entries(POEM_MAP).map(([key, value]) => (
          <CSSTransition
            mountOnEnter
            unmountOnExit
            classNames="stuff"
            timeout={1000}
            className="Poems"
            style={value.style}
            in={type === key}
          >
            <div>
              {poems && poems.map((poem, index) => <value.el content={poem} key={index} />)}
            </div>
          </CSSTransition>
        ))
      }
      </div>
    );
  }
}
