"use client";

import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { FaFigma, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiPostgresql } from "react-icons/si";
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';

export default function Home() {
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

      <section className="pt-32 md:pt-36 bg-white">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="devsec text-red-600">KSR</span> DEV!
          </h1>
          <p className="text-gray-600 mt-2 text-sm">great person who made this website</p>
        </div>

        <div className="container mx-auto px-4 max-w-7xl mb-20">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col justify-center space-y-8 md:order-2 order-1" data-aos="fade-up" data-aos-delay="200">
              <div>
                <h2 className="hidden md:block text-sm font-semibold mb-2 text-gray-500">Our Developers</h2>
                <h3 className="devsec-ab text-2xl font-bold mb-6 text-center md:text-left uppercase">About Projects</h3>
                <div className="devsec-des space-y-4 text-center md:text-left text-gray-600">
                  <p className="leading-relaxed">
                    Website ini merupakan hasil karya yang kami persembahkan dengan penuh dedikasi untuk
                    UKM KSR PMI Unit UPI YPTK PADANG. Setiap detail dalam website ini dirancang dengan
                    cermat dan penuh pertimbangan, mencerminkan komitmen kami dalam memberikan yang
                    terbaik bagi organisasi tercinta ini.
                  </p>
                  <p className="leading-relaxed">
                      Dengan menggunakan teknologi terkini dalam pengembangan web, kami memastikan website ini
                      tidak hanya menarik secara visual, tetapi juga cepat, aman, dan mudah diakses oleh
                      seluruh anggota organisasi.
                    </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                {[
                  { Icon: FaFigma, color: "#F24E1E", label: "Figma" },
                  { Icon: FaReact, color: "#61DAFB", label: "React" },
                  { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
                  { Icon: FaNodeJs, color: "#339933", label: "Node.js" },
                  { Icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
                  { Icon: SiExpress, color: "#000000", label: "Express.js" }
                ].map(({ Icon, color, label }, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 group">
                    <Icon 
                      size={32}
                      className={`text-[${color}] group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-xs text-gray-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative md:order-1 order-2" data-aos="fade-up">
              <Card className="relative overflow-hidden py-0 w-full h-[450px] rounded-lg">
                <div className="relative h-full w-full flex flex-col items-center justify-center z-10">
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/images/dev/wibu.jpg"
                      alt="Project Lead"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
