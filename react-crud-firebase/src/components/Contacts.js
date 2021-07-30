import React, { useEffect, useState } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";
const Contacts = () => {
    var [contactObject, setContactObject] = useState({})
    var [currenId, setCurrenId] = useState('')
    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObject({
                    ...snapshot.val()
                })
            }
        })
    }, [])


    const addOrEdit = obj => {
        if (currenId == "") {
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
            setCurrenId('')
        } else {
            firebaseDb.child(`contacts/${currenId}`).set(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
            setCurrenId('')
        }
    }

    const onDelete = (id)=>{
        firebaseDb.child(`contacts/${id}`).remove(
            err => {
                if (err) {
                    console.log(err)
                }
            }
        )
        setCurrenId('')
    }
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="text-center">Contacts Rrishs</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({ addOrEdit, currenId, contactObject })} />
                </div>
                <div className="col-md-7" >
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Method</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObject).map(id => {
                                    return <tr key={id}>
                                        <td>{contactObject[id].fullname}</td>
                                        <td>{contactObject[id].mobile}</td>
                                        <td>{contactObject[id].email}</td>
                                        <td>{contactObject[id].address}</td>
                                        <td>
                                            <a className="btn text-primary" onClick={() => setCurrenId(id)}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={()=>onDelete(id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Contacts;