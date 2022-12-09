import "./sidebar.css"
import {
    Timeline, PermIdentity, FormatListNumbered, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report,
    PlayCircleOutlined, Home, AddCircleOutline
} from '@mui/icons-material';

import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebarWrapper">

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>

                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <Home className="sidebarIcon" />
                                Home
                            </li>
                        </Link>

                        <Link to="/users" className="link">
                            <li className="sidebarListItem  " >
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>

                        <Link to="/movies" className="link" >
                            <li className="sidebarListItem">
                                <PlayCircleOutlined className="sidebarIcon" />
                                Movies
                            </li>
                        </Link>

                        <Link to="/lists" className="link">
                            <li className="sidebarListItem">
                            
                                <FormatListNumbered className="sidebarIcon" />
                                Lists
                            </li>
                        </Link>

                    </ul>
                </div>



                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>

                    <ul className="sidebarList">

                        <Link to="/newuser" className="link">
                            <li className="sidebarListItem active" >

                                <AddCircleOutline className="sidebarIcon" />
                                Add New User
                            </li>
                        </Link>

                        <Link to="/newmovie" className="link" >
                            <li className="sidebarListItem">
                                <AddCircleOutline className="sidebarIcon" />
                                Add New Movie
                            </li>
                        </Link>
                        <Link to="/newlist" className="link" >
                            <li className="sidebarListItem">
                                <AddCircleOutline className="sidebarIcon" />
                                Add New List
                            </li>
                        </Link>



                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>

                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>

                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>

                    </ul>
                </div>



                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}
