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
        className="min-h-screen w-[97%] bg-pink-300 flex justify-center items-center rounded-[20px] relative overflow-hidden mx-auto shadow-md mb-20"
      >
        <h2 className="absolute top-6 left-10 text-white text-3xl font-[Pacifico] tracking-wide">
          Roopam
        </h2>

        <div className="relative bg-white w-11/12 md:w-[90%] lg:w-[96%] min-h-[600px] rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between px-10 md:px-20 overflow-hidden">
          {/* -------- Left: Text -------- */}
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-10 w-full md:w-1/2 text-center md:text-left py-20 space-y-6"
          >
            <h1 className="text-5xl font-extrabold text-gray-900">Roopamdeep Kaur</h1>
            <p className="text-lg text-gray-600">
              Full-Stack Developer | React • TypeScript • Node • Azure
            </p>

            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a href="https://linkedin.com/in/roopamdeep" target="_blank"><FaLinkedin size={26} className="hover:text-pink-500 transition-colors"/></a>
              <a href="https://github.com/roopamdeep" target="_blank"><FaGithub size={26} className="hover:text-pink-500 transition-colors"/></a>
              <a href="mailto:roopamdeep.concordia@gmail.com"><FaEnvelope size={26} className="hover:text-pink-500 transition-colors"/></a>
            </div>
          </MotionDiv>

          {/* -------- Right: Photo -------- */}
          <MotionDiv
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="relative w-full md:w-1/2 flex justify-center md:justify-end items-center"
          >
            <div className="absolute right-0 h-full w-[150%] bg-pink-100 rounded-l-[50%]" />
            <img
              src="/profile.jpeg"
              alt="Roopamdeep Kaur"
              className="relative w-64 h-64 md:w-[360px] md:h-[360px] object-cover rounded-full shadow-xl border-[6px] border-white md:mr-10"
            />
          </MotionDiv>
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
