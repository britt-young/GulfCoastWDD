import Navbar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import ScrollToTop from "../Components/ScrollToTop";
import { Helmet } from "@dr.pogodin/react-helmet";

const RootLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 ease-in-out bg-alternate overflow-x-hidden">
      <ScrollToTop />

      {/* Global SEO Head */}
      <Helmet>
        {/* Basic meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Default title (overridden by child pages) */}
        <title>Gulf Coast Web Designs | Custom Website Design & Development</title>
        <meta
          name="description"
          content="Gulf Coast Web Designs | Custom Website Design & Developmen"
        />

        {/* Favicon / Canonical defaults */}
        <link rel="canonical" href="https://www.gulfcoastwdd.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured data (LocalBusiness) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Gulf Coast Web Design & Development",
            "url": "https://www.gulfcoastwdd.com",
            "telephone": "+1-123-4567",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main St",
              "addressLocality": "Tallahassee",
              "addressRegion": "FL",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.facebook.com/GulfCoastWDD",
              "https://www.linkedin.com/company/GulfCoastWDD",
              "https://twitter.com/GulfCoastWDD"
            ]
          })}
        </script>
      </Helmet>

      {/* Navbar + Dark Mode */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
      />

      {/* Main content area */}
      <main className="flex-1 pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
