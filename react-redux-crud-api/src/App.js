import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Products/>
      </Route>
      <Route exact path="/add">
        <AddProduct/>
      </Route> 
      <Route exact path="/edit/:id">
          <EditProduct/>
      </Route> 
    </Router>
  );
}

export default App;
