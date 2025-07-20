import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-red-600">Hubungi</span> Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Kami siap membantu dan menjawab pertanyaan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaEnvelope className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a href="mailto:ksrpmiunitupiyptk@gmail.com" 
                     className="text-gray-600 hover:text-red-600 transition-colors">
                    ksrpmiunitupiyptk@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaPhone className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Telepon</h4>
                  <a href="tel:+6282170217017" 
                     className="text-gray-600 hover:text-red-600 transition-colors">
                    +62 82170217017
                  </a>
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300">
                Kirim Pesan
              </Button>
            </div>
          </div>

          {/* Sosial Media Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Ikuti Kami</h3>
            <div className="grid grid-cols-3 gap-6">
              <Link href="#" className="flex flex-col items-center group">
                <div className="bg-red-100 p-4 rounded-full group-hover:bg-red-600 transition-colors duration-300">
                  <FaFacebookF className="text-2xl text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="mt-3 text-gray-600 group-hover:text-red-600 transition-colors duration-300">
                  Facebook
                </span>
              </Link>
              
              <Link href="#" className="flex flex-col items-center group">
                <div className="bg-red-100 p-4 rounded-full group-hover:bg-red-600 transition-colors duration-300">
                  <FaInstagram className="text-2xl text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="mt-3 text-gray-600 group-hover:text-red-600 transition-colors duration-300">
                  Instagram
                </span>
              </Link>
              
              <Link href="#" className="flex flex-col items-center group">
                <div className="bg-red-100 p-4 rounded-full group-hover:bg-red-600 transition-colors duration-300">
                  <FaTwitter className="text-2xl text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="mt-3 text-gray-600 group-hover:text-red-600 transition-colors duration-300">
                  Twitter
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
