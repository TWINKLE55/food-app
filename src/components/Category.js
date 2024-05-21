import MenuList from "./MenuList"
import RestaurantCard from "./RestauranrCard"

const Category=({cart})=>{
    return(
        <>
        {
            cart.itemCards?.map((menu)=>{
                return(<MenuList key={menu.card.info.id} info={menu.card.info} />)
            })
        }
        </>
    )
   

}
export default Category;