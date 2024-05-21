const Contact=()=>{
   return( <div className="justify-center  ">
  
            <div className="justify-center m-auto contact  mt-5">
            <h2 className="text-2xl font-bold text-center m-4">Contact Us</h2>
            <form>
                <input className="m-4 text-center" type="text" placeholder="full Name" name="user_name" required/>
                <input className="m-4 text-center"type="email" placeholder="Email" name="user_email" required/>
                <input className="m-4 text-center"type="tel" placeholder="Mobile Number" name="user_mobile_no." required/> 
                <textarea className="m-4 text-center text"name="message" id=" " ></textarea>
                <button className="filter-btn  justify-end " type="submit ">Send Message</button>
            </form>
            </div>
        
    </div>)
}

export default Contact;