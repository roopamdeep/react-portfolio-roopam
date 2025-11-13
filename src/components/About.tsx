import { motion } from "framer-motion";

const MotionDiv = motion.div as any;

export default function About() {
  return (
    <MotionDiv
      id="about"
      className="scroll-mt-32 mt-32 min-h-screen w-[97%] mx-auto flex flex-col items-center justify-center text-center bg-white rounded-[20px] py-16 px-6 md:px-20 shadow-md"
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        About Me
      </h2>

      <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
        I'm <span className="font-semibold text-pink-500">Roopamdeep Kaur</span>
        , a Full-Stack Developer based in Toronto, Canada. I hold a{" "}
        <span className="font-semibold">Master's in Software Engineering</span>{" "}
        and have over 3 years of experience building scalable, user-focused web
        applications using{" "}
        <span className="font-semibold">
          React, TypeScript, Node.js, and Azure.
        </span>
      </p>

      <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mt-4">
        I love combining clean design with efficient code — transforming ideas
        into seamless, functional, and beautiful digital experiences. My current
        focus is on building{" "}
        <span className="font-semibold text-pink-500">
          intuitive interfaces, AI-powered features,
        </span>{" "}
        and automation tools that make everyday workflows smarter and more
        meaningful.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {["React", "TypeScript", "Node.js", "Azure", "AWS", "Flask", "SQL"].map(
          (skill) => (
            <span
              key={skill}
              className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          )
        )}
      </div>

      <a
        href="\Roopamdeep_Kaur_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
      >
        View My Resume
      </a>
    </MotionDiv>
  );
}
