"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center ">
                <div className="relative w-48 h-20">
                    <Image 
                        src="/Logo blanco.png" 
                        alt="Shekinah Logo" 
                        layout="fill" 
                        objectFit="contain" 
                    />
                </div>
                <div className="flex space-x-8 pr-18">
                    <Link href="/" className={`px-8 ${pathname === '/' ? 'border-b-2 border-white' : ''} hover:text-gray-300 transition duration-300`}>Home</Link>
                    <Link href="/about" className={`px-8 ${pathname === '/about' ? 'border-b-2 border-white' : ''} hover:text-gray-300 transition duration-300`}>About</Link>
                    <Link href="/contact" className={`px-8 ${pathname === '/contact' ? 'border-b-2 border-white' : ''} hover:text-gray-300 transition duration-300`}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};