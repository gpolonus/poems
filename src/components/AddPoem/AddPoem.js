
import React, {Component} from 'react';
import './AddPoem.css';
import Line from './Line/Line';

export default class AddPoem extends Component{

  state = {
    lines: [''],
    newLine: true,
    ready: false
  };

  addLineHandler(index) {
    if (this.state.lines.length === 4) {
      this.saveHandler();
      return;
    }
    const lines = [...this.state.lines];
    lines.splice(index + 1, 0, ''); 
    this.setState({ lines, newLine: true });
  }

  lineChangeHandler(line, index) {
    const lines = [...this.state.lines];
    lines[index] = line;
    const ready = lines.every(_line => _line !== '') && lines.length === 4;
    this.setState({lines, ready});
  }

  saveHandler() {
    if(this.state.ready) {
      this.props.add(this.state.lines);
    }
  }

  render() {
    return (
      <div className="Lines">
        {this.state.lines.map((line, index, lines) => {
          return (
            <Line
              key={'line-' + index}
              line={line}
              change={(_line) => this.lineChangeHandler(_line, index)}
              addLine={this.addLineHandler.bind(this, index)}
              autoFocus={index === lines.length - 1}
            />
          );
        })}
        {this.state.ready ? 
          <button tabIndex="-1" className="Submit" onClick={this.saveHandler.bind(this)}>SAVE</button> :
          null
        }
      </div>
    );
  }
}
