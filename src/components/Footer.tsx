export const Footer = () => {
  return (
    <footer className="w-full bg-black py-6">
      <div className="container mx-auto text-center text-white">
        <ul className="flex justify-center space-x-8 mb-4">
          <li>
            <a href="https://www.instagram.com" className="hover:text-gray-300">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="hover:text-gray-300">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" className="hover:text-gray-300">
              Facebook
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
