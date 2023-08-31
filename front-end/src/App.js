import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavHome from "./Components/NavHome/NavHome";
import GetStart from "./Components/GetStart/GetStart";
import HashLoader from "react-spinners/HashLoader";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Register from "./Components/Register/Pages/Auth/Register";
import Forgot from "./Components/Register/Pages/Auth/Forgot";
import Reset from "./Components/Register/Pages/Auth/Reset";
import Login from "./Components/Register/Pages/Auth/Login";
import LoginWithCode from "./Components/Register/Pages/Auth/LoginWithCode";
import Profile from "./Components/Register/Pages/Profile/Profile";
import Verify from "./Components/Register/Pages/Auth/Verify";
import PageMenu from "./Components/Register/Component/PageMenu/PageMenu";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wallet from "./Components/Register/Wallet/Wallet";
import { useDispatch, useSelector } from "react-redux";
import { getLoginStatus, getUser, selectIsLoggedIn, selectUser } from "./Components/Register/Redux/Features/Auth/authSlice";
import ChangePassword from "./Components/Register/ChangePassWord/ChangePass";
import UserList from "./Components/Register/Pages/UserList/UserList";
import Navbar from "./Components/NavHome/Navbar/Navbar";
import Aspect1 from "./Components/NavHome/Home/Aspect1/Aspect1";
import Sponsors from "./Components/NavHome/Home/Aspect1/Sponsors/Sponsors";
import Aspect2 from "./Components/NavHome/Home/Aspect2/Aspect2";
import UseCase from "./Components/NavHome/Home/UseCase/UseCase";
import Customers from "./Components/NavHome/Home/Customers/Customers";
import WhyUs from "./Components/NavHome/Home/WhyUs/WhyUs";
import ContactMe from "./Components/NavHome/Home/ContactMe/ContactMe";
import Footer from "./Components/NavHome/Home/Footer/Footer";
import Send from "./Components/GetStart/Send/Send";
import History from "./Components/GetStart/History/History";


axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn)
    const user = useSelector(selectUser)
  useEffect(() => {
    dispatch(getLoginStatus());

    if(isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn, user]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="app-app">
      <ToastContainer />
      {loading ? (
        <HashLoader
          className="app"
          color={"#FFBF00"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Routes>
          <Route path="/" element={<NavHome />} />
          <Route path="/get-start/home" element={<GetStart />} />
          <Route path="/get-start/wallet" element={<Wallet />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get-start/profile" element={<Profile />} />
          <Route path="/get-start/send" element={<Send/>} />
          <Route path="/get-start/transaction-history" element={<History/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/pageMenu" element={<PageMenu />} />
          <Route path="/verify/:verificationToken" element={<Verify />} />
          <Route path="/resetPassword/:resetToken" element={<Reset />} />
          <Route path="/changepassword" element={<ChangePassword/>} />
          <Route path="/user" element={<UserList/>} />
          <Route path="/loginwithcode/:email" element={<LoginWithCode />} />
        </Routes>
      )}
      {/* <Card/> */}
    </div>
  );
}

export default App;
