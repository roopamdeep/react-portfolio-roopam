import { motion } from "framer-motion";

const MotionDiv = motion.div as any;

export default function Projects() {
  return (
    <MotionDiv
      id="projects"
      className="scroll-mt-32 mt-32 min-h-screen w-[97%] bg-pink-100 rounded-[20px] mx-auto flex flex-col items-center justify-center text-center shadow-md"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%]">
        {/* ---------- Project 1: GitHub Issue Tracker ---------- */}
        <MotionDiv
          whileHover={{ scale: 1.05 }}
          className="bg-pink-100 rounded-2xl shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              GitHub Issue Tracker
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A lightweight issue tracker built with{" "}
              <span className="font-semibold">React + TypeScript</span>. It
              allows users to create, edit, assign, and filter issues in
              real-time. Demonstrates reusable components, form validation, and
              API integration with a clean GitHub-inspired UI.
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/roopamdeep/github-issue-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              GitHub →
            </a>
            <a href="#" className="text-pink-600 font-medium hover:underline">
              Live Demo →
            </a>
          </div>
        </MotionDiv>

        {/* ---------- Project 2: GameHub ---------- */}
        <MotionDiv
          whileHover={{ scale: 1.05 }}
          className="bg-pink-100 rounded-2xl shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              GameHub
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A dynamic gaming discovery platform built with{" "}
              <span className="font-semibold">React + TypeScript</span>.
              Features modern UI design, responsive layout, and real-time API
              integration to browse and filter games by genre, rating, and
              platform.
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/roopamdeep/gamehub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              GitHub →
            </a>
            <a href="#" className="text-pink-600 font-medium hover:underline">
              Live Demo →
            </a>
          </div>
        </MotionDiv>
        {/* ---------- Project 3: Vidly Movie App ---------- */}
        <MotionDiv
          whileHover={{ scale: 1.05 }}
          className="bg-pink-100 rounded-2xl shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Vidly Movie App
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A full-stack movie rental application built with{" "}
              <span className="font-semibold">
                Node.js, Express, and MongoDB
              </span>
              (backend) and a React front-end. Implements{" "}
              <span className="font-semibold">
                JWT authentication, role-based access control, and unit testing
                with Jest.
              </span>
              This project demonstrates advanced backend architecture, error
              handling with Winston, and secure deployment workflow.
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/roopamdeep/vidly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              GitHub →
            </a>
            <a href="#" className="text-pink-600 font-medium hover:underline">
              Live Demo →
            </a>
          </div>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
