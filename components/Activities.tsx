import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Activities() {
  const activities = [
    {
      src: "/assets/2025/BB_2025.jpeg",
      alt: "Berbuka Bersama 2025",
      title: "Berbuka Bersama 2025",
    },
    {
      src: "/assets/2024/HIRM 2024.jpeg",
      alt: "HIRM 2024",
      title: "HIRM 2024",
    },
    {
      src: "/assets/2024/DD_VOL1.png",
      alt: "Donor Darah 2024",
      title: "Donor Darah 2024",
    },
    {
      src: "/assets/2024/SELEKSI_BAKAL_CAANG_XIV.png",
      alt: "Seleksi Bakal Caang R XIV",
      title: "Seleksi Bakal Caang R XIV",
    },
    {
      src: "/assets/2022/HIRM_2022.png",
      alt: "HIRM 2022",
      title: "HIRM 2022",
    },
  ];

  return (
    <section id="activities" className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-red-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
          data-aos="fade-up"
        >
          Dedikasi Berbuah Cerita Yang Mengesankan
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Large Card (Left) - Desktop: Full Height, Mobile: Wide */}
          <Card 
            className="col-span-2 md:col-span-1 md:row-span-2 relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 aspect-[4/3] md:aspect-[3/4]"
            data-aos="fade-up"
          >
            <Image
              src={activities[0].src}
              alt={activities[0].alt}
              fill
              className="object-cover"
            />
            <CardContent className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <span className="inline-block bg-gradient-to-r from-black/80 to-gray-900/80 text-white text-sm md:text-lg px-4 py-2 rounded-lg">
                {activities[0].title}
              </span>
            </CardContent>
          </Card>

          {/* Right Cards - Desktop: 2x2 Grid, Mobile: Varied Sizes */}
          <div className="col-span-2 md:col-span-2 grid grid-cols-2 gap-4 md:gap-6">
            {/* Small Card 1 */}
            <Card 
              className="col-span-1 relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 aspect-[4/3]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src={activities[1].src}
                alt={activities[1].alt}
                fill
                className="object-cover"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-gradient-to-r from-black/80 to-gray-900/80 text-white text-sm px-3 py-2 rounded-lg">
                  {activities[1].title}
                </span>
              </CardContent>
            </Card>

            {/* Small Card 2 */}
            <Card 
              className="col-span-1 relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 aspect-[4/3]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image
                src={activities[2].src}
                alt={activities[2].alt}
                fill
                className="object-cover"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-gradient-to-r from-black/80 to-gray-900/80 text-white text-sm px-3 py-2 rounded-lg">
                  {activities[2].title}
                </span>
              </CardContent>
            </Card>

            {/* Small Card 3 */}
            <Card 
              className="col-span-1 relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 aspect-[4/3]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Image
                src={activities[3].src}
                alt={activities[3].alt}
                fill
                className="object-cover"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-gradient-to-r from-black/80 to-gray-900/80 text-white text-sm px-3 py-2 rounded-lg">
                  {activities[3].title}
                </span>
              </CardContent>
            </Card>

            {/* Small Card 4 */}
            <Card 
              className="col-span-1 relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 aspect-[4/3]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Image
                src={activities[4].src}
                alt={activities[4].alt}
                fill
                className="object-cover"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-gradient-to-r from-black/80 to-gray-900/80 text-white text-sm px-3 py-2 rounded-lg">
                  {activities[4].title}
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}