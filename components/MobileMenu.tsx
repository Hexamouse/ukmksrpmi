// components/MobileMenu.tsx
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { tentang, components, media } from './data/menuData';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  openSubmenu: string | null;
  toggleSubmenu: (menu: string) => void;
}

export default function MobileMenu({ isMenuOpen, toggleMenu, openSubmenu, toggleSubmenu }: MobileMenuProps) {
  return (
    <div
      className={`sm:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        <Link href="#home" onClick={toggleMenu} className="text-gray-800 text-lg font-medium">
          Home
        </Link>
        <div>
          <button
            onClick={() => toggleSubmenu('tentang')}
            className="flex items-center justify-between w-full text-gray-800 text-lg font-medium"
          >
            <span>Tentang</span>
            {openSubmenu === 'tentang' ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: openSubmenu === 'tentang' ? '500px' : '0px',
              opacity: openSubmenu === 'tentang' ? 1 : 0,
            }}
          >
            <ul className="pl-4 mt-2 space-y-2">
              {tentang.map((item) => (
                <li
                  key={item.title}
                  className="transform transition-transform duration-300 ease-in-out"
                  style={{
                    transform: openSubmenu === 'tentang' ? 'translateY(0)' : 'translateY(-10px)',
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-gray-600 text-base block hover:text-red-600 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <button
            onClick={() => toggleSubmenu('kegiatan')}
            className="flex items-center justify-between w-full text-gray-800 text-lg font-medium"
          >
            <span>Kegiatan</span>
            {openSubmenu === 'kegiatan' ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: openSubmenu === 'kegiatan' ? '500px' : '0px',
              opacity: openSubmenu === 'kegiatan' ? 1 : 0,
            }}
          >
            <ul className="pl-4 mt-2 space-y-2">
              {components.map((item) => (
                <li
                  key={item.title}
                  className="transform transition-transform duration-300 ease-in-out"
                  style={{
                    transform: openSubmenu === 'kegiatan' ? 'translateY(0)' : 'translateY(-10px)',
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-gray-600 text-base block hover:text-red-600 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <button
            onClick={() => toggleSubmenu('media')}
            className="flex items-center justify-between w-full text-gray-800 text-lg font-medium"
          >
            <span>Media</span>
            {openSubmenu === 'media' ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: openSubmenu === 'media' ? '500px' : '0px',
              opacity: openSubmenu === 'media' ? 1 : 0,
            }}
          >
            <ul className="pl-4 mt-2 space-y-2">
              {media.map((item) => (
                <li
                  key={item.title}
                  className="transform transition-transform duration-300 ease-in-out"
                  style={{
                    transform: openSubmenu === 'media' ? 'translateY(0)' : 'translateY(-10px)',
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-gray-600 text-base block hover:text-red-600 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href="#about" onClick={toggleMenu} className="text-gray-800 text-lg font-medium">
          About
        </Link>
        <div className="flex flex-col gap-3 pt-4">
          <Button
            asChild
            variant="outline"
            className="w-full text-gray-800 border-gray-800 hover:bg-gray-100"
          >
            <Link href="/login" onClick={toggleMenu}>Login</Link>
          </Button>
          <Button
            asChild
            className="w-full bg-red-600 text-white hover:bg-red-700"
          >
            <Link href="/join" onClick={toggleMenu}>Join</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}