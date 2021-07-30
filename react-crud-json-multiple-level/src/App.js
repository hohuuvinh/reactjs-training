import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [quanlity, setQuanlity] = useState(false)
  function getcart() {
    var cartArr = [];
    firebase.firestore().collection("cart-order").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        cartArr.push({ id: doc.id, ...doc.data() })
      });
      setCart(cartArr)
    })
    console.log(cartArr)
  }

  console.log(cart)
  useEffect(() => {
    getcart();
  }, [quanlity])

  const UpQuanlity = (iditem, idstore) => {
    cart.forEach((cart) => {
      if (cart.id == idstore) {
        console.log(cart)
        cart.item.forEach((item) => {
          if (item.id == iditem) {
            item.quanlity++
          }
        })

        firebase.firestore().collection("cart-order").doc(cart.id).update(
        cart
      )
      
      setQuanlity(!quanlity)
      }
      
    })
    
  }
  console.log(quanlity)
  return (
    <div className="App">
      {cart.map((cart) =>
        <>
          <p>{cart.name}</p>
          {cart.item.map((item) =>
            <ul>
              <p>{item.name}</p>
              <p>{item.quanlity}</p>
              <p onClick={() => UpQuanlity(item.id, cart.id)}>cong</p>
            </ul>
          )}
        </>
      )}

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