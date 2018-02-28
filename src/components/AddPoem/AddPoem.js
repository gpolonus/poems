
import React, {Component} from 'react';
import './AddPoem.css';
import Line from './Line/Line';

export default class AddPoem extends Component{

  state = {
    editing: false,
    lines: ['Start'],
    selected: 0
  };

  saveHandler = () => {
    this.props.add(this.state.lines);
    this.setState({editing: false});
  }

  selectHandler = (index) => {
    this.setState({selected: index});
  }

  addHandler = () => {
    this.setState({ editing: true });
  }
  
  focusHandler() {
    console.log('Trying to focus');
    this.inputElement.focus();
  }

  blurHandler() {
    const selected = this.state.selected - 1;
    this.setState({selected});
  }

  keyHandler(event) {
    const which = event.which;
    const allowed = 
      (65 <= which && which <= 90) ||
      which === 32 ||
      which === 13 ||
      which === 8;
    if(allowed) {
      if (which === 8 && this.state.selected >= 0) {
        const lines = [...this.state.lines];
        const _line = lines[this.state.selected];
        if (_line.length === 0) return;
        const line = _line.substr(0, _line.length - 1);
        lines[this.state.selected] = line;
        this.setState({ lines });
      } else if (which === 13) {
        if (this.state.selected === 3) {
          this.saveHandler();
          return;
        }
        const lines = [...this.state.lines];
        const selected = this.state.selected + 1;
        lines.splice(selected, 0, '');
        this.setState({ lines, selected });
      } else {
        const lines = [...this.state.lines];
        const _line = lines[this.state.selected];
        const line = _line + String.fromCharCode(which).toLowerCase();
        lines[this.state.selected] = line;
        this.setState({ lines });
      }
    }
  }

  render() {
    const style = {};

    if(this.state.editing) {
      return (
        <div onClick={this.focusHandler.bind(this)}>
          {this.state.lines.map((line, index) => {
            return (
              <Line select={this.selectHandler.bind(this, index)} selected={this.state.selected} key={index}/>
            );
          })}
          <input className="hidden" onFocus={() => console.log('Focused!')} onBlur={this.blurHandler.bind(this)} onKeyUp={this.keyHandler.bind(this)} type='text' ref={inp => this.inputElement = inp}/>
          <button style={style} onClick={this.saveHandler.bind(this)}>SAVE</button>
        </div>
      );
    } else {
      return <button style={style} onClick={this.addHandler.bind(this)}>ADD</button>
    }
  }
}
