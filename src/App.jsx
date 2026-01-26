import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import PrivacyTerms from "./pages/PrivacyTerms";
import Error from "./Components/Error";
import Services from "./pages/Services";
import SEO from "./pages/SEO";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // parent path
      <Route path="/" element={<RootLayout />}>
        {/* child routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<PrivacyTerms />} />
        <Route path="services" element={<Services />} />
        {/* child path for services */}
        <Route index element={<Services />} />
        <Route path="services/features" element={<ComingSoon />} />
        <Route path="services/optimization" element={<ComingSoon />} />
        <Route path="services/responsiveness" element={<ComingSoon />} />
        <Route path="services/security" element={<ComingSoon />} />
        <Route path="services/seo" element={<ComingSoon />} />
        <Route path="services/shopify" element={<ComingSoon />} />
        {/* Can add nested (additional children) routes too */}
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
