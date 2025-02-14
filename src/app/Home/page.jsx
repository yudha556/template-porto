'use client';

import { useEffect, useState } from "react";
import '../globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { MapPin, Student, LinkSimple, DownloadSimple, PaperPlaneTilt } from "phosphor-react";
import LogoDisplay from '@/components/logoDisplay';
import { useRouter, usePathname } from "next/navigation";
import Sertifikat from '@/components/sertifikat';
import Projek from '@/components/projek';


export default function Home() {
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
        <div className="h-full w-full bg-Bg1 text-White">

            {/* header */}
            <div className="h-full w-full flex flex-row justify-center items-center px-4 md:px-16">
                <div className="h-full w-full flex flex-row justify-between items-center font-mono border-b-2 border-grey py-4 md:py-7">

                    {/* Logo dan Nama */}
                    <div className="flex flex-row md:gap-2 gap-1 text-sm md:text-xl">
                        {/* Logo tampil di semua ukuran */}
                        <h1 className="text-Brand1 font-primary">&lt;C/&gt;</h1>
                        <h1>Hendrian Yudha Pratama</h1>
                    </div>

                    {/* Navigation (Home, Blog) */}
                    <div className="flex flex-row gap-2 md:gap-4 text-sm md:text-lg justify-center items-center">
                        <button
                            className={`relative font-mono ${currentPath === '/Home' ? 'text-Brand1' : 'text-white'} 
          ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                            onClick={() => router.push('/Home')}
                        >
                            <h1>Home</h1>
                            <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-Brand1 transform transition-transform duration-300 
          ${currentPath === '/Home' ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </button>

                        {/* <button
                            className={`relative font-mono ${currentPath === '/Blog' ? 'text-Brand1' : 'text-white'} 
          ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                            onClick={() => router.push('/Blog')}
                        >
                            <h1>Blogs</h1>
                            <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-Brand1 transform transition-transform duration-300 
          ${currentPath === '/Blog' ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </button> */}
                    </div>

                    {/* Sosial Media */}
                    <div className="flex flex-row gap-4 text-lg md:text-xl">
                        {/* Hidden di mobile */}
                        <button
                            className="hidden md:flex flex-row gap-2 items-center justify-center hover:text-Brand1"
                            onClick={() => router.push('https://www.instagram.com/hendrian_yudhaa__/?hl=en')}
                        >
                            {/* Logo only di tablet */}
                            <FontAwesomeIcon icon={faInstagram} className="text-Brand1 text-xl w-6" />
                            {/* Teks disembunyikan di tablet */}
                            <h1 className="hidden lg:block">Instagram</h1>
                        </button>

                        <button
                            className="hidden md:flex flex-row gap-2 items-center justify-center hover:text-Brand1"
                            onClick={() => router.push('https://github.com/yudha556')}
                        >
                            <FontAwesomeIcon icon={faGithub} className="text-Brand1 text-xl w-6" />
                            <h1 className="hidden lg:block">Github</h1>
                        </button>

                        <button
                            className="hidden md:flex flex-row gap-2 items-center justify-center hover:text-Brand1"
                            onClick={() => router.push('https://www.linkedin.com/in/hendrian-yudha-pratama-021b2530b/')}
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="text-Brand1 text-xl w-6" />
                            <h1 className="hidden lg:block">Linkedin</h1>
                        </button>
                    </div>
                </div>
            </div>


            {/* Intro */}
            <div className='h-full w-full mb-24 bg-Bg1 flex flex-col justify-center items-center lg:px-16 py-16 lg:py-0 px-5'>
                <h1 className='text-7xl text-Brand2 text-primary py-14 hidden lg:flex'>Portofolio</h1>
                <div className='h-full w-full flex lg:flex-row flex-col gap-16 justify-between items-center'>

                    {/* left */}
                    <div className='border-4 p-8 rounded-tl-[40%] rounded-br-[40%] shadow-[-8px_-7px_0px_0px_#98FAEC] '>
                        <div className='flex flex-col gap-8 py-2'>
                            <div className='flex flex-col justify-center items-center '>
                                <img src='/profil.jpg' alt='profil' className='w-24 h-24 mb-2 rounded-full border-4 border-Brand1' />
                                <h1 className='text-2xl font-semibold font-primary'>Yudha</h1>
                                <h1 className='text-sm font-mono '>Front-end Dev</h1>
                            </div>

                            <div className='flex flex-col justify-center items-start text-xm font-mono font-extralight gap-3'>
                                <div className='flex flex-row gap-2 items-center justify-center'>
                                    <FontAwesomeIcon icon={faEnvelope} className='text-Brand1 text-xl w-6' />
                                    <h1>yudhapratama11005@gmail.com</h1>
                                </div>
                                <div className="flex flex-row gap-2 items-center justify-between">
                                    <MapPin size={24} className="text-Brand1" />
                                    <h1>Banjarnegara, Indonesia</h1>
                                </div>
                                <div className="flex flex-row gap-2 items-center justify-center">
                                    <Student size={24} className="text-Brand1" />
                                    <h1>Ahmad Dahlan University</h1>
                                </div>
                                <div className="flex flex-row gap-2 items-center justify-center">
                                    <LinkSimple size={24} className="text-Brand1 " />
                                    <h1>https://hendrian-yudha.vercel.app/</h1>
                                </div>
                            </div>

                            <button className='bg-White rounded-3xl py-4 px-0 mx-8  flex flex-row gap-2 text-black items-center justify-center -ml-0'>
                                <a href="/CV/hendrian_yudha_CV.pdf" download="hendrian_yudha_CV.pdf" className="flex flex-row gap-2 items-center justify-center">
                                    Download CV
                                    <DownloadSimple size={24} />
                                </a>
                            </button>
                        </div>
                    </div>

                    {/* right */}
                    <div className=' flex md:flex-row flex-col gap-10 h-full w-full items-center'>
                        <div className="flex flex-col gap-9 h-full w-full">
                            <div className="flex flex-col gap-4 justify-between">
                                <h1 className="text-Brand1 font-mono text-sm">&lt;h1&gt;</h1>
                                <div className="flex flex-col ml-[20px] md:text-5xl items-start text-2xl tracking-wide font-primary md:gap-2">
                                    <h1>Hey</h1>
                                    <h1>I'm <span className="text-Brand1">Yudha</span>,</h1>
                                    <div className="flex flex-col md:flex-row gap-2 md:items-center">
                                        <h1>Front-end Developer </h1>
                                        <h1 className="text-sm text-Brand1 font-mono -translate-x-5 md:translate-x-0">&lt;/h1&gt;</h1>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-col justify-between gap-3">
                                <h1 className="text-Brand1 text-sm font-mono">&lt;p&gt;</h1>
                                <h1 className="ml-[20px] font-mono md:text-lg text-sm">Hi I can help your business by making your website look more amazing. if you need a developer contact me.</h1>
                                <h1 className=" font-mono text-sm text-Brand1">&lt;/p&gt;</h1>
                            </div>

                            <div className="flex flex-row gap-4 items-center">
                                <h1 className="md:text-3xl text-2xl text-Brand1 font-mono tracking-wide">Let's Talk</h1>
                                <button className="flex justify-center items-center rounded-full px-3 py-3 bg-Grey">
                                    <FontAwesomeIcon icon={faEnvelope} className='text-Brand1 text-2xl w-6' />
                                </button>
                            </div>
                        </div>

                        <div className="bg-Bg2 p-8  flex flex-col rounded-[35%] gap-14  items-center justify-center">
                            <div className="flex flex-row gap-3 font-mono items-center">
                                <h1 className="text-6xl text-Brand1">2</h1>
                                <h1 className="text-lg">Programing language</h1>
                            </div>
                            <div className="flex flex-row gap-3  font-mono items-center">
                                <h1 className="text-6xl  text-Brand1">6</h1>
                                <h1 className="text-lg ">Month Experience</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* sertifikat */}
            <div className="h-full w-full bg-Bg2 flex flex-col  justify-center items-center px-16 ">
                <div className="flex flex-col gap-7 py-24">
                    <div className="flex flex-col items-center justify-center gap-3  ">
                        <img src="/asset/mouse.svg" alt="mouse" className="md:w-7 w-5" />
                        <img src="/asset/Line.svg" alt="line" className="md:w-3 w-2" />
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <div className="p-3 border-b-2 border-Brand1">
                            <h1 className="text-Brand1 md:text-5xl text-3xl font-primary tracking-wider">Sertificate</h1>
                        </div>
                        <h1 className="md:text-sm text-xs font-mono ">some of the certificates I obtained</h1>
                    </div>
                </div>

                <div className="container  md:px-32 -mt-10">
                    <Sertifikat />
                </div>
            </div>

            {/* Skills */}
            <div className="h-full w-full bg-Bg1 flex flex-col justify-center items-center md:px-16 px-5 mb-16">
                <div className="flex flex-col gap-7 py-24">
                    <div className="flex flex-col items-center justify-center gap-3  ">
                        <img src="/asset/mouse.svg" alt="mouse" className="md:w-7 w-5" />
                        <img src="/asset/Line.svg" alt="line" className="md:w-3 w-2" />
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <div className="p-3 border-b-2 border-Brand1">
                            <h1 className="text-Brand1 md:text-5xl text-3xl font-primary tracking-wider">Skill</h1>
                        </div>
                        <h1 className="md:text-sm text-xs font-mono ">I am striving to never stop learning and improving</h1>
                    </div>
                </div>

                <LogoDisplay />
            </div>

            {/* Projects */}
            <div className="h-full w-full bg-Bg2 flex flex-col justofy-center items-center px-16">
                <div className="flex flex-col gap-7 py-24">
                    <div className="flex flex-col items-center justify-center gap-3  ">
                        <img src="/asset/mouse.svg" alt="mouse" className="md:w-7 w-5" />
                        <img src="/asset/Line.svg" alt="line" className="md:w-3 w-2" />
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <div className="p-3 border-b-2 border-Brand1">
                            <h1 className="text-Brand1 md:text-5xl text-3xl font-primary tracking-wider">Project</h1>
                        </div>
                        <h1 className="md:text-sm text-xs font-mono ">my best project</h1>
                    </div>
                </div>


                <div className="container  lg:px-32 -mt-10">
                    <Projek />
                </div>

            </div>

            {/* Blogs */}
            {/* <div className="h-full w-full bg-Bg1 flex flex-col justify-center items-center px-4 md:px-16 mb-16"> */}
                {/* Header Section */}
                {/* <div className="flex flex-col gap-7 py-24"> */}
                    {/* <div className="flex flex-col items-center justify-center gap-3  ">
                        <img src="/asset/mouse.svg" alt="mouse" className="md:w-7 w-5" />
                        <img src="/asset/Line.svg" alt="line" className="md:w-3 w-2" />
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <div className="p-3 border-b-2 border-Brand1">
                            <h1 className="text-Brand1 md:text-5xl text-3xl font-primary tracking-wider">Blogs</h1>
                        </div>
                        <h1 className="md:text-sm text-xs font-mono ">some of my activities are on the blog page</h1>
                    </div> */}
                {/* </div> */}


                {/* Blog Card Section */}
                {/* <div className="flex flex-col justify-center items-center px-4 md:px-16 -mt-4 md:-mt-10 gap-8"> */}
                    {/* <div className="flex flex-col lg:flex-row w-full border-t-2 border-b-2 gap-8 md:gap-20 py-10 px-4 md:px-16 items-center justify-between"> */}
                        {/* Image */}
                        {/* <img
                            src="/Blog/Demis.JPG"
                            alt="profile"
                            className="w-full md:w-auto max-w-full h-auto object-contain max-h-52"
                        /> */}
                        {/* Content */}
                        {/* <div className="flex flex-col gap-5 w-full items-start"> */}
                            {/* <h1 className="text-Brand1 font-primary text-xl md:text-2xl font-normal">
                                Demisioner HMPS-SI UAD Periode 2024
                            </h1>
                            <p className="text-sm tracking-wide font-light font-primary">
                                Ini adalah info terkait dengan demisioner 2024 saya sudah melakukan banyak
                                hal di organisasi mahasiswa ini dengan lebih baik
                            </p>
                            <button
                                className="text-Brand1 border-b-2 border-White hover:border-Brand1"
                                onClick={() => router.push("/Blog/Demisioner")}
                            >
                                Read More &gt;&gt;
                            </button> */}
                            {/* <div className="flex flex-wrap gap-4 text-sm items-center tracking-wide">
                                <label className="py-1 px-3 rounded-2xl bg-Grey">Activity</label>
                                <h1 className="font-light">
                                    <span className="font-bold mx-1">Text</span>Yudha
                                </h1>
                                <h1 className="font-light">
                                    <span className="font-bold mx-1">Date</span>2023-08-12
                                </h1>
                                <h1 className="font-light">
                                    <span className="font-bold mx-1">Read</span>1 Min
                                </h1>
                            </div> */}
                        {/* </div> */}
                    {/* </div> */}

                    {/* <button
                        className="text-black hover:text-White p-3 rounded-3xl px-6 bg-Brand1"
                        onClick={() => router.push("/Blog")}
                    >
                        View More
                    </button> */}
                {/* </div> */}
            {/* </div> */}


            {/* Contact */}
            <div className="h-full w-full bg-Bg1 flex flex-col justify-center items-center px-4 md:px-16 mb-16">
                {/* Header Section */}
                <div className="flex flex-col gap-7 py-12 md:py-24">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <img src="/asset/mouse.svg" alt="mouse" className="w-7" />
                        <img src="/asset/Line.svg" alt="line" className="w-3" />
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="p-3 border-b-2 border-Brand1">
                            <h1 className="text-Brand1 text-3xl md:text-5xl lg:text-6xl font-primary tracking-wider">
                                Contact
                            </h1>
                        </div>
                        <h1 className="text-sm md:text-base font-mono text-center">
                            I'm currently available for freelance work
                        </h1>
                    </div>
                </div>

                {/* Form Section */}
                <div className="flex flex-col gap-4 justify-center items-center w-full">
                    <h1 className="border-2 p-4 px-5 rounded-tl-3xl rounded-br-3xl text-xl md:text-2xl lg:text-3xl text-Brand1 border-Brand1 -tracking-tighter">
                        Send Me A Message
                    </h1>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            window.location.href = `mailto:yudhapratama11005@gmail.com?subject=Message from ${formData.get(
                                "name"
                            )}&body=From: ${formData.get(
                                "name"
                            )}%0D%0AEmail: ${formData.get("email")}%0D%0A%0D%0AMessage:%0D%0A${formData.get("message")}`;
                        }}
                        className="flex flex-col items-center justify-center gap-8 md:gap-16 w-full p-4 md:p-20"
                    >
                        {/* Name & Email */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full justify-between">
                            <div className="flex flex-col items-start gap-2 w-full">
                                <p className="text-sm md:text-base text-Brand1">Name</p>
                                <input
                                    name="name"
                                    required
                                    placeholder="Enter Your Name"
                                    className="border-b-2 bg-transparent placeholder:text-sm md:placeholder:text-base w-full outline-none"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-2 w-full">
                                <p className="text-sm md:text-base text-Brand1">Email</p>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Enter Your Email"
                                    className="border-b-2 bg-transparent placeholder:text-sm md:placeholder:text-base w-full outline-none appearance-none"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col items-start gap-2 w-full">
                            <p className="text-sm md:text-base text-Brand1">Message</p>
                            <input
                                name="message"
                                required
                                placeholder="Enter Your Needs"
                                className="border-b-2 bg-transparent placeholder:text-sm md:placeholder:text-base w-full outline-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="flex flex-row gap-2 items-center justify-center bg-Brand1 text-black hover:text-white px-8 py-3 rounded-3xl text-sm md:text-base"
                        >
                            <p>Send a Message</p>
                            <PaperPlaneTilt size={24} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
