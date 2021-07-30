import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import "./App.css";

function App() {
  const [cartDefault, setCartDefault] = useState(
    [
      {
        address: "Lien chieu da nang",
        name: "Ho Huu Vinh",
        phone: "0799438888",
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
              name: "Iphone 12 pro max",
              image:"https://bizweb.dktcdn.net/thumb/large/100/116/615/products/12promax.png?v=1602751668840",
              price: 1000,
              priceDiscount: 800,
              quanlity: 1,
              active: false,
              type: {
                color: "pink"
              }
            },
            {
              name: "Tivi samsung 42 ich",
              image:"https://cdn.mediamart.vn/Product/smart-tivi-samsung-4k-43-inch-43tu7000-3YYnTW.png",
              price: 20,
              priceDiscount: 18,
              quanlity: 3,
              active: false,
              type: {
              }
            }
          ]
        }, {
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
              name: "Tshirt Logo Google",
              image:"http://cdn.shopify.com/s/files/1/0984/4522/products/Google-Men-T-Shirt-2_1024x1024.jpg?v=1577770906",
              price: 20,
              priceDiscount: 18,
              quanlity: 1,
              active: false,
              type: {
                color: "white",
                size: "xs"
              }
            },
            {
              name: "shoes",
              image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ce415b10-a56c-4cc8-b8f7-47fa2283ba50/jordan-ma2-shoe-qw1Z6m.png",
              price: 20,
              priceDiscount: 18,
              quanlity: 3,
              active: false,
              type: {
                color: "black & blue"
              }
            }
          ]
        }]
      }
    ]
  );
  console.log(cartDefault)
  let totalCart = 0;
  cartDefault.forEach((getCart) => {
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
          <table>
            <tr>
              <th>Info Customer</th>
            </tr>
            <tr>
              <td>
                <div>
                  <p>Name customer: {customer.name}</p>
                  <p>Phone: {customer.phone}</p>
                  <p>Address: {customer.address}</p>
                  <hr></hr>
                  <p>Voucher Wallet</p>
                  {customer.discount.map((discount) =>
                    <>{discount.name} - {discount.code}<br></br>    </>
                  )}
                </div>
              </td>
            </tr>
          </table>
          {customer.story.map((story) =>
            <table style={{ marginTop: '20px' }}>
              <tr>
                <th>{story.name}</th>
              </tr>
              <tr>
                <td>
                  {story.item.map((item) =>
                    <ul>
                      <img src={item.image} width="50px" height="50px"></img>
                      <p>Name item: {item.name}</p>
                      <p>Price: {item.price}$</p>
                      <p>PriceDiscount: {item.priceDiscount}$</p>
                      <p>Type</p>
                      <div style={{ paddingLeft: '20px' }}>
                        {
                          Object.entries(item.type).map(([k, v]) => (
                            <div key={k} >
                              <p>{k}: {v}</p>
                            </div>
                          ))
                        }
                      </div>
                      <hr></hr>
                    </ul>
                    
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ paddingLeft: "20px" }}>
                    <p style={{ fontWeight: "bold" }}>Discount Of shop</p>
                    {story.discount.map((discount) =>
                      <div>
                        <p>{discount.name} - {discount.code}</p>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </table>
          )}
        </div>
      )}     
      <p style={{textAlign:"center",fontWeight:"bold"}}>Total: {totalCart}đ</p>
    </div>
  );
}
export default App;
