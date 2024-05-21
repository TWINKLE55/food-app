import User from "./user";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserContext from"../utils/UserContext";
class About extends React.Component {
    constructor(){
        super();
    //   console.log("parent constructor")
    }

    // componentDidMount(){
    //     this.timer= setInterval(()=>{
    //         console.log("twinkle")
    //     },1000)
    // }
    // componentWillUnmount(){
    //     clearInterval(this.timer)
    // }
    render(){
        // console.log("parent render")
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            touchMove:true,
            arrows:true,

          };
        return(
            <>
            {/* <div>
                <UserContext.Consumer>
                    {({loggedin})=><h1>{loggedin}</h1>}
                </UserContext.Consumer>
            </div> */}
        <div className="user-container">
            <Slider {...settings}>
            <User username={"TWINKLE55"}/>
            <User username={"mohitkumar1718"}/>
            <User username={"Ayushparikh-code"}/>
            <User username={"CodeWithHarry"}/>
            <User username={"shradha-khapra"}/>
            </Slider>
         </div></>
        )
    
    }
}



export default About;