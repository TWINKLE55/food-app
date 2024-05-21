 import  MenuList from"./MenuList"
 import Category from"./Category"
const RestaurantCategory=({data,showItem,setShowIndex,index})=>{


    const showList=()=>{
        if(showItem){

            setShowIndex(null)
        }else{

            setShowIndex(index);
        }

    }
    return( 
        <>
          <div className="flex justify-between items-center shadow-lg" onClick={showList}>
        <span className=" text-xl font-900 font-bold my-7 ml-2 p-1">{data?.title}({data?.itemCards?.length})</span>
        <span className="text-xl font-900 font-bold my-7 mr-2 p-1">{showItem ?"⌄":"^"}</span>
    </div>
    <div>
        {/* {console.log(data)} */}
        {showItem ?
         data?.itemCards ? data?.itemCards?.map((menu)=>{return ( <MenuList key={menu.card.info.id} info={menu.card.info}/>) 
        }) :
        data?.categories && data?.categories.map((e)=>{return(<Category  cart={e}/>)})
          :null} 
    </div>
        </>
  
    )
}
export default RestaurantCategory