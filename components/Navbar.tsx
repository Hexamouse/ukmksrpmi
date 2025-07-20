"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Info } from "lucide-react";
import Clock from "./Clock";
import { tentang, components, media } from "./data/menuData";

interface NavbarProps {
  toggleMenu: () => void;
}

export default function Navbar({ toggleMenu }: NavbarProps) {
  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="mb-2">
          <Clock />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/">
              <Image
                src="/assets/etc/logo/logo.png"
                alt="KSR PMI Logo"
                width={150}
                height={225}
                className="w-24 sm:w-40 lg:w-48 h-auto"
              />
            </Link>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="h-8 sm:h-12 w-[2px] bg-gray-300 hidden sm:block"></div>
              <div className="text-gray-800 hidden sm:block">
                <p className="font-semibold text-sm sm:text-base">
                  KSR PMI Unit
                </p>
                <p className="text-xs sm:text-sm">
                  Universitas Putra Indonesia YPTK Padang
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="hidden sm:block">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row gap-2">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Profil</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[500px] p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tentang.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600"
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Kegiatan</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[500px] p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {components.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600"
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Media</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[500px] p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {media.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600"
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              className="text-gray-800 border-gray-800 hover:bg-gray-100"
            >
              <Link href="/login">Login</Link>
            </Button>
            <div className="relative flex items-center gap-1">
              <Button
                asChild
                className="bg-red-600 text-white hover:bg-red-700"
              >
                <Link href="/join">REKRUTMEN</Link>
              </Button>
            </div>
            <div className="relative group">
              <Link href="../Developers">
                <Info className="w-5 h-5 text-gray-600 cursor-pointer hover:text-red-600 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
