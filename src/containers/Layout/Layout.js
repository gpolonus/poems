import React, { Component } from 'react';
import './Layout.css';
import Aux from '../../hoc/Aux';
import AddPoem from '../../components/AddPoem/AddPoem';
import Poems, {POEM_TYPES} from '../../components/Poems/Poems';
import axios from 'axios';
import {connect} from 'react-redux';

class Layout extends Component {

  componentDidMount() {
    axios.get('/poems.json').then((response) => {
      console.log('Get Response: ', response);
      if (response.data) {
        const poems = Object.values(response.data);
        console.log('Mounted poems: ', poems);
        this.props.setPoems(poems);
      }
    });
  }

  render() {
    return (
      <Aux>
        <header>
          <div className="title-header" onClick={this.props.editingToggle}>
            <h1>
              POEMS
            </h1>
          </div>
          <nav>
            <div className="PoemTypes">
              {Object.values(POEM_TYPES).map(type => (
              <div className="PoemType" key={type} onClick={() => this.props.setViewType(type)}>
                {type[0].toUpperCase() + type.substring(1)}
              </div>
              ))}
            </div>
          </nav>
        </header>
        <main className="Content">
          {this.props.editing ?
            <AddPoem add={this.props.postPoem} /> :
            <Poems type={this.props.type} poems={this.props.poems}/>}
        </main>
      </Aux>
    );
  }
};

const mapState = state => {
  return {...state.poems};
};


const mapProps = dispatch => {
  return {...dispatch.poems}
};

export default connect(mapState, mapProps)(Layout);