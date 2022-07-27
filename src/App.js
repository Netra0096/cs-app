import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Inquiry from "./Pages/Inquiry";
import Products from "./Pages/Products";
import Technology from "./Pages/Technology";
import Error from "./Pages/Error";
import NavPage from "./Pages/NavPage";
import WebDev from "./Pages/WebDev";
import MobileApp from "./Pages/MobileApp";
import DesktopApp from "./Pages/DesktopApp";
import EcomSol from "./Pages/EcomSol";
import WebsiteDev from "./Pages/WebsiteDev";
import SNM from "./Pages/SNM";
import SEO from "./Pages/SEO";
function App() {
  return (
    <Router>
      <NavPage />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/*" element={<Products />} >
          <Route path="web" element={<WebDev />} />
          <Route path="mobile" element={<MobileApp />} />
          <Route path="desktop" element={<DesktopApp />} />
          <Route path="ecom" element={<EcomSol />} />
          <Route path="webite" element={<WebsiteDev />} />
          <Route path="snm" element={<SNM />} />
          <Route path="seo" element={<SEO />} />
        </Route>
        <Route path="inquiry" element={<Inquiry />} />
        <Route path="contact" element={<Contact />} />
        <Route path="technology" element={<Technology />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
