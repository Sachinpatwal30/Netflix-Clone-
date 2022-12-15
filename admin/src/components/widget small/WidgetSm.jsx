import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./widgetSm.css";
import axios from "axios";
import {Link} from "react-router-dom";


export default function WidgetSm() {


    const [users, setUsers]= useState([]);

    useEffect(()=>{

        const getUsers=async()=>{

            try{
                const res= await axios.get("users?new=true")
                setUsers(res.data);
                
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    },[]);

    console.log("users are ",users );


    return (
        <div className="widgetSm">


            <span className="widgetSmTitle">New Join Members</span>

            <ul className="widgetSmList">

                {

                    users.map((user,index) =>{

                    return   <li key={index} className="widgetSmListItem">

                        <img src={user.profilePicture || "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Faenza-avatar-default-symbolic.svg/1024px-Faenza-avatar-default-symbolic.svg.png"}
                            alt="widgetSmListImg" className="widgetSmImg" />
    
                        <div className="widgetSmUser">
    
                            <span className="widgetSmUsername">{user.username}</span>
                            <span className="widgetSmUserTitle">{user.title? user.title: "Software Engineer"  }</span>
                        </div>
                        <Link className="link" to={"/user/"+user._id} >
                        <button className="widgetSmButton">     <Visibility className="widgetSmIcon" /> display   </button>
                        </Link>
                       
                    </li>

                    })
                }

            </ul>

        </div>
    )
}
