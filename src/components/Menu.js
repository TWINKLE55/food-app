
import {ShimmerMenu} from "./shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useRestaurantFetch from "../utils/useRestaurantFetch";
import { useState } from "react";
 
const Menu = () => {
const [showIndex,setShowIndex]=useState(0);
const {id}=useParams();
const te=useRestaurantFetch(id);
const dummy="dummy";

const restInfo=useRestaurantFetch(id);

// console.log(restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
const category=restInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card.card.title)
// console.log(category)
if (restInfo===null){
  return <ShimmerMenu/>;
}

 const {name,cuisines,labels,avgRating,sla,costForTwoMessage,aggregatedDiscountInfo}=restInfo.cards[2].card.card.info;
 
  return (
    <div className="Menu-container ">
      <div className="info-container ">
        <div className="info ">
          <h1 className="text-2xl font-900 font-bold">{name}</h1>
          <p className="text-m font-700 font-medium">{cuisines.join("-")}</p>
          <p className="text-m font-700 font-medium ">{labels[1].message}</p>
    
        </div>
        <div className="rating">
          <h1 className="text-xl font-700 font-bold ">⭐{avgRating}</h1>
        </div>
      </div>

      <div className="discount">
        <div className="details">
          <span>⏱ {sla.deliveryTime} mins</span>
          <span>{costForTwoMessage}</span>
        </div>
        <div className="discount-container">
          <div className="discount-box font-medium text-lg">{aggregatedDiscountInfo.descriptionList[0]?.meta}</div>
          <div className="discount-box font-medium text-lg">{aggregatedDiscountInfo.descriptionList[1]?.meta}</div>
          <div className="discount-box font-medium text-lg">{aggregatedDiscountInfo.shortDescriptionList[0]?.meta}</div>
          
        </div>
        <div className="veg-menu">
          <span>Veg Only</span>
          <button className="veg-toggle">touch</button>
        </div>
      </div>
      
       <div className="menu-items pt-5">
        { category.map((category ,index)=>{return  <RestaurantCategory index={index}  setShowIndex={(i)=>{
          // console.log(i);
          setShowIndex(i)
        }
          
          } showItem={index===showIndex?true:false}  key={category?.card?.card?.title} data={category?.card?.card}/>})}
       </div>
    </div>
  );
};

export default Menu;
