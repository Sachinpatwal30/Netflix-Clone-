import { CalendarToday, LocationOn, MailOutline, PermIdentity, Phone, Publish } from "@mui/icons-material";
import {Link} from "react-router-dom";
import "./user.css"


export default function User() {
    return (
        <div className="user">

            <div className="userTitleContainer">
                <span className="userTitle">Edit User</span>

                <Link to="/newuser">
                <button className="userAddButton">Create </button>
                </Link>
                
            </div>


            <div className="userContainer">

                <div className="userShow">

                    <div className="userShowTop">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijOBMa_kboSxuauiMs1f-pmWOJw0ufmuD0gnWJJWpW7vtd291EVmJZOD7085rT7d-fL8&usqp=CAU"
                            alt="" className="userShowImg" />

                        <div className="userShowTopTitle">

                            <span className="userShowUsername">Sachin Patwal</span>
                            <span className="userShowUserTitle">Software Engineer</span>


                        </div>

                    </div>
                    <div className="userShowBottom">

                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">

                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">sachin99</span>

                        </div>

                        <div className="userShowInfo">

                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10.09.2000</span>

                        </div>

                        <div className="userShowInfo">

                            <Phone className="userShowIcon" />
                            <span className="userShowInfoTitle">+91 983 711 234</span>

                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">

                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">sachin99@gmail.com</span>

                        </div>

                        <div className="userShowInfo">

                            <LocationOn className="userShowIcon" />
                            <span className="userShowInfoTitle">New Delhi, India</span>

                        </div>

                    </div>

                </div>
                <div className="userUpdate">

                    <span className="userUpdateTitle">Edit</span>

                    <form className="userUpdateForm">


                        <div className="userUpdateLeft">

                            <div className="userUpdateItem">
                                <label >Username:</label>
                                <input className="userUpdateInput" type="text" placeholder="Sachin30" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name:</label>
                                <input className="userUpdateInput" type="text" placeholder="Sachin Patwal" />
                            </div>

                            <div className="userUpdateItem">
                                <label >Email:</label>
                                <input className="userUpdateInput" type="text" placeholder="Sachinpatwal30@gmail.com" />
                            </div>

                            <div className="userUpdateItem">
                                <label >Phone:</label>
                                <input className="userUpdateInput" type="text" placeholder="+91 983 711 234" />
                            </div>

                            <div className="userUpdateItem">
                                <label >Address:</label>
                                <input className="userUpdateInput" type="text" placeholder="New Delhi, India " />
                            </div>


                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">


                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijOBMa_kboSxuauiMs1f-pmWOJw0ufmuD0gnWJJWpW7vtd291EVmJZOD7085rT7d-fL8&usqp=CAU"
                                    alt="" className="userUpdateImg" />

                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input id="file" type="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}
