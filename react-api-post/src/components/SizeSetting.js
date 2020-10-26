import React, { Component } from 'react'

export default class SizeSetting extends Component {
    changeSize(value) {
        // console.log(value);
        this.props.onChangeSize(value);
    }

    render() {
        return (
            <div>
                <div className="p-2" style={{ border: '1px solid #ccc' }}>
                    <p>Size {this.props.fontSize}px </p>
                    <button
                        className="btn btn-primary float-left mr-2"
                        onClick={() => this.changeSize(-2)}
                    >Giam</button>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.changeSize(2)}
                    >tang</button>
                </div>
            </div>
        )
    }
}
