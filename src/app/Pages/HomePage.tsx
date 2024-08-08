import { NavbarDemo } from '@/Components/Navbar';

const HomePage: React.FC = () => {
  return (
    <main className=" min-h-screen flex flex-col items-center justify-center">
      <NavbarDemo />
      
      <div className="shadow-md rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-gray-700 mb-4">
          We are a team of dedicated professionals providing top-notch services to our clients. Our mission is to deliver high-quality products and services that exceed our customers' expectations.
        </p>
        <p className="text-gray-700 mb-4">
          Explore our services and products to see how we can help you achieve your goals.
        </p>
      </div>
    </main> 
  );
};

export default HomePage;
