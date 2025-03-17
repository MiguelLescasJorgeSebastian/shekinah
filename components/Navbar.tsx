"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-2xl">Shekinah</div>
                <div className="flex space-x-8 pr-18">
                    <Link href="/" className={`px-8 ${pathname === '/' ? 'border-b-2 border-white' : ''} hover:text-gray-300 transition duration-300`}>Home</Link>
                    <Link href="/about" className={`px-8 ${pathname === '/about' ? 'border-b-2 border-white' : ''} hover:text-gray-300 transition duration-300`}>About</Link>
                    <Link href="/contact" className={`px-8 ${pathname === '/contact' ? 'border-b-2 border-white' : ''} hover:text-gray-300 transition duration-300`}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};