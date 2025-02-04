function displayLogo(logoarray) {
    const logoContainer = document.getElementById('logo')
    logoContainer.innerHTML = '';
    logoarray.forEach(function(item) {
      const bungkus = document.createElement('div');
      bungkus.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'gap-2');
  
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.classList.add('w-20', 'h-20');
  
      const text = document.createElement('p');
      text.textContent = item.alt;
      text.classList.add('font-mono', 'text-lg', 'text-White', 'text-center', 'mt-2')
  
      bungkus.appendChild(img);
      bungkus.appendChild(text);
  
      logoContainer.appendChild(bungkus);
    });
    logoContainer.style.display = 'flex';
    // swiperLogos.update();
  };
  
  document.getElementById('webBtn').addEventListener('click', function() {
    const webdevLogo = [
      { src: '/skill/html.svg', alt: 'HTML' },
      { src: '/skill/css.svg', alt: 'CSS' },
      { src: '/skill/javascript.svg', alt: 'JavaScript' },
      { src: '/skill/react.svg', alt: 'React' },
      { src: '/skill/nextjs.svg', alt: 'Next.js' },
    ];
    displayLogo(webdevLogo);
  });
  
  document.getElementById('UIUXBtn').addEventListener('click', function() {
    const uiuxLogo = [
      { src: '/skill/figma.svg', alt: 'Figma' },
    ];
    displayLogo(uiuxLogo);
  });
  
  document.getElementById('gameBtn').addEventListener('click', function() {
    const microsoftLogo = [
      { src: '/skill/word.svg', alt: 'Word' },
      { src: '/skill/excel.svg', alt: 'Excel' },
      { src: '/skill/powerpoint.svg', alt: 'PowerPoint' },
    ];
    displayLogo(microsoftLogo);
  });
  
  document.getElementById('3DBtn').addEventListener('click', function() {
    const googleLogo = [
      { src: '/skill/googledocs.svg', alt: 'Google Docs' },
      { src: '/skill/googlesheet.svg', alt: 'Google Sheets' },
      { src: '/skill/googleform.svg', alt: 'Google Forms' },
      { src: '/skill/googleslides.svg', alt: 'Google Slides' },
      { src: '/skill/googlesites.svg', alt: 'Google Sites' },
    ];
    displayLogo(googleLogo);
  });
  
  // Menampilkan logo untuk Web Developer saat pertama kali halaman dimuat
  document.addEventListener('DOMContentLoaded', function() {
    const webdevLogo = [
      { src: '/skill/html.svg', alt: 'HTML' },
      { src: '/skill/css.svg', alt: 'CSS' },
      { src: '/skill/javascript.svg', alt: 'JavaScript' },
      { src: '/skill/react.svg', alt: 'React' },
      { src: '/skill/nextjs.svg', alt: 'Next.js' },
    ];
    displayLogo(webdevLogo);
  });