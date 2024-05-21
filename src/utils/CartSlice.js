import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:JSON.parse(localStorage.getItem("cartItems"))
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
            const cartData=JSON.stringify(current(state.items))
            console.log(cartData)
            localStorage.setItem("cartItems",cartData)
        },
        removeItem:(state,action)=>{
            // state.items.pop();
            // console.log(state.items)
            let p;
            state.items.forEach(function(currentValue, index){
                  if(action.payload.id===currentValue.id){
                    p=index;
                  }
            })
            state.items.splice(p, 1);
            
       
        },
        clearCart:(state,action)=>{
            state.items.length=0
        }
    }
})
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;