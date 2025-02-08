import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Update import path

const certificates = [
  {
    title: "Proyek akhir matakuliah",
    description: "Dapat top 3 pada proyek akhir matakuliah",
    date: "2025",
    image: "/project/DashboardAdmin.png",
  },
  {
    title: "3D Blender",
    description: "Proyek membuat cinematic menggunakan software 3D engine Blender",
    date: "2025",
    image: "/project/3D-Blender.png",
  },
  {
    title: "First Create UI/UX my version",
    description: "Proyek membuat UI/UX versi saya",
    date: "2024",
    image: "/project/LandingPage.png",
  },
  // Tambahkan sertifikat lainnya di sini
];

const Project = () => {
  return (
    <Swiper
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    autoplay={{
      delay: 3000, // Autoplay setiap 3 detik (3000ms)
      disableOnInteraction: false, // Tetap autoplay meskipun user menginteraksi
    }}
    modules={[Pagination, Navigation, Autoplay]} // Tambahkan Autoplay ke modules
    className="mySwiper"
    >
      {certificates.map((certificate, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-lg shadow-lg p-4 flex flex-col justify-center items-center mb-10">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-w-full h-auto object-contain max-h-96"
            />
            <h3 className="text-lg font-semibold mt-4">{certificate.title}</h3>
            <p className="text-gray-600">{certificate.description}</p>
            <span className="text-sm text-gray-500">{certificate.date}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Project;
