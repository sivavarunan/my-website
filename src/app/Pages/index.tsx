import Head from 'next/head';
import Navbar from '@/Components/Navbar';

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="bg-black flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white">Welcome to My Website!</h1>
        <p className="mt-4 text-xl text-white">This is a simple website made with Next.js, Tailwind CSS, and TypeScript.</p>
      </main>
    </div>
  );
};

export default Home;
