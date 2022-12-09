import "./navbar.scss";
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import { useState } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import {useContext} from "react";


export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const {dispatch}= useContext(AuthContext);

    const handleClick = (e) => {

        e.preventDefault();
        logOut(dispatch);

    };

    window.onscroll = () => {
        setIsScrolled((window.pageYOffset === 0) ? false : true);
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"} >

            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix logo" />



                    <Link to="/" className="link" >   <span>Homepage</span> </Link>
                    <Link to="/movies" className="link" >   <span>Movies</span> </Link>
                    <Link to="/series" className="link" >   <span>Series</span> </Link>
                    <Link to="/" className="link" >   <span>New and popular</span> </Link>
                    <Link to="/" className="link" >   <span>My List</span> </Link>



                </div>
                <div className="right">

                    <Search className="icon" />
                    <span>Kid</span>
                    <Notifications className="icon" />
                    <img src="https://i2-prod.walesonline.co.uk/incoming/article25543363.ece/ALTERNATES/s1200b/0_F1-Grand-Prix-of-Qatar.jpg" alt="user pic" />

                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={handleClick}>Logout</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
