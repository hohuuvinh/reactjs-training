import React, { Component } from 'react'

export default class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue']
        };
    }
    showColor(color) {
        console.log(this.props.color);
        return {
            backgroundColor: color
        };
    }
    setActiveColor(colorSendApp) {
        // tra du lieu ra app.js
        this.props.onReceiveColor(colorSendApp);
    }

    render() {
        var elmColors = this.state.colors.map((color, index) => {
            return <div
                key={index}
                style={this.showColor(color)}
                className={this.props.color === color ? 'activeColor' : ''}
                onClick={() => this.setActiveColor(color)}></div>
        });
        return (
            <div className="col-6 p-2">
                <div className="p-2" style={{ border: '1px solid #ccc' }}>
                    <p>Color Picker </p>
                    <div className="colorBox" style={{ display: 'flex' }}>
                        {elmColors}
                    </div>

                </div>
            </div>
        )
    }
}
