import * as Types from './../actions/ActionTypes';

var initialState = [{
    id:1,
    name:"Onegfgf" ,
 },
 {
     id:2,
     name:"Tow" ,
  },
  {
     id:3,
     name:"Three" ,
  },];

const CardRD = (state = initialState, action) => {
    switch (action.type) {
        // case Types.ADD_PRODUCTS:
        //     console.log("ok");
        //     return [...state];
        default: return [...state];
    }
}
export default CardRD;