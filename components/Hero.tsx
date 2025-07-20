import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-red-600 to-red-400 text-white py-16 sm:py-24 md:py-32 text-center mt-24 sm:mt-28 md:mt-32"
    >
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
  );
}
