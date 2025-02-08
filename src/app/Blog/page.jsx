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

            {/* header */}
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

            {/* Content */}
            <div className="h-full w-full bg-Bg1 flex flex-col justify-center items-center px-16 mb-16">
                <div className="flex flex-col gap-7 py-24">

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="p-3 border-b-2 border-Brand1">
                            <h1 className="text-Brand1 text-5xl font-primary tracking-wider">Blogs</h1>
                        </div>
                        <h1 className="text-sm font-mono ">some of the activities I've done are in these blogs</h1>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center px-16 -mt-10 gap-8">
                    <div className="flex flex-row w-full border-t-2  gap-20 py-10 px-16 items-center justify-between" >
                        <img src="/profil.jpg" alt="profile" className="w-44 h-44" />
                        <div className="flex flex-col gap-5 w-full items-start justify-between">
                            <h1 className="text-Brand1 font-primary text-2xl font-normal">Demisioner HMPS-SI UAD Periode 2024</h1>
                            <p className="text-sm tracking-wide font-light font-primary ">Ini adalah info terkait dengan demisioner 2024 saya sudah melakukan banyak hal di organisasi mahasiswa ini dengan lebih baik</p>
                            <button
                                className="text-Brand1 border-b-2 border-White hover:border-Brand1"
                                onClick={() => router.push('/Blog/Demisioner')}
                            >Read More &gt;&gt;</button>
                            <div className="flex flex-row gap-4 text-sm items-center tracking-wide">
                                <label className=" py-1 px-7 rounded-2xl bg-Grey">Activity</label>
                                <h1 className="font-light"><span className="font-bold mx-2">Text</span>Yudha</h1>
                                <h1 className="font-light"><span className="font-bold mx-2">Date</span>2023-08-12</h1>
                                <h1 className="font-light"><span className="font-bold mx-2">Read</span>1 Min</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>


        // Content

    )
}