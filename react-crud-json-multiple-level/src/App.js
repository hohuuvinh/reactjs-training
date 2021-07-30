import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  function getcart() {
    var cartArr = [];
    firebase.firestore().collection("cart-order").onSnapshot((querySnapshot) => {   
      querySnapshot.forEach((doc) => {
        cartArr.push({ id: doc.id, ...doc.data() })    
      });
      setCart(cartArr)
    })
  }
  console.log(cart) 
  useEffect(() => {
    getcart();
  }, [])


  return (
    <div className="App">
      
    </div>
  );
}
export default App;

// console.log(storyArr)
      // console.log(cartDefault)
      // cartDefault.forEach((getCart) => {
      //   getCart.id = infoCustomerArr[0].id
      //   getCart.name = infoCustomerArr[0].name
      //   getCart.phone = infoCustomerArr[0].phone
      //   getCart.story=storyArr
      //   console.log(getCart.story)
      //   getCart.story.forEach((getStory) => {
      //     console.log("getStory")
      //   })
      // })
      // cart.push(infoCustomer{story})
      // console.log(cart)
      // setInfoCustomer(infoCustomer)