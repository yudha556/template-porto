import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const certificates = [
  {
    title: "Last Course Project",
    description: "get top 3 in last project teknology web in university",
    date: "2025",
    image: "/project/DashboardAdmin.png",
    link: "https://administrator-orcin.vercel.app/",
  },
  {
    title: "Landing Page in Praktikum Teknologi web",
    description: "Building project page with HTML and Tailwindcss framework",
    date: "2024",
    image: "/project/landing.png",
    link: "https://yudha556.github.io/Landing-Page-praktikum/"
  },
  {
    title: "3D Blender",
    description: "Building 3D model with blender",
    date: "2025",
    image: "/project/3D-Blender.png",
    link: "./project/Blender.mp4",
  },
  {
    title: "First Create UI/UX my version",
    description: "Build UI/UX with Figma",
    date: "2024",
    image: "/project/LandingPage.png",
    link: "https://www.figma.com/design/NCUaGrdr2tKPQ8KfYtVJih/Landing-Page-Blue-Sky?node-id=0-1&t=KLxqJfHFcLsaxB9I-1"
  },
  // Tambahkan sertifikat lainnya di sini
];

const Project = () => {
  return (
    // Container pembungkus dengan w-full & min-h supaya gak collapse di mobile
    <div className="w-full mx-auto p-4 min-h-[300px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Default di mobile
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {certificates.map((certificate, index) => (
          <SwiperSlide key={index}>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="rounded-lg shadow-lg p-4 flex flex-col justify-center items-center mb-10 cursor-pointer hover:bg-black transition-all duration-300">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="max-w-full h-auto object-contain max-h-96  hover:rounded-lg transition-all duration-300"
                />
                <h3 className="text-lg font-semibold mt-4 text-center">
                  {certificate.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {certificate.description}
                </p>
                <span className="text-sm text-gray-500 text-center">
                  {certificate.date}
                </span>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;