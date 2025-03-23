// app/sejarah/page.tsx (or pages/sejarah.tsx if using Pages Router)
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

export default function Sejarah() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  // Inisialisasi AOS
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

      {/* Sejarah Section */}
      <section className="flex-grow bg-gradient-to-r from-blue-50 to-pink-50 pt-[80px] md:pt-[100px]">
        {/* Header with Background Image */}
        <div
          className="relative w-full min-h-[300px] md:min-h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/history/ksr-history.jpg')",
          }}
          data-aos="fade-up"
        >
          {/* Overlay for Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            {/* Title - Centered */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                <span className="text-red-600">KSR</span> SEJARAH
              </h1>
              <p className="text-gray-200 mt-2 text-sm">The journey of KSR PMI UPI YPTK Padang</p>
            </div>

            {/* Breadcrumb - Centered */}
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
                  <span className="text-gray-200">Sejarah</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-7xl mb-20 mt-12">
          <div className="flex flex-col justify-center space-y-8" data-aos="fade-up" data-aos-delay="200">
            <div>
              <h2 className="text-sm font-semibold mb-2 text-gray-500 text-center">Our History</h2>
              <h3 className="text-2xl font-bold mb-6 text-center uppercase">Sejarah Kami</h3>
              <div className="space-y-4 text-center text-gray-600">
                <p className="leading-relaxed">
                  UKM KSR PMI Unit UPI YPTK Padang didirikan pada tahun 2005 dengan visi untuk
                  menjadi wadah bagi mahasiswa yang peduli terhadap kemanusiaan. Berawal dari
                  sekelompok kecil mahasiswa yang ingin berkontribusi kepada masyarakat, organisasi
                  ini telah berkembang menjadi salah satu UKM terkemuka di Universitas Putra
                  Indonesia YPTK Padang.
                </p>
                <p className="leading-relaxed">
                  Selama perjalanannya, KSR PMI UPI YPTK telah mengadakan berbagai kegiatan
                  kemanusiaan, seperti donor darah, pelatihan pertolongan pertama, dan aksi sosial
                  di daerah terpencil. Kami berkomitmen untuk terus melayani masyarakat dan
                  menginspirasi generasi muda untuk peduli terhadap sesama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}