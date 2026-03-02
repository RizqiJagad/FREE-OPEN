import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ui/ScrollToTop";
import Home from "./pages/Home";
import Contributors from "./pages/Contributors";
import Contribute from "./pages/Contribute";
import NotFound from "./pages/NotFound";

/**
 * App defines the route structure for the site.
 * All pages render inside the Layout wrapper which provides
 * the shared Navbar and Footer.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contributors" element={<Contributors />} />
          <Route path="contribute" element={<Contribute />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
