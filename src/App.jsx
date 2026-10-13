import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import PageTransition from "./components/PageTransition.jsx";
import VideoModal from "./components/VideoModal.jsx";
import SpecsModal from "./components/SpecsModal.jsx";
import LegalModal from "./components/LegalModal.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Specs Modal State
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [specsScooter, setSpecsScooter] = useState(null);

  // Legal Modal State (Privacy Policy / Terms)
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState("privacy");

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  const handleOpenSpecs = (scooter) => {
    setSpecsScooter(scooter);
    setIsSpecsOpen(true);
  };

  const handleCloseSpecs = () => {
    setIsSpecsOpen(false);
  };

  const handleOpenLegal = (tab = "privacy") => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  const handleCloseLegal = () => {
    setIsLegalOpen(false);
  };

  return (
    <>
      <ScrollProgressBar />
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home
                    onOpenVideo={handleOpenVideo}
                    onOpenSpecs={handleOpenSpecs}
                  />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Global Modals & Floating Tools */}
      <VideoModal isOpen={isVideoOpen} onClose={handleCloseVideo} />
      <SpecsModal
        isOpen={isSpecsOpen}
        onClose={handleCloseSpecs}
        scooter={specsScooter}
      />
      <LegalModal
        isOpen={isLegalOpen}
        onClose={handleCloseLegal}
        activeTab={legalTab}
      />
      <WhatsAppButton />
    </>
  );
}
