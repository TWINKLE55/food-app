import React, { Suspense ,lazy, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from"./components/Menu"
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from"./components/cart";

const Body= lazy(()=>import("./components/Body"));
const AppLayout = () => {
const [userName,setUserName]=useState()
useEffect(()=>{
const data={name:"Twinkle"};
setUserName(data.name)
},[])
  return (
  <Provider store={appStore}>
    <UserContext.Provider value={{loggedin:userName,setUserName}}>
    <div className="app mt-0 bg-white ">
      <Header/>
      <div className=""> 
      <Outlet/>
      </div>
    </div>
    </UserContext.Provider>
  </Provider>
  );
};



  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Suspense><Body/></Suspense>
        },
        {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:id",
        element:<Menu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
      errorElement:<Error/>
    },
    

  ])



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter}/>);
// console.log( dataobject[0])