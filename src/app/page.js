'use client';

import dynamic from "next/dynamic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { MapPin, Student, LinkSimple, DownloadSimple, Monitor, Cube, GameController, PenNib } from "phosphor-react";

export default function Home() {
  return (
    <div className="h-full w-full bg-Bg1">

      {/* header */}
      <div className="h-full w-full flex flex-row justify-center items-center px-16">
        <div className="h-full w-full flex flex-row justify-between items-center font-mono border-b-2 border-grey py-7">
          <div className="flex flex-row gap-2 text-2xl">
            <h1 className='text-Brand1 font-primary'>&lt;C/&gt;</h1>
            <h1>Hendrian Yudha Pratama</h1>
          </div>
          <div className="flex flex-row gap-4">
            <h1><a href="#">Home</a></h1>
            <h1><a href="#">Blog</a></h1>
          </div>
          <div className='flex flex-row gap-4'>
            <button className='flex flex-row gap-2 items-center justify-center'>
              <FontAwesomeIcon icon={faInstagram} className='text-Brand1 text-xl w-6' />
              <h1>Instagram</h1>
            </button>
            <button className='flex flex-row gap-2 items-center justify-center'>
              <FontAwesomeIcon icon={faInstagram} className='text-Brand1 text-xl w-6' />
              <h1>Instagram</h1>
            </button>
            <button className='flex flex-row gap-2 items-center justify-center'>
              <FontAwesomeIcon icon={faInstagram} className='text-Brand1 text-xl w-6' />
              <h1>Instagram</h1>
            </button>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className='h-full w-full mb-24 bg-Bg1 flex flex-col justify-center items-center px-16'>
        <h1 className='text-7xl text-Brand2 text-primary py-14'>Developer</h1>
        <div className='h-full w-full flex flex-row gap-16 justify-between items-center'>

          {/* left */}
          <div className='border-4 p-8 rounded-tl-[40%] rounded-br-[40%] shadow-[-8px_-7px_0px_0px_#98FAEC] '>
            <div className='flex flex-col gap-8 py-2'>
              <div className='flex flex-col justify-center items-center '>
                <img src='/profil.jpg' alt='profil' className='w-24 h-24 mb-2 rounded-full border-4 border-Brand1' />
                <h1 className='text-2xl font-semibold font-primary'>Yudha</h1>
                <h1 className='text-sm font-mono '>Full-Stack Dev</h1>
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
                  <h1>www.anunaunaunau.com</h1>
                </div>
              </div>

              <button
                className='bg-White rounded-3xl py-4 px-0 mx-6 flex flex-row gap-2 text-black items-center justify-center '
              >
                Download CV
                <DownloadSimple size={24} />
              </button>
            </div>
          </div>

          {/* right */}
          <div className=' flex flex-row gap-10 h-full w-full items-center'>
            <div className="flex flex-col gap-9 h-full w-full">
              <div className="flex flex-col gap-4 justify-between">
                <h1 className="text-Brand1 font-mono text-sm">&lt;h1&gt;</h1>
                <div className="flex flex-col ml-[20px] text-5xl tracking-wide font-primary gap-2">
                  <h1>Hey</h1>
                  <h1>I'm <span className="text-Brand1">Yudha</span>,</h1>
                  <h1>Full-Stack Developer <span className="text-sm text-Brand1 font-mono">&lt;/h1&gt;</span></h1>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-3">
                <h1 className="text-Brand1 text-sm font-mono">&lt;p&gt;</h1>
                <h1 className="ml-[20px] font-mono text-lg">I help business grow by crafting amazing web experiences. If you're Looking for a developer that likes to get stuff done,</h1>
                <h1 className=" font-mono text-sm text-Brand1">&lt;/p&gt;</h1>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <h1 className="text-3xl text-Brand1 font-mono tracking-wide">Let's Talk</h1>
                <button className="flex justify-center items-center rounded-full px-3 py-3 bg-Grey">
                  <FontAwesomeIcon icon={faEnvelope} className='text-Brand1 text-2xl w-6' />
                </button>
              </div>
            </div>

            <div className="bg-Bg2 p-8  flex flex-col rounded-[35%] gap-14 items-center justify-center">
              <div className="flex flex-row gap-3 font-mono items-center">
                <h1 className="text-6xl text-Brand1">4</h1>
                <h1 className="text-lg">Programing language</h1>
              </div>
              <div className="flex flex-row gap-3  font-mono items-center">
                <h1 className="text-6xl text-Brand1">2</h1>
                <h1 className="text-lg">Years Experience</h1>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* About */}
      <div className="h-full w-full bg-Bg2 flex flex-col justify-center items-center px-16 ">
        <div className="flex flex-col items-center justify-center gap-3 py-24 ">
          <img src="/asset/mouse.svg" alt="mouse"className="w-7" />
          <img src="/asset/Line.svg" alt="line" className="w-3"/>
        </div>

        <div className="w-full flex flex-row gap-24 p-14 items-center justify-between">
          <div className="flex flex-col gap-9">
            <div className="flex w-60 items-center justify-center p-4 bg-Bg1 border-4  border-Brand1 rounded-tl-[30%] rounded-br-[30%]">
              <h1 className="text-4xl tracking-wide ">About Me</h1>
            </div>

            <div className="h-full w-full flex flex-col gap-4 p-6 bg-Bg1 rounded-3xl">
              <h1 className="text-sm text-Brand1 font-mono ">&lt;p&gt;</h1>
              <p className="text-sm font-mono ml-[20px]"><span className="text-Brand1 text-xl">Hello!</span>My name is Sinan and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
              <h1 className="text-sm text-Brand1 font-mono ">&lt;/p&gt;</h1>
            </div>
          </div>
          <img src="/test.jpeg" alt="profil" className="rounded-3xl"/>
        </div>
      </div>

      {/* Skills */}
      <div className="h-full w-full bg-Bg1 flex flex-col justofy-center items-center px-16">
        <div className="flex flex-col gap-7 py-24">
          <div className="flex flex-col items-center justify-center gap-3  ">
            <img src="/asset/mouse.svg" alt="mouse"className="w-7" />
            <img src="/asset/Line.svg" alt="line" className="w-3"/>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="p-3 border-b-2 border-Brand1">
              <h1 className="text-Brand1 text-5xl font-primary tracking-wider">Skills</h1>
            </div>
            <h1 className="text-sm font-mono ">I am striving to never stop learning and improving</h1>
          </div>
        </div>

        <div className="flex flex-row gap-10 justify-center items-center">
          <button className="p-4 w-[200px] h-[100px] flex flex-col items-center justify-center gap-3 rounded-xl border-l-8 border-blue-500 bg-Brand2">
            <Monitor size={24} className="text-black"/>
            <h1 className="font-mono text-sm tracking-wider  text-black">Web developement</h1>
          </button>
          <button className="p-4 w-[200px] h-[100px] flex flex-col items-center justify-center gap-3 rounded-xl border-l-8 border-blue-500 bg-Brand2">
            <Cube size={24} className="text-black"/>
            <h1 className="font-mono text-sm tracking-wider  text-black">3D Design</h1>
          </button>
          <button className="p-4 w-[200px] h-[100px] flex flex-col items-center justify-center gap-3 rounded-xl border-l-8 border-blue-500 bg-Brand2">
            <GameController size={24} className="text-black"/>
            <h1 className="font-mono text-sm tracking-wider  text-black">Game developement</h1>
          </button>
          <button className="p-4 w-[200px] h-[100px] flex flex-col items-center justify-center gap-3 rounded-xl border-l-8 border-blue-500 bg-Brand2">
            <PenNib size={24} className="text-black"/>
            <h1 className="font-mono text-sm tracking-wider  text-black">UI/UX</h1>
          </button>
        </div>
      
      </div>
    </div>
  )
}
