import { useDispatch } from "react-redux";
import { MENU_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";
const MenuList=({info})=>{
// console.log(info)
const dispatch=useDispatch()
const handleClick=(info)=>{
 dispatch(addItem(info))
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
            <button className="relative bg-black rounded-lg text-white p-2 w-[80px] text-center ml-8 bottom-7 " onClick={()=>handleClick(info)}>ADD +</button>
          </div>
          </div>
       
        
          </div>
    );
};

export default MenuList;