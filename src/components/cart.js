
import {useSelector,useDispatch} from "react-redux"
import { clearCart } from "../utils/CartSlice";
import CartList from"./Cartlist";
const Cart=()=>{
    const CartItems=useSelector((store)=>store.cart.items)
    // console.log(CartItems)
    const dispatch=useDispatch()
    
    const handleClear=()=>{
       dispatch(clearCart())
    }
    return(
        <div className="w-8/12 ml-auto mr-auto">
            <button className="login ml-4 mt-4" onClick={handleClear}>Clear Cart</button>
            {CartItems.length===0 &&<h1 className="flex items-center justify-center font-bold mt-9">Your Cart Is Empty.Add Items To The Cart...🤞💕</h1>}
            {CartItems.map((menu,index)=>{return<CartList key={menu.id} index={index}info={menu} />})}
        </div>
    
)}

export default Cart;