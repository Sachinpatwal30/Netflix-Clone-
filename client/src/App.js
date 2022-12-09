import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/authContext/AuthContext";
import {useContext} from "react";


function App() {

  const {user} = useContext(AuthContext)
 
  return (

    <Router>

      <Routes>

        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/movies" element={user ? <Home type="movie" /> : <Navigate to="/login" />} />
        <Route path="/series" element={user ? <Home type="series" /> : <Login />} />
        <Route path="/watch" element={user ? <Watch /> : <Login />} />
        <Route path="/login" element={user ?<Home />: <Login />} />
        <Route path="/register" element={user?<Home />: <Register />} />


      </Routes>
    </Router>

  );
}

export default App;

