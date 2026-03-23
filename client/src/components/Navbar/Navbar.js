import "./Navbar.css";

import Logo from "../../assets/amazon-logo.png";

function Navbar(){
    return(
        <div className="Navbar">

            <div className="Logo"> <img src={Logo} className="Logo" alt="Amazon Logo" /> </div>
            <div className="Location"> <span className="location1"> Delivering to </span> <span className="location2"> India </span> </div>
            <div className="Search"> <input type="text" placeholder="Search Products..." /> <button> Search </button> </div>
            <div className="SignIn"> <span> Hello,sign in </span> <span className="bold"> Accounts & Lists </span> </div>
            <div className="Return"> <span> Returns </span> <span className="bold"> & Orders </span> </div>
            <div className="Cart"> 🛒 Cart </div>

        </div>
    );
}

export default Navbar;