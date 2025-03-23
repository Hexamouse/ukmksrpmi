// app/pengurus/page.tsx (or pages/pengurus.tsx if using Pages Router)
"use client";

import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
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

export default function Pengurus() {
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

  // Data for management team (placeholder)
  const managementData = {
    Pembina: [
      { name: "Dr. John Doe, M.Pd.", role: "Pembina", photo: "/assets/images/pengurus/pembina-1.jpg" },
    ],
    DPO: [
      { name: "Jane Smith", role: "Ketua DPO", photo: "/assets/images/pengurus/dpo-1.jpg" },
    ],
    DPA: [
      { name: "Michael Brown", role: "Ketua DPA", photo: "/assets/images/pengurus/dpa-1.jpg" },
    ],
    Steering_Komite: [
      { name: "Sarah Johnson", role: "Komandan", photo: "/assets/images/pengurus/steering-komandan.jpg" },
      { name: "David Lee", role: "Sekretaris", photo: "/assets/images/pengurus/steering-sekretaris.jpg" },
      { name: "Emily Davis", role: "Bendahara", photo: "/assets/images/pengurus/steering-bendahara.jpg" },
    ],
    Humas: [
      { name: "Robert Wilson", role: "Koordinator Humas", photo: "/assets/images/pengurus/humas-1.jpg" },
      { name: "Lisa Anderson", role: "Anggota Humas", photo: "/assets/images/pengurus/humas-2.jpg" },
    ],
    Perlengkapan: [
      { name: "James Taylor", role: "Koordinator Perlengkapan", photo: "/assets/images/pengurus/perlengkapan-1.jpg" },
      { name: "Anna White", role: "Anggota Perlengkapan", photo: "/assets/images/pengurus/perlengkapan-2.jpg" },
    ],
    Infokom: [
      { name: "Mark Harris", role: "Koordinator Infokom", photo: "/assets/images/pengurus/infokom-1.jpg" },
      { name: "Sophie Clark", role: "Anggota Infokom", photo: "/assets/images/pengurus/infokom-2.jpg" },
    ],
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

      {/* Pengurus Section */}
      <section className="flex-grow bg-gradient-to-r from-blue-50 to-pink-50 pt-[80px] md:pt-[100px]">
        {/* Header with Background Image */}
        <div
          className="relative w-full min-h-[300px] md:min-h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/pengurus/ksr-pengurus.jpg')",
          }}
          data-aos="fade-up"
        >
          {/* Overlay for Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            {/* Title - Centered */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                <span className="text-red-600">KSR</span> PENGURUS
              </h1>
              <p className="text-gray-200 mt-2 text-sm">Meet the management team of KSR PMI UPI YPTK Padang</p>
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
                  <span className="text-gray-200">Pengurus</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-7xl mb-20 mt-12">
          {Object.entries(managementData).map(([division, members], index) => (
            <div key={division} className="mb-12" data-aos="fade-up" data-aos-delay={index * 100}>
              <h2 className="text-2xl font-bold mb-6 text-center uppercase text-gray-800">{division}</h2>
              <div
                className={
                  members.length <= 2
                    ? "flex flex-wrap justify-center gap-6"
                    : "grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center"
                }
              >
                {members.map((member, idx) => (
                  <Card
                    key={idx}
                    className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] h-[300px] sm:h-[350px] md:h-[400px] relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}