// components/About.tsx
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div data-aos="fade-right">
            <h2 className="about-head text-2xl sm:text-3xl font-bold text-red-600 mb-4">Tentang KSR PMI</h2>
            <p className="about-des text-gray-700 leading-relaxed text-sm sm:text-base">
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
  );
}