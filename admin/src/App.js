import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar"
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newmovie/NewMovie";
import MovieList from "./pages/movie list/MovieList";
import ListList from "./pages/list list/ListList";
import List from "./pages/list /List";
import NewList from "./pages/new list/NewList";


function App() {

  const {user} = useContext(AuthContext);

  return (

    <Router className="App">
      
    {user &&   <Topbar />}

      <div className="container" >

       {user && <Sidebar />}

        <Routes>
          <Route path="/login"     element={<Login />} ></Route>
          <Route path="/"          element={ user? <Home />: <Login />} ></Route>
          <Route path="/users"     element={ user? <UserList />:<Login/>} ></Route>
          <Route path="/user/:id"  element={user?<User /> :<Login/>} ></Route>
          <Route path="/newuser"   element={user?<NewUser /> :<Login/>} ></Route>
          <Route path="/movies"    element={user?<MovieList /> :<Login/>} ></Route>
          <Route path="/movie/:id" element={user?<Movie /> :<Login/> } ></Route>
          <Route path="/newmovie"  element={user?<NewMovie /> :<Login/>} ></Route>
          <Route path="/lists"    element={user?<ListList /> :<Login/>} ></Route>
          <Route path="/lists/:id" element={user?<List /> :<Login/> } ></Route>
          <Route path="/newlist"  element={user?<NewList /> :<Login/>} ></Route>

        </Routes>


      </div>
    </Router>
  );
}

export default App;
