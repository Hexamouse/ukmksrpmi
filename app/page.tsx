"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import * as React from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Data untuk menu
const components = [
  { title: "Donor Darah", href: "#donor-darah", description: "Kegiatan rutin untuk mengumpulkan darah bagi yang membutuhkan." },
  { title: "Pertolongan Pertama", href: "#pertolongan-pertama", description: "Pelatihan dan simulasi untuk situasi darurat." },
  { title: "Penanggulangan Bencana", href: "#penanggulangan-bencana", description: "Persiapan dan respons terhadap bencana alam." },
  { title: "Kampanye Sosial", href: "#kampanye-sosial", description: "Meningkatkan kesadaran masyarakat tentang isu kemanusiaan." },
];

const media = [
  { title: "Gallery", href: "#gallery", description: "Gallery Kegiatan KSR PMI" },
  { title: "Video", href: "#video", description: "Video Kegiatan KSR PMI" },
];

const tentang = [
  { title: "Sejarah", href: "#sejarah", description: "Sejarah KSR PMI" },
  { title: "Visi & Misi", href: "#visi-misi", description: "Visi dan Misi KSR PMI" },
  { title: "Pengurus", href: "#pengurus", description: "Pengurus KSR PMI" },
  { title: "Program Kerja", href: "#program-kerja", description: "Program Kerja KSR PMI" },
];

