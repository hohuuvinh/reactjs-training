import React from 'react'

import * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
//import  * as Essentials from '@ckeditor/ckeditor5-essentials';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';


import CKEditor from '@ckeditor/ckeditor5-react'
console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));
export default class Contact extends React.Component{

 






    state ={
        username: '',
        email: '',
        phone: '',
        content: ''
    }


    handleStateChanges =(event) =>{
    const target = event.target

    const {name, value} = target;
     
     this.setState({
         [name] : value,
     })

    }

    ckeditorstate = (event, editor) =>{
        const data = editor.getData();
        this.setState({content:data});
        console.log("STATE", {data})
    }

    render(){
   console.log('STATE _', this.state);
       return(
           <div className="container">
            <div className="wrapper">

<h1>Contact Form</h1>

<form >
  <div className="form-group">
   <div className="form-group">
     <label>Username</label>
      <input type="text" className="form-control" name="username" value={this.state.usermame}   onChange={this.handleStateChanges} placeholder=" Enter Username" />
   </div>
   <div className="form-group">
   <label>Email</label>
      <input type="text" className="form-control" name="email" value={this.state.email}   onChange={this.handleStateChanges} placeholder=" Enter Email" />
   </div>
   <div className="form-group">
   <label>Phone Number</label>
      <input type="text" className="form-control" value={this.state.phone}   onChange={this.handleStateChanges} name="phone" placeholder=" Enter Phone" />
   </div>
   <div className="form-group">
   <label>Texr Content</label>
     <CKEditor
      editor ={ClassicEditor}
       onInit = { editor =>{
           //// Here the editor is ready to be used
       }}
       onChange ={this.ckeditorstate}
       config = {
        {
           // plugins: [ Essentials ],
          ckfinder: {
              // The URL that the images are uploaded to.
              uploadUrl: '/upload', 
  
              // Enable the XMLHttpRequest.withCredentials property.
              withCredentials: true,
  
              // Headers sent along with the XMLHttpRequest to the upload server.
              headers: {
                  'X-CSRF-TOKEN': 'CSFR-Token',
                   Authorization: 'Bearer <JSON Web Token>'
              }
        } }

     }
       
     />


      {/* <textarea type="text"  cols="30" rows="15" value={this.state.content}   onChange={this.handleStateChanges} className="form-control" name="content" placeholder=" Enter Phone" /> */}
   </div>
   </div>
   <div className="form-group">
     <input type="submit" className="btn btn-primary"  name="submit" value="Submit"/>
   </div>
</form>
</div>
           </div>
       );
    }
}