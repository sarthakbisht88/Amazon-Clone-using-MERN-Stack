import "./Navbar.css";
import {Link} from "react-router-dom";

import Logo from "../../assets/amazon-logo.png";

function Navbar(){
    return(
        <div className="Navbar">

            <Link to="/" reloadDocument><div className="Logo"> <img src={Logo} className="Logo" alt="Amazon Logo" /> </div></Link>
            <div className="Location"> <span className="location1"> Delivering to </span> <span className="location2"> India </span> </div>
            <div className="Search"> <input type="text" placeholder="Search Products..." /> <button> Search </button> </div>
            <Link to="/login"><div className="SignIn"> <span> Hello,sign in </span> <span className="bold"> Accounts & Lists </span> </div></Link>
            <div className="Return"> <span> Returns </span> <span className="bold"> & Orders </span> </div>
            <Link to="/checkout"><div className="Cart"> 🛒 Cart </div></Link>

        </div>
    );
}

export default Navbar;