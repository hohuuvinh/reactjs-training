import React, { Component } from 'react'

export default class Reset extends Component {
    onResetDefault = () => {
        this.props.onSettingDefault(true);
    }
    render() {
        return (
            <div>
                <div className="btn btn-primary mt-2"
                    onClick={this.onResetDefault}>Reset</div>
            </div>
        )
    }
}
