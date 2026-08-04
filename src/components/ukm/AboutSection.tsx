const images = [
  {
    url: '/images/about/meeting.png',
    alt: 'Pertemuan kelompok atlet mahasiswa membahas rencana strategis di fasilitas kampus',
    className: 'h-64',
  },
  {
    url: '/images/about/trophy.png',
    alt: 'Lemari piala berisi piala emas dan perak serta medali',
    className: 'h-80 mt-8',
  },
  {
    url: '/images/about/gym.png',
    alt: 'Mahasiswa universitas berlatih di gym modern',
    className: 'h-80 -mt-8',
  },
  {
    url: '/images/aboutSection/Basket.png',
    alt: 'Tampilan atas lapangan olahraga hijau cerah di kampus',
    className: 'h-64',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Glass card content */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-fixed-dim/20 rounded-full blur-3xl" />
          <div className="relative z-10 glass-card p-12 rounded-2xl shadow-xl border-l-8 border-primary">
            <h2 className="font-display text-3xl md:text-[32px] leading-[40px] font-bold text-primary mb-8">
              Tentang UKM Sport
            </h2>
            <p className="text-lg leading-[28px] text-on-surface-variant mb-8">
              UKM Sport UIN Gusdur berkomitmen menciptakan atlet mahasiswa yang
              unggul di lapangan dan berkarakter. Didukung oleh Badan Pengurus
              Harian (BPH) dan divisi operasional (Litbang, Humas, MPD, K3), kami
              memastikan setiap cabang olahraga dikelola dengan manajemen yang
              profesional.
            </p>
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
              <h3 className="font-semibold text-primary uppercase mb-2 flex items-center gap-2 text-sm tracking-wider">
                <span className="material-symbols-outlined">visibility</span>
                Visi Kami
              </h3>
              <p className="text-on-surface italic">
                &ldquo;Menjadi pusat pengembangan olahraga mahasiswa yang berprestasi
                di tingkat regional dan nasional.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.className} rounded-xl bg-cover bg-center hover-lift`}
              style={{ backgroundImage: `url('${img.url}')` }}
              role="img"
              aria-label={img.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}