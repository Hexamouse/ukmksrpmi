"use client";

import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function VisiMisi() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: 'ease-in-out',
    });

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
      <Navbar toggleMenu={toggleMenu} />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        openSubmenu={openSubmenu}
        toggleSubmenu={toggleSubmenu}
      />

      <section className="flex-grow bg-gradient-to-r from-blue-50 to-pink-50 pt-[80px] md:pt-[100px]">
        <div
          className="relative w-full min-h-[300px] md:min-h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/visi-misi/ksr-vision-mission.jpg')",
          }}
          data-aos="fade-up"
        >
          {/* Overlay for Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                <span className="text-red-600">KSR</span> VISI & MISI
              </h1>
              <p className="text-gray-200 mt-2 text-sm">Our vision and mission at KSR PMI UPI YPTK Padang</p>
            </div>
            <Breadcrumb>
              <BreadcrumbList className="flex justify-center">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="text-red-600 hover:text-red-700">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-200" />
                <BreadcrumbItem>
                  <span className="text-gray-200">Profil</span>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-200" />
                <BreadcrumbItem>
                  <span className="text-gray-200">Visi & Misi</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-7xl mb-20 mt-12">
          <div className="flex flex-col justify-center space-y-8" data-aos="fade-up" data-aos-delay="200">
            <div>
              <h2 className="text-sm font-semibold mb-2 text-gray-500 text-center">Our Vision & Mission</h2>
              <h3 className="text-2xl font-bold mb-6 text-center uppercase">Visi Kami</h3>
              <div className="space-y-4 text-center text-gray-600">
                <p className="leading-relaxed">
                  Menjadi unit kegiatan mahasiswa terdepan di Universitas Putra Indonesia YPTK
                  Padang yang berkontribusi aktif dalam aksi kemanusiaan, membangun karakter
                  kepemimpinan, dan menginspirasi mahasiswa untuk peduli terhadap masyarakat.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center uppercase">Misi Kami</h3>
              <div className="space-y-4 text-center text-gray-600">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Menyelenggarakan kegiatan kemanusiaan seperti donor darah, pelatihan
                    pertolongan pertama, dan bakti sosial untuk masyarakat.
                  </li>
                  <li>
                    Membangun jiwa kepemimpinan dan solidaritas di kalangan mahasiswa melalui
                    pelatihan dan kegiatan organisasi.
                  </li>
                  <li>
                    Mengedukasi masyarakat tentang pentingnya kesiapsiagaan bencana dan
                    pertolongan pertama.
                  </li>
                  <li>
                    Menjalin kerja sama dengan berbagai pihak untuk mendukung misi kemanusiaan
                    dan pengabdian masyarakat.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
