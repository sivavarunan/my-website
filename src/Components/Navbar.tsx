import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
