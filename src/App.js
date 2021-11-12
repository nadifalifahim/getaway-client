import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared Components/Footer/Footer";
import Navbar from "./Pages/Shared Components/Navbar/Navbar";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MyBookings from "./Pages/MyBookings/MyBookings";
import AddNewService from "./Pages/AddNewService/AddNewService";
import ManageAllBookings from "./Pages/ManageAllBookings/ManageAllBookings";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/my-bookings"
              element={<PrivateRoute element={<MyBookings />} />}
            />
            <Route
              exact
              path="/all-bookings"
              element={<PrivateRoute element={<ManageAllBookings />} />}
            />
            <Route
              exact
              path="/add-new-service"
              element={<PrivateRoute element={<AddNewService />} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
