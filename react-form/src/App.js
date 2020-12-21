import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: 'gf',
      txtPassword: 'gfg',
      txtDesc: 'b',
      sltGender: 0,
      rdLan: 'vi',
      chkbStatus: false
    };
  }

  onHandleChange = (event) => {
    // console.log(event.target.value)
    var target = event.target;
    var name = target.name;
    var value = target.type == 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row m-0">
          <div className="col-12 p-2">
            <div className="p-2" style={{ border: '1px solid #ccc' }}>
              <p>Form</p>
              <form onSubmit={this.onHandleSubmit}>

                {/* username */}
                <div className="form-group">
                  <label>User address</label>
                  <input type="text" className="form-control" placeholder="Enter email" name="txtUsername"
                    onChange={this.onHandleChange} value={this.state.txtUsername} />
                </div>
                {/* username */}

                {/* Password */}
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="password" name="txtPassword"
                    onChange={this.onHandleChange} value={this.state.txtPassword} />
                </div>
                {/* Password */}

                {/* Note */}
                <div className="form-group">
                  <label>Note</label>
                  <textarea className="form-control" name="txtDesc"
                    rows={3} onChange={this.onHandleChange} value={this.state.txtDesc} />
                </div>
                {/* Note */}

                {/* Gander */}
                <label>Gander</label>
                <select className="form-control" name="sltGender"
                  value={this.state.sltGender}
                  onChange={this.onHandleChange}>
                  <option value={0}> Nữ</option>
                  <option value={1}> Nam</option>
                </select>
                {/* Gander */}

                {/* Language */}
                <label>Language</label>
                <div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="rdLan" value="en"
                      onChange={this.onHandleChange} checked={this.state.rdLan === "en"} />
                    <label>English</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="rdLan" value="vi"
                      onChange={this.onHandleChange} checked={this.state.rdLan === "vi"} />
                    <label>Vietnamese</label>
                  </div>
                </div>
                {/* Language */}

                {/* Checkbox */}
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="chkbStatus"
                      value={true} onChange={this.onHandleChange} checked={this.state.chkbStatus == true} />
                    <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
                  </div>
                </div>
                {/* Checkbox */}

                <button type="submit" className="btn btn-primary">Save</button>
                <button type="reset" className="btn btn-warning">Reset</button>
              </form>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
