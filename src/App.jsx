import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import LoggedIn from "./pages/LoggedIn";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/LoggedIn" /> : <Login />}
        />
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={user ? <Navigate to="/LoggedIn" /> : <Register />}
        />
      </Routes>
      <Routes>
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Routes>
        <Route path="/LoggedIn" element={<LoggedIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
