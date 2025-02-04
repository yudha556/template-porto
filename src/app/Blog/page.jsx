'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
export default function blog() {
    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const currentPath = usePathname();

    const handlePageChange = (page) => {
        setIsTransitioning(true);
        setTimeout(() => {
          router.push(page);
        }, 300); 
      };

    return (
        <div className="h-full w-full bg-Bg1">
            <div className="h-full w-full flex flex-row justify-center items-center px-16">
                <div className="h-full w-full flex flex-row justify-between items-center font-mono border-b-2 border-grey py-7">
                    <div className="flex flex-row gap-2 text-2xl">
                        <h1 className='text-Brand1 font-primary'>&lt;C/&gt;</h1>
                        <h1>Hendrian Yudha Pratama</h1>
                    </div>
                    <div className="flex flex-row gap-4 text-xl">
                        <button
                            className={`relative text-lg font-mono ${currentPath === '/Home' ? 'text-Brand1' : 'text-white'} 
          ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                            onClick={() => router.push('/Home')}
                        >
                            <h1>Home</h1>
                            <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-Brand1 transform transition-transform duration-300 
          ${currentPath === '/Home' ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </button>

                        {/* Tombol Blog */}
                        <button
                            className={`relative text-lg font-mono ${currentPath === '/Blog' ? 'text-Brand1' : 'text-white'} 
         ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                            onClick={() => router.push('/Blog')}
                        >
                            <h1>Blogs</h1>
                            <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-Brand1 transform transition-transform duration-300 
          ${currentPath === '/Blog' ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </button>
                    </div>
                    <div className='flex flex-row gap-4 text-xl'>
                        <button className='flex flex-row gap-2 items-center justify-center'>
                            <FontAwesomeIcon icon={faInstagram} className='text-Brand1 text-xl w-6' />
                            <h1>Instagram</h1>
                        </button>
                        <button className='flex flex-row gap-2 items-center justify-center'>
                            <FontAwesomeIcon icon={faGithub} className='text-Brand1 text-xl w-6' />
                            <h1>Github</h1>
                        </button>
                        <button className='flex flex-row gap-2 items-center justify-center'>
                            <FontAwesomeIcon icon={faLinkedin} className='text-Brand1 text-xl w-6' />
                            <h1>Linkedin</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}