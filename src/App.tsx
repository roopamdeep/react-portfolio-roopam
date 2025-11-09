import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "./components/NavBar";

const MotionDiv = motion.div as any;
export default function App() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-white via-pink-50 to-rose-100">
        <MotionDiv
          className="absolute w-72 h-72 bg-rose-300/30 rounded-full blur-3xl"
          animate={{ x: [0, 80, -80, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        ></MotionDiv>
        <div className="flex flex-col items-center text-center space-y-3">
          <MotionDiv
            className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-500/40 shadow-lg shadow-blue-500/20 mb-4 animate-pulse"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/src/assets/profile.jpeg"
              alt="Roopamdeep Kaur"
              className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </MotionDiv>

          <MotionDiv
            className="text-5xl md:text-6xl font-extrabold mb-2 z-10 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Roopamdeep Kaur
          </MotionDiv>
          <MotionDiv
            className="text-lg md:text-xl text-gray-600 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Full-Stack Developer | React • Node • Azure
          </MotionDiv>
          <MotionDiv
            className="flex space-x-6 text-3xl text-gray-600 mt-4 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <a
              href="https://github.com/roopamdeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-black transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/roopamdeep/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a href="mailto:roopamdeep.concordia@gmail.com">
              <FaEnvelope className="hover:text-red-500 transition-colors duration-300" />
            </a>
          </MotionDiv>
        </div>
      </div>
    </>
  );
}
