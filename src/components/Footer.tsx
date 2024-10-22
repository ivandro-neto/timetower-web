export const Footer = () => {
  return (
    <footer className="w-full bg-black py-6">
      <div className="container mx-auto text-center text-white">
        <ul className="flex justify-center space-x-8 mb-4">
          <li>
            <a href="https://github.com/ivandro-neto/TimeTowerGame" className="hover:text-gray-300">
              GitHub
            </a>
          </li>
         
        </ul>
        <p className="text-sm">
          © {new Date().getFullYear()} TimeTower. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
