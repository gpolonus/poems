
import React, {Component} from 'react';
import './Poems.css';
import Poem from './Poem/Poem'
import AddPoem from '../AddPoem/AddPoem';

export default class Poems extends Component {

  state = {
    type: 'normal',
    poems: []
  };

  addHandler(content) {
    const poems = this.state.poems;
    poems.push(content);
    console.log(content);
    this.setState({poems});
  }

  render() {
    return (
      <div>
        <h1>POEMS</h1>
        <AddPoem add={this.addHandler.bind(this)} />
        {this.state.poems.map(poem => <Poem content={poem} />)}
      </div>
    );
  }
}
