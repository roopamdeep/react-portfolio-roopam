import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwkanby", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset(); // ✅ Clears all inputs
        setTimeout(() => setStatus("idle"), 4000); // hides message after 4s
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-32 mt-32 min-h-screen w-[97%] bg-white rounded-[20px] mx-auto flex flex-col items-center justify-center py-10 shadow-md"
    >
      {/* ---------- Title ---------- */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>

      {/* ---------- Form ---------- */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-[90%] max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>

        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-lg transition-all duration-300"
        >
          Send Message
        </button>

        {/* ---------- Feedback messages ---------- */}
        {status === "success" && (
          <p className="text-green-600 text-sm mt-2 transition-opacity duration-300">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm mt-2 transition-opacity duration-300">
            ❌ Oops! Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
