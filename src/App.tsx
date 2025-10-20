import { BrowserRouter as Router, Routes, Route } from "react-router";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import AllProducts from "./pages/products/AllProducts";

import { SignUp } from "./pages/AuthPages/SignUp";
import SignUpPage from "./pages/AuthPages/SiginIn";
import MessagePage from "./pages/Messages/MessagePage";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/products" element={<AllProducts />} />
            <Route index path="/message" element={<MessagePage />} />
          </Route>

          <Route path="/signin" element={<SignUpPage />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
