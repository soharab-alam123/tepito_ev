import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import TestRideModal from "./components/TestRideModal.jsx";
import VideoModal from "./components/VideoModal.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("TEPITO PRO");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenTestRide = (modelName = "TEPITO PRO") => {
    setSelectedModel(modelName);
    setIsTestRideOpen(true);
  };

  const handleCloseTestRide = () => {
    setIsTestRideOpen(false);
  };

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <ScrollToTop />
      <Header onOpenTestRide={() => handleOpenTestRide("TEPITO PRO")} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenTestRide={handleOpenTestRide}
                onOpenVideo={handleOpenVideo}
              />
            }
          />
          <Route
            path="/about"
            element={<About onOpenTestRide={handleOpenTestRide} />}
          />
          <Route
            path="/services"
            element={<Services onOpenTestRide={handleOpenTestRide} />}
          />
          <Route
            path="/contact"
            element={<Contact onOpenTestRide={handleOpenTestRide} />}
          />
        </Routes>
      </main>
      <Footer />

      {/* Global Modals */}
      <TestRideModal
        isOpen={isTestRideOpen}
        onClose={handleCloseTestRide}
        preselectedModel={selectedModel}
      />
      <VideoModal isOpen={isVideoOpen} onClose={handleCloseVideo} />
    </>
  );
}
