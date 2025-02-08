import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Update import path
import "@/app/globals.css";

const certificates = [
  {
    title: "Juara 3 Game Development",
    description: "Fokus di bagian desain 3D untuk game nasional.",
    date: "2024",
    image: "/sertifikat/game-dev.png",
  },
  {
    title: "Cyber Scurity Seminar",
    description: "Mengikuti seminar nasional yang di selenggarakan oleh JH (Jadi Hackers)",
    date: "2024",
    image: "/sertifikat/JH.png",
  },
  {
    title: "UI/UX Seminar",
    description: "Mengikuti seminar nasional yang di selenggarakan oleh Himasi UAD",
    date: "2023",
    image: "/sertifikat/semnas-UI-UX.png",
  },
  // Tambahkan sertifikat lainnya di sini
];

const CertificateSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 3000, // Autoplay setiap 3 detik
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 1 },   // Mobile: 1 slide
        768: { slidesPerView: 2 },   // Tablet: 2 slide
        1024: { slidesPerView: 3 },  // Desktop: 3 slide
      }}
      modules={[Pagination, Navigation, Autoplay]}
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

export default CertificateSlider;
