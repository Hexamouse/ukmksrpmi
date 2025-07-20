import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FaFigma, FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";

export default function Developers() {
  return (
    <section id="developers" className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-red-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 
            className="text-xl md:text-2xl font-semibold"
            data-aos="fade-up"
          >
            Our Developers
          </h2>
          <div 
            className="text-xl md:text-2xl font-bold text-orange-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            CX DEV! <span className="text-black">Great Person Who Made Website</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative">
            <Card 
              className="relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 aspect-[3/4] md:aspect-[4/5]"
              data-aos="fade-up"
            >
              <Image
                src="/assets/developers/project-lead.jpg"
                alt="Project Lead"
                fill
                className="object-cover grayscale"
              />
              <CardContent className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white opacity-80 tracking-widest">
                    PROJECT LEAD
                  </h3>
                  <p className="text-lg md:text-xl text-white mt-2">
                    CX - Rerey <br /> Project Lead / Full Stack Dev
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div 
            className="flex flex-col justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              About Projects
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Website ini kami ciptakan dengan sepenuh hati, sebagai wujud dedikasi kami yang
              mendalam kepada UKM-IT Cybersecurity, Kamin mengorbankan waktu, tenaga, dan
              pemikiran untuk mewujudkan visi ini, dan kini hasilnya dapat Anda nikmati dan
              gunakan. Setiap tetes keringat yang kami habiskan dalam perjalanan ini adalah langkah
              menuju mewujudkan impian terbesar.
              <br /><br />
              Website ini dirancang menggunakan berbagai teknologi canggih untuk memastikan
              pengalaman yang responsif dan mulus bagi semua pengguna.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2 group">
                <FaFigma 
                  size={40}
                  className="text-pink-500 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs text-gray-600">Figma</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <FaReact 
                  size={40} 
                  className="text-cyan-500 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="text-xs text-gray-600">React</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <FaNodeJs 
                  size={40} 
                  className="text-green-500 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="text-xs text-gray-600">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <FaJsSquare 
                  size={40} 
                  className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="text-xs text-gray-600">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
