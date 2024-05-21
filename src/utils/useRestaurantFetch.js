import { useEffect, useState } from "react";
 const useRestaurantFetch= (id)=>{
    const [restInfo,setResInfo]=useState(null);
    

    useEffect(()=>{
        fetchData()
    },[id]);
    const fetchData=async ()=>{
        const data= await fetch( `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&query=Burger&submitAction=ENTER`
        );
        const json=await data.json();
        // console.log(json.data)
        setResInfo(json.data)
        
    
    }
    return restInfo;
    
 };
 export default useRestaurantFetch;