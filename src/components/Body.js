import {Shimmer} from"./shimmer.js"
import RestaurantCard from "../components/RestauranrCard.js"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useEffect,useState } from "react"
import { Main_URL } from "../utils/constants.js";
import { withLabel } from "../components/RestauranrCard.js";
// import UserContext from "../utils/UserContext.js";
// import { useContext } from "react";
const LabelCard=withLabel(RestaurantCard);
const Body = () => {
  const [searchText,setSearchText]=useState("");
  const onlinestatus=useOnlineStatus();
  // const {loggedin,setUserName}=useContext(UserContext)

  if(onlinestatus===false) return (<h1>OMFOOO.....Mtlb Katt gya.</h1>)
  const [filtered,setFiltered]=useState(null);
  
  const[data,setdata]=useState(null);
    useEffect(()=>{
    fetchdata();
    },[]);

    const fetchdata=async ()=>{
    const data= await fetch(Main_URL);
    const json=await data.json();
    
    setdata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
    setFiltered(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);}
   console.log(filtered)
    return (data===null)? <Shimmer/>:(
      <div className="body bg-[]">
        
        <div className="filter ">
            <div className="search-container">
              <input type="text"  className="input-body" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
              }}/>
              <button className="search-btn" onClick={()=>{
                 const filterRestaurant=data.filter((res)=>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                
                setFiltered(filterRestaurant);
          
                  
              }}>Search</button>
                      {/* <input type="text" className="input-body"  value={loggedin} onChange={(e)=>{
              setUserName(e.target.value);
              }}/> */}
            </div>


          <button className="filter-btn" onClick={()=>
          {const filterList = data.filter((res)=> res.info.avgRating>4.1);
            setFiltered(filterList);
            console.log(filterList)
            }} 
        
           >
            Search For Best Restaurant</button>
        </div>

        <div className="res-container ">
       {/* not using key (not acceptable)<<<using index<<<<key is prefferable */}
  {/* {console.log(data[0].info.name)} */}
        {filtered?.map((restaurant)=>(
        <Link  className="a" key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
        
          
         { restaurant.info.aggregatedDiscountInfoV3?.header? (<LabelCard  info={restaurant.info}/>): (<RestaurantCard info={restaurant.info}/>)
        }
            
            
          
        </Link>) )}
      
        </div>
      </div>
    );
}
  
  export default Body;