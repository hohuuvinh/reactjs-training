import React, { Component } from 'react'

export default class Result extends Component {
    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            borderStyle: 'solid',
            fontSize: this.props.fontSize
        }
    }
    render() {
        return (
            <div className="col-12 p-2">
                <p>Color: {this.props.color}, font-size: {this.props.fontSize}px</p>
                <div className="p-2" style={this.setStyle()}>
                    <p>Noi dung setting</p>

                </div>
            </div>
        )
    }
}
