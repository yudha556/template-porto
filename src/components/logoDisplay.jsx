// components/CategoryDisplay.js
import { Monitor, Cube, GameController, PenNib } from 'phosphor-react';
import { useState } from 'react';

const CategoryDisplay = () => {
  const [category, setCategory] = useState('webdev'); // State untuk menyimpan kategori aktif

  const logos = {
    webdev: [
      { src: '/skill/html.svg', alt: 'HTML' },
      { src: '/skill/css.svg', alt: 'CSS' },
      { src: '/skill/javascript.svg', alt: 'JavaScript' },
      { src: '/skill/nextjs.svg', alt: 'Next.js' },
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
      { src: '/skill/googledocs.svg', alt: 'Google Docs' },
      { src: '/skill/googlesheet.svg', alt: 'Google Sheets' },
      { src: '/skill/googleform.svg', alt: 'Google Forms' },
      { src: '/skill/googleslides.svg', alt: 'Google Slides' },
      { src: '/skill/googlesites.svg', alt: 'Google Sites' },
    ],
  };

  return (
    <div>
      {/* Bagian tombol */}
      <div className="flex flex-row gap-10 justify-center items-center mb-8">
        <button onClick={() => setCategory('webdev')} className="p-4 w-[200px] h-[100px] flex flex-col items-center justify-center gap-3 rounded-xl border-l-8 border-blue-500 bg-Brand2">
          <Monitor size={24} className="text-black" />
          <h1 className="font-mono text-sm tracking-wider text-black">Web Development</h1>
        </button>
        <button onClick={() => setCategory('design3d')} className="p-4 w-[200px] h-[100px] flex flex-col items-center justify-center gap-3 rounded-xl border-l-8 border-blue-500 bg-Brand2">
          <Cube size={24} className="text-black" />
          <h1 className="font-mono text-sm tracking-wider text-black">3D Design</h1>
        </button>
        <button onClick={() => setCategory('game')} className="p-4 w-[200px] h-[100px] flex flex-col items-center justify-center gap-3 rounded-xl border-l-8 border-blue-500 bg-Brand2">
          <GameController size={24} className="text-black" />
          <h1 className="font-mono text-sm tracking-wider text-black">Game Development</h1>
        </button>
        <button onClick={() => setCategory('uiux')} className="p-4 w-[200px] h-[100px] flex flex-col items-center justify-center gap-3 rounded-xl border-l-8 border-blue-500 bg-Brand2">
          <PenNib size={24} className="text-black" />
          <h1 className="font-mono text-sm tracking-wider text-black">UI/UX</h1>
        </button>
      </div>

      {/* Bagian logo */}
      <div className="flex justify-center items-center gap-10 mt-16">
        {logos[category]?.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-2">
            <img src={item.src} alt={item.alt} className="w-20 h-20" />
            <p className="font-mono text-lg text-white text-center mt-2">{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDisplay;
