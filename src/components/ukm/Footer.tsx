import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, MessageCircle, Mail, MapPin } from 'lucide-react';

const GOOGLE_FORMS_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfBEFcJY4K4aEn1UbHPDl9KF-PzTmI9ti8KXtysFdy-eaTV1Q/viewform';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Layout 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Brand & Sosmed */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/logo/uin-footer.webp"
                alt="UIN Gusdur Logo"
                width={70}
                height={70}
                className="h-16 w-auto"
              />
              <Image
                src="/images/logo/ukm-footer.webp"
                alt="UKM Sport Logo"
                width={70}
                height={70}
                className="h-16 w-auto"
              />
            </div>
            <div className="font-display text-2xl font-extrabold mb-3">
              UKM Sport UIN Gusdur
            </div>
            <p className="text-on-primary/70 text-sm max-w-xs mb-6">
              Wadah pengembangan bakat dan minat olahraga mahasiswa UIN K.H. Abdurrahman Wahid Pekalongan
            </p>
            {/* Ikon Sosmed */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ukmsport_uingusdur" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-on-primary/10 p-2 rounded-full hover:bg-on-primary/20 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@ukmsportuingusdurpekalonga8654" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-on-primary/10 p-2 rounded-full hover:bg-on-primary/20 transition-all">
                <Youtube size={20} />
              </a>
              <a href="https://www.tiktok.com/@ukmsport_uingusdur" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-on-primary/10 p-2 rounded-full hover:bg-on-primary/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#home" className="text-on-primary/80 hover:text-primary-fixed transition-all hover:underline">Beranda</Link></li>
              <li><Link href="#about" className="text-on-primary/80 hover:text-primary-fixed transition-all hover:underline">Tentang Kami</Link></li>
              <li><a href={GOOGLE_FORMS_URL} target="_blank" rel="noopener noreferrer" className="text-on-primary/80 hover:text-primary-fixed transition-all hover:underline">Gabung Sekarang</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} className="flex-shrink-0 opacity-80" />
                <span className="text-on-primary/80">Jl. Pahlawan Km. 5, Rowolaku, Kajen, Kab. Pekalongan, Jawa Tengah 51161</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MessageCircle size={18} className="flex-shrink-0 opacity-80" />
                <a href="https://wa.me/6281329174131" target="_blank" rel="noopener noreferrer" className="text-on-primary/80 hover:text-primary-fixed transition-all">+62 813 2917 4131</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} className="flex-shrink-0 opacity-80" />
                <a href="mailto:ukmsport@uingusdur.ac.id" className="text-on-primary/80 hover:text-primary-fixed transition-all">ukmsport@uingusdur.ac.id</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-on-primary/10 mb-6" />

        {/* Copyright - Dinamis */}
        <div className="text-center text-sm text-on-primary/60">
          &copy; {currentYear} UKM Sport UIN Gusdur. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