// Komponen untuk menampilkan waktu
function Clock() {
  const [timeInfo, setTimeInfo] = React.useState<{
    date: string;
    wibTime: string;
    utcTime: string;
  } | null>(null);
  const [isTimeVisible, setIsTimeVisible] = React.useState(false);

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const date = now.toLocaleString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Jakarta',
      }).toUpperCase();

      const wibTime = now.toLocaleString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta',
      }).replace(/\./g, ' : ');

      const utcTime = now.toLocaleString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC',
      }).replace(/\./g, ' : ');

      setTimeInfo({ date, wibTime, utcTime });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleTimeVisibility = () => {
    setIsTimeVisible(!isTimeVisible);
  };

  return (
    <div className="w-full text-xs sm:text-sm">
      <div className="sm:hidden flex flex-col items-center gap-2">
        <div className="text-gray-800 text-center">
          {timeInfo ? timeInfo.date : "Memuat tanggal..."}
        </div>
        <button
          onClick={toggleTimeVisibility}
          className="flex items-center gap-1 text-gray-600 focus:outline-none"
        >
          {isTimeVisible ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        {isTimeVisible && (
          <div className="text-gray-600 text-center">
            STANDAR WAKTU INDONESIA{" "}
            {timeInfo ? (
              <>
                <span className="text-green-600">{timeInfo.wibTime} WIB</span>
                {" / "}
                <span className="text-green-600">{timeInfo.utcTime} UTC</span>
              </>
            ) : (
              "... WIB / ... UTC"
            )}
          </div>
        )}
      </div>

      <div className="hidden sm:flex flex-row justify-between items-center gap-0">
        <div className="text-gray-600 text-left">
          STANDAR WAKTU INDONESIA{" "}
          {timeInfo ? (
            <>
              <span className="text-green-600">{timeInfo.wibTime} WIB</span>
              {" / "}
              <span className="text-green-600">{timeInfo.utcTime} UTC</span>
            </>
          ) : (
            "... WIB / ... UTC"
          )}
        </div>
        <div className="text-gray-800 text-right">
          {timeInfo ? timeInfo.date : "Memuat tanggal..."}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  // Inisialisasi AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: false, // Animasi akan dipicu setiap kali elemen masuk/keluar dari viewport
      offset: 100, // Elemen akan mulai animasi 100px sebelum masuk ke viewport
      easing: 'ease-in-out', // Efek easing untuk transisi yang lebih mulus
    });

    // Refresh AOS setiap kali scroll untuk memastikan animasi berjalan dengan baik
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="mb-2">
            <Clock />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="/">
                <Image
                  src="/assets/etc/logo/logo.png"
                  alt="KSR PMI Logo"
                  width={150}
                  height={225}
                  className="w-24 sm:w-40 lg:w-48 h-auto"
                />
              </a>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="h-8 sm:h-12 w-[2px] bg-gray-300 hidden sm:block"></div>
                <div className="text-gray-800 hidden sm:block">
                  <p className="font-semibold text-sm sm:text-base">KSR PMI Unit</p>
                  <p className="text-xs sm:text-sm">Universitas Putra Indonesia YPTK Padang</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="sm:hidden">
                <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
            <div className="hidden sm:block">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-row gap-2">
                  <NavigationMenuItem>
                    <Link href="#home" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Tentang</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[500px] p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tentang.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a href={item.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600">
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-500">{item.description}</p>
                              </a>
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
                              <a href={item.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600">
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-500">{item.description}</p>
                              </a>
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
                              <a href={item.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600">
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-500">{item.description}</p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#about" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="hidden sm:flex gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="text-gray-800 border-gray-800 hover:bg-gray-100"
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  <Link href="/join">Join</Link>
                </Button>
              </div>
          </div>
        </div>
      </nav>

      {/* Menu Navigasi untuk layar kecil (mobile) */}
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

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-red-600 to-red-400 text-white py-16 sm:py-24 md:py-32 text-center mt-24 sm:mt-28 md:mt-32">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/assets/etc/logo/logo.png"
            alt="KSR PMI Logo"
            width={300}
            height={300}
            className="mx-auto mb-4 sm:mb-6 h-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 drop-shadow-md uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Selamat Datang di KSR PMI Unit
            <p className="text-2xl mt-4 uppercase sm:text-3xl md:text-4xl lg:text-5xl sm:mb-4">
              Universitas Putra Indonesia YPTK Padang
            </p>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Bersama untuk Kemanusiaan
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 transition-all"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">Tentang KSR PMI</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div data-aos="fade-left">
              <Image
                src="/assets/etc/logo/logo.png"
                alt="KSR PMI Activity"
                width={300}
                height={225}
                className="w-full max-w-[300px] h-auto rounded-lg shadow-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-12 sm:py-16 bg-gray-100">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-10"
            data-aos="fade-up"
          >
            Aktivitas Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card
              className="hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-red-600">Donor Darah Sukarela</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm sm:text-base">
                  Bantu kami menyelamatkan nyawa melalui donor darah rutin setiap bulan.
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-red-600">Pelatihan Pertolongan Pertama</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm sm:text-base">
                  Ikuti pelatihan untuk meningkatkan keterampilan dalam situasi darurat.
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-red-600">Penanggulangan Bencana</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm sm:text-base">
                  Persiapan dan respons cepat untuk membantu korban bencana alam.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-white">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8"
            data-aos="fade-up"
          >
            Hubungi Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-aos="fade-up" data-aos-delay="100">
            <div>
              <p className="text-gray-700 mb-2 text-sm sm:text-base">
                <strong>Email:</strong> ksrpmiunitupiyptk@gmail.com
              </p>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                <strong>Telepon:</strong> +62 82170217017
              </p>
              <Button variant="outline" className="w-full">Kirim Pesan</Button>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Ikuti Kami</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="text-red-600 hover:text-red-800 text-sm sm:text-base">Facebook</a>
                <a href="#" className="text-red-600 hover:text-red-800 text-sm sm:text-base">Instagram</a>
                <a href="#" className="text-red-600 hover:text-red-800 text-sm sm:text-base">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#23282D] text-white py-8">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"  data-aos="fade-up">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">KSR PMI Unit UPI YPTK</h3>
              <p className="text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Tautan Cepat</h3>
              <ul className="text-xs sm:text-sm space-y-2">
                <li><Link href="#home" className="hover:underline">Home</Link></li>
                <li><Link href="#about" className="hover:underline">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4">Kontak</h3>
              <p className="text-xs sm:text-sm">Email: ksrpmiunitupiyptk@gmail.com</p>
              <p className="text-xs sm:text-sm">Telepon: +62 82170217017</p>
              <p className="text-xs sm:text-sm">Telepon: +62 82217604876</p>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm">
            <p>© 2025 KSR PMI. All rights reserved.</p>
            <p className="text-xs">Powered by Dzikri Tech</p>
          </div>
        </div>
      </footer>
    </div>
  );
}