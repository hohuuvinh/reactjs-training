import React, { useEffect, useState } from "react";
import firebase from "./firebase";

function App() {
  const [cartDefault, setCartDefault] = useState(
    [
      {
        address: "Lien chieu da nang",
        name: "Ho Huu Vinh",
        Phone: "0799438888",
        discount: [
          {
            name: "Discount 20%",
            code: "DC20"
          },
          {
            name: "Free ship",
            code: "FS"
          }
        ],
        story: [{
          name: "Story electronic",
          discount: [
            {
              name: "Discount 15%",
              code: "DC20"
            },
            {
              name: "Free ship",
              code: "FSST"
            }
          ],
          item: [
            {
              name:"Iphone 12 pro max",
              price:1000,
              priceDiscount:800,
              quanlity:1,
              active:false,
              type:{
                color:"pink"
              }
            },
            {
              name:"Tivi samsung 42 ich",
              price:20,
              priceDiscount:18,
              quanlity:3,
              active:false,
              type:{
              }
            }
          ]
        }],
        story: [{
          name: "Story fashion",
          discount: [
            {
              name: "Discount 15%",
              code: "DC20"
            },
            {
              name: "Free ship",
              code: "FSST"
            }
          ],
          item: [
            {
              name:"Tshirt Logo Google",
              price:20,
              priceDiscount:18,
              quanlity:1,
              active:false,
              type:{
                color:"white",
                size:"xs"
              }
            },
            {
              name:"shoes",
              price:20,
              priceDiscount:18,
              quanlity:3,
              active:false,
              type:{
                color:"black & blue"
              }
            }
          ]
        }]
        
      },

    ]
  );
  const [cart, setCart] = useState([]);
  const ref = firebase.firestore().collection("cart-order");
  function getcart() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCart(items)
    })
  }
  useEffect(() => {
    getcart();
  }, [])
  console.log(cart)
  console.log(cartDefault)
  let totalCart = 0;
  cart.forEach((getCart) => {
    getCart.story.forEach((getStory) => {
      getStory.item.forEach((getItem) => {
        totalCart += getItem.priceDiscount * 1;
      })
    })
  })
  totalCart = parseFloat(totalCart).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  console.log(totalCart)



  return (
    <div className="App">
      {cartDefault.map((customer) =>
        <div>
          Name customer: {customer.name}
          <br></br>
          Phone: {customer.phone}
          <br></br>
          Address: {customer.address}
          <div>
            <p>Discount of customer</p>
            {customer.discount.map((discount) =>
              <ul >
                <li>{discount.name} - {discount.code}</li>
              </ul>
            )}
            <p>Cart</p>
            {customer.story.map((story) =>
              <div>
                {story.name}
                {story.item.map((item) =>
                  <ul>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    {
                      Object.entries(item.type).map(([k, v]) => (
                        <div key={k}>
                          {k}: {v}
                        </div>
                      ))
                    }
                  </ul>
                )}
                {story.discount.map((discount) =>
                  <ul>
                    Discount Of shop
                    <li>{discount.name}</li>
                    <li>{discount.code}</li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      <p>Total: {totalCart}đ</p>
    </div>
  );
}

export default App;
