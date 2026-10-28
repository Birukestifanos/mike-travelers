import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Destinations } from "./pages/Destinations";
import { DestinationDetails } from "./pages/DestinationDetails";
import { Stories } from "./pages/Stories";
import { StoryDetails } from "./pages/StoryDetails";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="destinations" element={<Destinations />} />
              <Route path="destinations/:id" element={<DestinationDetails />} />
              <Route path="stories" element={<Stories />} />
              <Route path="stories/:id" element={<StoryDetails />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </LanguageProvider>);

}