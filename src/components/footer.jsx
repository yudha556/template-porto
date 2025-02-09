"use client";

import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter, usePathname } from "next/navigation"
export default function footer() {
    const router = useRouter();
    const currentPath = usePathname();
    return (
        <div className="flex flex-row p-3 justify-between items-center px-24 border-t-2 border-Grey">
            <div className="text-xs font-thin tracking-wide">
                <h1>Hendrian Yudha Pratama</h1>
            </div>
            <div className="flex gap-6">
                <button className="flex items-center justify-center bg-Brand2 rounded-full p-2 text-black hover:text-white animation-300 transition-all"
                onClick={() => router.push('https://www.instagram.com/hendrian_yudhaa__/?hl=en')}
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </button>
                <button className="flex items-center justify-center bg-Brand2 rounded-full p-2 text-black hover:text-white animation-300 transition-all"
                onClick={() => router.push('https://github.com/yudha556')}
                >
                    <FontAwesomeIcon icon={faGithub} />
                </button>
                <button className="flex items-center justify-center bg-Brand2 rounded-full p-2 text-black hover:text-white animation-300 transition-all"
                onClick={() => router.push('https://www.linkedin.com/in/hendrian-yudha-pratama-021b2530b/')}
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </button>
            </div>
            <div className="text-xs font-thin tracking-wide">
                <h1>Slicing Design By JohhanLeon</h1>
            </div>
        </div>
    )
}