import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({info}) => {
  // console.log(info)
  const{name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=info;
    return (
      <div className="res-card bg-[#F0EBE3]">
        <img src={IMG_URL+cloudinaryImageId}/>
        <div className="info">
          
         { <h2 className="font-medium">{name}</h2> }
          <h4>{cuisines}</h4> 
           <h4>☆{avgRating}</h4>
          <h4>{costForTwo} </h4>
          {/* <h4>⏱{sla.deliveryTime} minutes</h4>  */}
          
        </div>
      </div>
    );  };

     export const withLabel=(RestaurantCard)=>{
     return (info)=>{
      // console.log(info)
          return(
            <div>
              <label className="bg-black absolute text-white p-2 rounded-lg z-10 ">{info.info.aggregatedDiscountInfoV3?.subHeader}</label>
              <RestaurantCard info={info.info}/>
            </div>
          )

     }
    }


  export default RestaurantCard;