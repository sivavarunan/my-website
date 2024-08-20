"use client";

import React, { useRef, useState } from "react";
import { Card } from "@/Components/card";
import App from "@/Components/ui/App";
import { Vortex } from "@/Components/vortex";

const AnimePage: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const AnimeList = [
    {
      id: 1,
      img: "https://avatarfiles.alphacoders.com/359/thumb-1920-359785.jpg",
      hoverImageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHQybXJvdHRiNjZtMTIyNTI5bHVkcm1nbHVsem93ejloanc1bW1nNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ku1FyPdoBXVg4/giphy.webp",
      bgUrl: "https://images2.alphacoders.com/122/thumb-1920-1221585.jpg",
      title: "Attack On Titan",
      description: " I never seen such a masterclass of story telling anywhere else, peak fiction right here, the story is amazing in so many ways..",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/eb/b8/c6/ebb8c6b7d3150cfd6e8e5d7e95779f31.jpg",
      hoverImageUrl: "https://media1.tenor.com/m/xc7iTR5z4LQAAAAC/johan-liebert-monster.gif",
      bgUrl: "https://images4.alphacoders.com/125/thumb-1920-1250440.jpg",
      title: "Monster",
      description: "."
    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/c5/1e/d5/c51ed53972f630d7cce14296f3d758d2.jpg",
      hoverImageUrl: "https://media1.tenor.com/m/iUaVjxQcq40AAAAC/yuji-itadori-suku.gif",
      bgUrl: "https://images4.alphacoders.com/134/thumb-1920-1349705.jpeg",
      title: "Jujitsu Kaisen",
      description: "written by: Gege Akutami"
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/a6/5e/3f/a65e3f767a6098b3a3ec27d5e6613ab2.jpg",
      hoverImageUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW5mZzYxcHA3YTBnN3lzOTh3cHMyYnhiaXo5dzZ1aml0emo5Y3pmbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dyjrpqaUVqCELGuQVr/giphy.webp",
      bgUrl: "https://images.alphacoders.com/136/thumb-1920-1363137.png",
      title: "Demon Slayer",
      description: "."
    },
    {
      id: 5,
      img: "https://i.pinimg.com/564x/7b/a9/dd/7ba9ddd9793858d04980721a8191f602.jpg",
      hoverImageUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY29qcXNueHQyMGpwaWtmMDFscnJ6ZXJ1NWM1czlnZHE0NHAzZ3l2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CFWFSmOyHclS8/giphy.webp",
      bgUrl: "https://images2.alphacoders.com/153/thumb-1920-153252.jpg",
      title: "Death Note",
      description: "."
    },
    {
      id: 6,
      img: "https://i.pinimg.com/564x/46/6e/4c/466e4c7f5ec0ebb91c377294143613a9.jpg",
      hoverImageUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGI1ajlqbml0YnRwZ3c1cTN5azhwZDNpeWh5NmhzZzNvbmF2bTlsaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AhOW61Pxt49kQ/giphy.webp",
      bgUrl: "https://images4.alphacoders.com/634/thumb-1920-634146.jpg",
      title: "Code Geass",
      description: "."
    },
    {
      id: 7,
      img: "https://i.pinimg.com/474x/01/29/b4/0129b4ef01bd0f343fc3f5dddc4767c6.jpg",
      hoverImageUrl: "https://media1.tenor.com/m/lxjWJK0Ny3AAAAAd/thofinn.gif",
      bgUrl: "https://www.hdwallpapers.in/download/askeladd_thorfinn_hd_vinland_saga-1920x1080.jpg",
      title: "Vinland Saga",
      description: "."
    },
    {
      id: 8,
      img: "https://i.pinimg.com/564x/e4/ae/c5/e4aec5405948deb11aac1373e81dd72e.jpg",
      hoverImageUrl: "https://media.tenor.com/yD-dTKxhMkkAAAAM/fullmetal-alchemist-edward-elric.gif",
      bgUrl: "https://e1.pxfuel.com/desktop-wallpaper/373/911/desktop-wallpaper-fullmetal-alchemist-brotherhood-fullmetal-alchemist.jpg",
      title: "Full Metal Alchamist Brotherhood",
      description: "."
    },
    {
      id: 9,
      img: "https://i.pinimg.com/564x/30/c7/8f/30c78f9995dd64e7c12c572d9b59cbf9.jpg",
      hoverImageUrl: "https://media1.tenor.com/m/6wgIswjUj-YAAAAC/chainsaw-man-csm.gif",
      bgUrl: "https://4kwallpapers.com/images/wallpapers/chainsaw-man-denji-3440x1440-8958.jpg",
      title: "Chainsaw Man",
      description: "."
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <App>
      <div className="relative h-screen overflow-hidden">
        <Vortex
          backgroundColor="transparent"
          className=""
          baseHue={300}
          baseRadius={0.5}
          baseSpeed={-1}
          rangeY={400}
          particleCount={500}
        >


          <div className="flex flex-col justify-center items-center p-4">
            <div className="max-w-screen-lg w-full">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl text-center font-bold font-karla bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-red-500 to-black drop-shadow-2xl shadow-red-500/30 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-16">
                  ANIME
                </h1>
              </div>

              <div className="relative w-full">
                <div
                  ref={sliderRef}
                  className="flex gap-4 overflow-x-auto no-scrollbar py-2"
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  onTouchMove={handleTouchMove}
                >

                  {AnimeList.map((item) => (
                    <div
                      key={item.id}
                      className="flex-none w-60 bg-white rounded-lg shadow-md overflow-hidden"

                    >
                      <Card
                        title={item.title}
                        description={item.description}
                        imageUrl={item.img}
                        hoverImageUrl={item.hoverImageUrl}
                        bgUrl={item.bgUrl}
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (sliderRef.current) {
                      sliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
                    }
                  }}
                  className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
                >
                  &#9664;
                </button>
                <button
                  onClick={() => {
                    if (sliderRef.current) {
                      sliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
                    }
                  }}
                  className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
                >
                  &#9654;
                </button>
              </div>
            </div>
          </div>
        </Vortex>
      </div>
    </App>
  );
};

export default AnimePage;
