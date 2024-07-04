import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProdInfo from "./pages/ProdInfo";
import CartPage from "./pages/CartPage";
import Purchases from "./pages/Purchases";
import NavBar from "./components/shared/NavBar";
import "./App.css";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProdInfo />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/purchases" element={<Purchases />} />
        </Route>
        <Route path="*" element={<h2>This route does not exist</h2>} />
      </Routes>
    </div>
  );
}

export default App;
