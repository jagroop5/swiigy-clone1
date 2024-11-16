import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // original state = {items : ["pizza"] }   for example
    clearCart: (state) => {
      // console.log(state);  // {items : ["pizza"] }, we see proxy object, given by redux, so we use current(state)
      // console.log(current(state));  // using this we can see the proxy object, current is from RTK
      // state = []  // this is not referring to the original state, it will not empty the original state
      // console.log(state);  // []   but original state is still {items : ["pizza"] }, the state here is local

      //RTK - either Mutate the existing  state or return a new State
      state.items.length = 0; // originalState or state = []
      // state.items = []
      // return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
