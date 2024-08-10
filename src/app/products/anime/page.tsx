import React from 'react';
import { Card } from '@/Components/card';
import { SparklesCore } from '@/Components/sparkles';

const AnimePage: React.FC = () => {
  return (
    <div className="relative w-full h-auto bg-black">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full"
        particleColor="#FFFFFF"
      />
    <div className="flex justify-center items-center p-4">
      
      <div className="max-w-screen-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">Anime</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <Card
            title="Attack On Titan"
            description="."
            imageUrl="https://i.pinimg.com/236x/8c/9b/30/8c9b30762edbdc84706999221c07a209.jpg"
            hoverImageUrl="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHQybXJvdHRiNjZtMTIyNTI5bHVkcm1nbHVsem93ejloanc1bW1nNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ku1FyPdoBXVg4/giphy.webp"
          />
          <Card
            title="Monster"
            description="."
            imageUrl="https://i.pinimg.com/564x/eb/b8/c6/ebb8c6b7d3150cfd6e8e5d7e95779f31.jpg"
            hoverImageUrl="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm93MHozc3ByMWNua2E5MGx5Y2NhbzhtcTRtNDdhd2hueWRjcHZmcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fs6OGJ4Eb3ajC/giphy.webp"
          />
          <Card
            title="Jujitsu Kaisen"
            description="."
            imageUrl="https://i.pinimg.com/originals/c5/1e/d5/c51ed53972f630d7cce14296f3d758d2.jpg"
            hoverImageUrl="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG5rcjR2d3F2eWZkd3kxeXJvdDV4bTcyMzNteHg2cHduNDhzc3AzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tghDqN6iD0YeTEYMlm/giphy.webp"
          />
          <Card
            title="Demon Slayer"
            description="."
            imageUrl="https://i.pinimg.com/564x/a6/5e/3f/a65e3f767a6098b3a3ec27d5e6613ab2.jpg"
            hoverImageUrl="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW5mZzYxcHA3YTBnN3lzOTh3cHMyYnhiaXo5dzZ1aml0emo5Y3pmbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dyjrpqaUVqCELGuQVr/giphy.webp"
          />
          <Card
            title="Death Note"
            description="."
            imageUrl="https://i.pinimg.com/564x/5e/ff/d8/5effd854ededd699e348154d5df22a55.jpg"
            hoverImageUrl="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY29qcXNueHQyMGpwaWtmMDFscnJ6ZXJ1NWM1czlnZHE0NHAzZ3l2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CFWFSmOyHclS8/giphy.webp"
          />
          <Card
            title="Code Geass"
            description="."
            imageUrl="https://i.pinimg.com/564x/46/6e/4c/466e4c7f5ec0ebb91c377294143613a9.jpg"
            hoverImageUrl="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGI1ajlqbml0YnRwZ3c1cTN5azhwZDNpeWh5NmhzZzNvbmF2bTlsaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AhOW61Pxt49kQ/giphy.webp"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AnimePage;
