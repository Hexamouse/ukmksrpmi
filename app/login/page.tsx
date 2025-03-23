// app/login/page.tsx (or pages/login.tsx if using Pages Router)
"use client";

import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log('Login attempted with:', { username, password });
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

      {/* Login Section */}
      <section className="pt-32 md:pt-36 bg-white">
        {/* Title - Centered at top */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-red-600">KSR</span> LOGIN
          </h1>
          <p className="text-gray-600 mt-2 text-sm">Access your account to manage KSR PMI activities</p>
        </div>

        <div className="container mx-auto px-4 max-w-7xl mb-20">
          {/* Main Content - Centered Form */}
          <div className="flex justify-center">
            <div className="w-full max-w-md" data-aos="fade-up" data-aos-delay="200">
              <div>
                <h2 className="text-sm font-semibold mb-2 text-gray-500 text-center">Login to Your Account</h2>
                <h3 className="text-2xl font-bold mb-6 text-center uppercase">Sign In</h3>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-600">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                      className="w-full border-gray-300 focus:border-red-600 focus:ring-red-600"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-600">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full border-gray-300 focus:border-red-600 focus:ring-red-600"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-red-600 text-white hover:bg-red-700 transition-all"
                  >
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}