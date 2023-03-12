// import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';
import Home from './pages/home';
import Cart from './pages/cart';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="sign-in" element={<SignIn />}></Route>
          <Route path="sign-up" element={<SignUp />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
