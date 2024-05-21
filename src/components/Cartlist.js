import { useDispatch } from "react-redux";
import { MENU_URL } from "../utils/constants";
import { removeItem } from "../utils/CartSlice";
import { useState } from "react";
const CartList=({info,index})=>{
const [itemCount,setItemCount]=useState(0);
const dispatch=useDispatch()
const handleClick=(info,index)=>{
 dispatch(removeItem(info,index))
}
    return(
      <div>
       
        <div  className="menu-list">
        <div className="menu-item">
          <h2 className="font-bold text-2xl font-900">{info.name}</h2>
          <h2  className="font-bold text-2xl font-900">₹ {info.price?(info.price/100):(info.defaultPrice/100)}</h2>
          <p className="font-normal text-lg font-600">
          {info.description}
          </p>
        </div>
            <div className=" object-cover w-[150px] h-[150px] m-5 items-center">
            <img
              className="menu-img"
              src={MENU_URL+info.imageId}
            />
            <button className="relative bg-black rounded-lg text-white p-2 w-[85px] text-center ml-8 bottom-7 " onClick={()=>{
              handleClick(info,index)
              
              }}>Remove -</button>
          </div>
          </div>
       
        
          </div>
    );
};

export default CartList;