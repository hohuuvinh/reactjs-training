import React, { useState } from 'react'
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    Text: "",
    Check: false,
    Radio: "men",
    Select: 1,
    Range: ""
  })
  const handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type == "checkbox" ? target.checked : target.value;
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  }
  return (
    <div className="App ">
      <div className="p-5" style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input type="text" className="form-control" name="Text" value={formData.Text} onChange={handleChange} />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" name="Check" checked={formData.Check} onChange={handleChange} />
              <label className="form-check-label">Check me out</label>
            </div>
            <div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Radio" value="men" defaultChecked
                  onChange={handleChange} checked={formData.Radio == "men"} />
                <label>Default radio</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Radio" value="women"
                  onChange={handleChange} checked={formData.Radio == "women"} />
                <label>Second default radio</label>
              </div>
              <div>
                <label>Select</label>
                <select className="form-control" name="Select" value={formData.Select} onChange={handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label>Range</label>
                <input type="range" className="form-control-range" name="Range" value={formData.Range} onChange={handleChange} />
              </div>
            </div>
          </form>
        </div>
        <div style={{ width: "50%" }}>
          <p>Radio: {formData.Radio}</p>
          <p>Check: {formData.Check ? "Yes" : "No"}</p>
          <p>Text: {formData.Text}</p>
          <p>Select: {formData.Select}</p>
          <p>Range: {formData.Range}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
