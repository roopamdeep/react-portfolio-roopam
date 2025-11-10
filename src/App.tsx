import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const MotionDiv = motion.div as any;

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* ---------- HOME SECTION ---------- */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen w-[97%] rounded-[20px] mx-auto mb-20 overflow-hidden shadow-md text-center"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/profile.jpeg')" }}
        ></div>

        {/* Soft pink overlay */}
        <div className="absolute inset-0 bg-pink-300/40"></div>

        {/* Brand name top-left */}
        <h2 className="absolute top-1 sm:top-8 left-2 sm:left-6 text-white text-lg sm:text-3xl font-[Pacifico] tracking-[0.03em] z-[5] drop-shadow-lg">
          Roopam
        </h2>

        {/* Text & social icons */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center justify-center px-6 sm:px-10 py-10"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-white drop-shadow-lg leading-tight">
            Roopamdeep <span className="text-pink-100">Kaur</span>
          </h1>

          <p className="text-base sm:text-xl mt-4 font-medium text-white/90 max-w-sm sm:max-w-lg leading-relaxed">
            Full-Stack Developer&nbsp;|&nbsp;React • TypeScript • Node • Azure
          </p>

          <div className="flex justify-center gap-8 mt-8">
            <a
              href="https://linkedin.com/in/roopamdeep"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={26}
                className="hover:text-pink-200 transition-colors duration-300"
              />
            </a>
            <a
              href="https://github.com/roopamdeep"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={26}
                className="hover:text-pink-200 transition-colors duration-300"
              />
            </a>
            <a href="mailto:roopamdeep.concordia@gmail.com">
              <FaEnvelope
                size={26}
                className="hover:text-pink-200 transition-colors duration-300"
              />
            </a>
          </div>
        </MotionDiv>

        {/* Curved bottom divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M-0.84,79.31 C150.00,150.00 349.63,-49.98 500.84,49.99 L500.00,150.00 L0.00,150.00 Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section id="about" className="pt-20 pb-20">
        <About />
      </section>

      {/* ---------- PROJECTS SECTION ---------- */}
      <section id="projects" className="pt-20 pb-20">
        <Projects />
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <section id="contact" className="pt-20 pb-40">
        <Contact />
      </section>
    </div>
  );
}
