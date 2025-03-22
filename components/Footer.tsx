// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-red-50 py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="foot-head grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Organization Info */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/assets/etc/logo/ksr_logo_1.png"
              alt="KSR PMI Logo"
              width={100}
              height={80}
              className="mb-4 w-auto h-auto"
            />
            <div className="text-center lg:text-left">
              <h2 className="text-base font-bold">Unit Kegiatan Mahasiswa</h2>
              <h3 className="text-sm font-medium">Korps Sukarelawan Unit</h3>
              <h3 className="text-sm font-medium">Universitas Putra Indonesia YPTK</h3>
              <h3 className="text-sm font-medium">Padang</h3>
            </div>
          </div>

          {/* Divisi Section */}
          <div>
            <h3 className="font-semibold text-base mb-3">Divisi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/divisi/pertolongan-pertama" className="hover:text-red-600">Pertolongan Pertama</Link></li>
              <li><Link href="/divisi/penanggulangan-bencana" className="hover:text-red-600">Penanggulangan Bencana</Link></li>
              <li><Link href="/divisi/donor-darah" className="hover:text-red-600">Donor Darah</Link></li>
            </ul>
          </div>

          {/* Personalia Section */}
          <div>
            <h3 className="font-semibold text-base mb-3">Personalia</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/personalia/bpo" className="hover:text-red-600">BPO</Link></li>
              <li><Link href="/personalia/struktural" className="hover:text-red-600">Struktural</Link></li>
              <li><Link href="/personalia/anggota" className="hover:text-red-600">Anggota Aktif</Link></li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-semibold text-base mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-red-600">Blog</Link></li>
              <li><Link href="/galeri" className="hover:text-red-600">Galeri</Link></li>
              <li><Link href="/kegiatan" className="hover:text-red-600">Kegiatan</Link></li>
              <li><Link href="/berita" className="hover:text-red-600">Berita</Link></li>
            </ul>
          </div>

          {/* Sekretariat Section */}
          <div>
            <h3 className="font-semibold text-base mb-3">Sekretariat</h3>
            <div className="text-sm space-y-2">
              <p>Universitas Putra Indonesia YPTK</p>
              <p>Jl. Raya Lubuk Begalung</p>
              <p>Student Center Lt. 2</p>
              <p>Padang, Sumatera Barat 25145</p>
              <a href="mailto:ksrpmiunitupiyptk@gmail.com" className="text-red-600 hover:text-red-700">
                ksrpmiunitupiyptk@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-600">
          <p>© {new Date(). getFullYear()} KSR PMI Unit UPI YPTK. All rights reserved.</p>
          <Link href="https://www.dzikrimaulana.my.id/" target='_blank' rel='noopener noreferrer'><p className="text-xs mt-1">Powered by <span className='text-red-600'>Dzikri Tech</span></p></Link>
        </div>
      </div>
    </footer>
  );
}