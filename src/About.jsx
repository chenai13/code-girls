import React from "react";
import "./App.css";
import Hero from "./HomeFolder/Hero";
import { motion, AnimatePresence } from "framer-motion";
import magnifier from "./assets/3d-magnifier.png";
import computer from "./assets/3d-computer.png";
import stars from "./assets/3d-star.png";

function About() {
  return (
    <>
      <Hero
        titleBeforeIcon={
          <div>Why did I make this?</div>
        }
        subtitle={
          <div>
            This platform exists to support women and girls who are curious
            about tech, but don’t always know where to start.
          </div>
        }
      />

      <section className="-mt-48 min-w-70 pt-12 max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
        <div className="p-4 h-60 rounded-lg shadow-xl transition hover:scale-[1.01]">
          <img
            className="h-20"
            src={magnifier}
            alt="magnifer glass icon"
          />
          <h1 className="pt-6">The Problem</h1>
          <p className="text-sm text-gray-800">
            As of now, only 24% of computing roles are held by women. leading to
            bias in hiring and promotion practices.
          </p>
        </div>
        <div className="p-4 h-60 rounded-lg shadow-xl transition hover:scale-[1.01]">
          <img
            src={computer}
            alt="computer icon"
            className="h-20"
          />
          <h1 className="pt-6">What I offer</h1>
          <p className="text-sm text-gray-800">
            A dedicated directory for women to access resources such as
            networks, mentorship, non-profit programmes and more.
          </p>
        </div>
        <div className="p-4 h-60 rounded-lg shadow-xl transition hover:scale-[1.01]">
          <img
            src={stars}
            alt="star icon"
            className="h-20"
          />
          <h1 className="pt-6">My purpose</h1>
          <p className="text-sm text-gray-800">
            To contribute to the increase of women working in the technological
            industry, and bring awareness to these organisations that exist.
          </p>
        </div>
      </section>
       
    </>
  );
}

export default About;
