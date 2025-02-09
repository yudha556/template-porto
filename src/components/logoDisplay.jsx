// components/CategoryDisplay.js
import { Monitor, Cube, PenNib, WindowsLogo, GoogleLogo, Code, ExcludeSquare, AlignBottom } from 'phosphor-react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const CategoryDisplay = () => {
  const [category, setCategory] = useState('webdev');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = ['webdev', 'design3d', 'game', 'uiux', 'google', 'adobe'];

  const logos = {
    webdev: [
      { src: '/skill/html.svg', alt: 'HTML' },
      { src: '/skill/css.svg', alt: 'CSS' },
      { src: '/skill/javascript.svg', alt: 'JavaScript' },
      { src: '/skill/nextjs.svg', alt: 'Next.js' },
      { src: '/skill/Github.svg', alt: 'Github' },
      { src: '/skill/python.svg', alt: 'Python' },
    ],
    uiux: [
      { src: '/skill/figma.svg', alt: 'Figma' },
    ],
    game: [
      { src: '/skill/word.svg', alt: 'Word' },
      { src: '/skill/excel.svg', alt: 'Excel' },
      { src: '/skill/powerpoint.svg', alt: 'PowerPoint' },
    ],
    design3d: [
      { src: '/skill/blender-3d.svg', alt: 'Blender' },
    ],
    adobe: [
      { src: '/skill/adobe-illustrator.svg', alt: 'Adobe Illustrator' },
      { src: '/skill/adobe-premiere-pro.svg', alt: 'Adobe Premiere Pro' },
    ],
    google: [
      { src: '/skill/googledocs.svg', alt: 'Google Docs' },
      { src: '/skill/googlesheet.svg', alt: 'Google Sheets' },
      { src: '/skill/googleslides.svg', alt: 'Google Slides' },
      { src: '/skill/googleform.svg', alt: 'Google Forms' },
      { src: '/skill/googlesites.svg', alt: 'Google Sites' },
      { src: '/skill/googlefont.svg', alt: 'Google Fonts' },
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      const nextIndex = (currentIndex + 1) % categories.length;
      setCurrentIndex(nextIndex);
      setCategory(categories[nextIndex]);
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleCategoryClick = (cat, index) => {
    setIsAnimating(true);
    setCurrentIndex(index);
    setCategory(cat);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const categoryIcons = {
    webdev: <Code size={24} className="text-black" />,
    design3d: <Cube size={24} className="text-black" />,
    game: <WindowsLogo size={24} className="text-black" />,
    uiux: <AlignBottom size={24} className="text-black" />,
    adobe: <PenNib size={24} className="text-black" />,
    google: <GoogleLogo size={24} className="text-black" />,
  };

  const categoryNames = {
    webdev: 'Web Development',
    design3d: '3D Design',
    game: 'Microsoft Office',
    uiux: 'UI/UX',
    adobe: 'Adobe',
    google: 'Google',
  };

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      {/* Container Kategori - Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-7 w-full mb-8">
        {categories.map((cat, index) => (
          <div
            key={cat}
            onClick={() => handleCategoryClick(cat, index)}
            className={`p-4 flex flex-col items-center justify-center gap-3 rounded-xl border-l-8 border-blue-500 bg-Brand2 transition-transform duration-300 ${category === cat ? 'scale-110' : 'scale-100'} cursor-pointer hover:bg-Brand2/80`}
          >
            {categoryIcons[cat]}
            <h1 className="font-mono text-xs sm:text-sm lg:text-base tracking-wider text-black">
              {categoryNames[cat]}
            </h1>
          </div>
        ))}
      </div>

      {/* Container Logo - Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row justify-center gap-8 mt-8">
        {logos[category]?.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center gap-2 transition-all duration-500 transform"
            style={{
              animation: isAnimating ? 'fadeInOut 0.5s ease-in-out' : 'none'
            }}
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-16 sm:w-24 lg:w-24 h-16 sm:h-24 lg:h-24 mx-auto hover:scale-110 transition-transform duration-300" 
            />
            <p className="font-mono text-xs sm:text-sm lg:text-lg text-white text-center mt-2">
              {item.alt}
            </p>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default CategoryDisplay;
