import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">TimeTower</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-black border-black text-lg hover:text-black hover:border-b-2 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black border-black text-lg hover:text-black hover:border-b-2 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/leaderboard"
              className="text-black border-black text-lg hover:text-black hover:border-b-2 transition duration-200"
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-black border-black text-lg hover:text-black hover:border-b-2 transition duration-200"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="mt-10 border-2 border-black text-black px-8 py-3 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 rounded"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1sd_YpkjvN2eSEJrZCrhmB0bIKUvmLwOV/view?usp=sharing",
                  "_blank",
                )
              } // Altere o caminho para o relatório do jogo
            >
              Download
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
