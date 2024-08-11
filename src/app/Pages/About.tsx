
import {NavbarDemo} from '@/Components/Navbar';

const About = () => {
  return (
    <div>
      <NavbarDemo />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-xl">This is the about page of the website.</p>
      </main>
    </div>
  );
};

export default About;
