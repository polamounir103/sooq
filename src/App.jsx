import "./App.css";
import Header from "./components/shared/Header";
import OpeningAnimation from "./components/ui/OpeningAnimation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import NoPage from "./pages/NoPage";
import AdimnDashboard from "./pages/AdimnDashboard";
import Product from "./pages/Product";
// import Footer from "./components/shared/Footer";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <OpeningAnimation />
      <div className="App">
        <Header />
        <div className="px-5 md:px-8 lg:px-12 p-14">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Signin />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/admin-dashboard" exact element={<AdimnDashboard />} />
            <Route path="/profile/*" exact element={<UserProfile />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/product/:id" exact element={<Product />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
