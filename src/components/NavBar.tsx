

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-transparent text-white z-50">
      <h1 className="text-2xl font-bold tracking-wide">Roopam.</h1>

      <ul className="flex space-x-8 text-lg">
        <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
          Home
        </li>
        <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
          About
        </li>
        <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
          Projects
        </li>
        <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
}
