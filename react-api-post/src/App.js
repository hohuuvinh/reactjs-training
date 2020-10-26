import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    }

  }

  onSetColor = (colorFormColorPicker) => {
    // Nhan color tu ColorPicker.js
    // console.log(colorFormColorPicker)
    this.setState({
      color: colorFormColorPicker
    });
  }

  onChangeSize = (value) => {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      })
    }
  }

  onSettingDefault = (value) => {
    if (value === true) {
      this.setState({
        color: 'red',
        fontSize: 12
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container mt-5">
          <div className="row m-0">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
            <div className="col-6 p-2">
              <SizeSetting
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize} />
              <Reset onSettingDefault={this.onSettingDefault} />
            </div>
            <Result color={this.state.color} fontSize={this.state.fontSize} />
          </div>
        </div>
      </div>
    )
  }
}

