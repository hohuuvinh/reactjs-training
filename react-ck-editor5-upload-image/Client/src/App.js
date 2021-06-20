import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Contact from './components/contactComponet/contact';

// function App() {

//   return (
//     <div>
        
//         <Router>
       
//        <Route exact path="/" component={Contact} />
      
//         </Router>    
    
//     </div>
//   );
// }


 class App extends Component{

    render(){

      return (
    <div>
        
        <Router>
       
       <Route exact path="/" component={Contact} />
      
        </Router>    
    
    </div>
  );
      
    }
 }

export default App;
