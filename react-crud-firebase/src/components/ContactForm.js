import React,{useState,useEffect} from 'react';

function ContactForm(props) {
    const initialFieldValues = {
        fullname:'',
        mobile:'',
        email:'',
        address:''
    }
    var [values,setValues] = useState(initialFieldValues)
    useEffect(()=>{

        if(props.currentId==""){
            setValues({
                ...initialFieldValues
            })
        }else{
            setValues({
                ...props.contactObject[props.currenId]
            })
        }
    },[props.currenId,props.contactObject])

    const handleInputChange = e =>{
        var {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleFormSumit =e =>{
        e.preventDefault();
        props.addOrEdit(values)
        setValues(initialFieldValues)
    }
    return (
        <div>
            <form autoComplete="off" onSubmit={handleFormSumit}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                    </div>
                    <input className="form-control" placeholder="full name" name="fullname" 
                    value={values.fullname}
                    onChange={handleInputChange}></input>
                </div>
                <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                    </div>
                    <input className="form-control" placeholder="mobile" name="mobile" 
                    value={values.mobile}
                    onChange={handleInputChange}></input>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                    </div>
                    <input className="form-control" placeholder="email" name="email" 
                    value={values.email}
                    onChange={handleInputChange}></input>
                </div>
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                    </div>
                    <input className="form-control" placeholder="add ress" name="address" 
                    value={values.address}
                    onChange={handleInputChange}></input>
                </div>
                <div className="form-group">
                    <input type="submit" value={props.currenId==""?"save":"update"} className="btn btn-primary btn-block"></input>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;