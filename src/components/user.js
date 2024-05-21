import React from "react";


class User extends React.Component{
    constructor(props){
        super(props);
        
         this.state={
         info:{
            name:"twinkle",
            bio:"Hii How can i help you....u look great by the way",
         }
         }
        
        
    }
   async componentDidMount(){
    const data= await fetch(`https://api.github.com/users/${this.props.username}`);
    const json= await data.json();
    // console.log(json);
    this.setState({
        info:json
    })
   }
//    componentWillUnmount(){
//     console.log("unmount")
//    }
    render(){
        const {name,bio,
            avatar_url
            }=this.state.info
       const z="Hii How can i help you....u look great by the way";
       
        return(

            <div >
            <div className="user-card">
                <div className="user-img">
                <img src={avatar_url}/>
                </div>

                <div className="user-info">
                <h1>{name}</h1>
                <h2>Bio: {bio? bio:"Hii How can i help you....u look great by the way"}</h2>
                </div>
            </div>
            </div>
        )
    }
}
export default User;