import { motion } from "framer-motion";

const MotionDiv = motion.div as any;

export default function Projects() {
  return (
    <MotionDiv
      id="projects"
      className="scroll-mt-32 mt-32 min-h-screen w-[97%] bg-pink-100 rounded-[20px] mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%]">

        <MotionDiv
          whileHover={{ scale: 1.05 }}
          className="bg-pink-100 rounded-2xl shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Vault</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              AI-powered personal finance platform with{" "}
              <span className="font-semibold">Plaid bank connectivity</span>, Python
              microservice for anomaly detection, budget forecasting, and OpenAI
              natural language spending insights.
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            
              href="https://github.com/roopamdeep/vault"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              GitHub →
            </a>
            
              href="https://vault-drab-eight.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              Live Demo →
            </a>
          </div>
        </MotionDiv>

        <MotionDiv
          whileHover={{ scale: 1.05 }}
          className="bg-pink-100 rounded-2xl shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">StackMatch</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Full-stack AI hiring platform matching developers to jobs based on{" "}
              <span className="font-semibold">tech stack alignment</span>. Features
              JWT auth, AI-powered resume scoring, AWS S3 storage, and real-time
              email notifications.
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            
              href="https://github.com/roopamdeep/stackmatch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              GitHub →
            </a>
            
              href="https://stackmatch-rose.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              Live Demo →
            </a>
          </div>
        </MotionDiv>

        <MotionDiv
          whileHover={{ scale: 1.05 }}
          className="bg-pink-100 rounded-2xl shadow-md p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">TenantTrack</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Multi-role property management platform where{" "}
              <span className="font-semibold">landlords manage properties</span> and
              tenants submit maintenance requests with AWS S3 lease uploads and
              email notifications.
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            
              href="https://github.com/roopamdeep/tenant-track"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              GitHub →
            </a>
            
              href="https://tenant-track.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium hover:underline"
            >
              Live Demo →
            </a>
          </div>
        </MotionDiv>

      </div>
    </MotionDiv>
  );
}