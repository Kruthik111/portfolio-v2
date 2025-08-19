import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/app";
import CursorFollower from "./components/CursorFollower";
import ChatWidget from "./components/ChatWidget";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load components
const About = React.lazy(() => import("./sections/About/app"));
const Experience = React.lazy(() => import("./sections/Experience/app"));
const Projects = React.lazy(() => import("./sections/Projects/app"));
const Contact = React.lazy(() => import("./sections/Contact/app"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-black">
        <Navbar />
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
      <CursorFollower />
      <ChatWidget />
    </>
  )

}

export default App;
