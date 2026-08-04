interface Facility {
  icon: string;
  title: string;
  description: string;
}

const facilities: Facility[] = [
  {
    icon: 'stadium',
    title: 'Lapangan Multifungsi',
    description: 'Akses lapangan indoor dan outdoor dengan Sistem Shift Mingguan yang teratur untuk tiap cabor.',
  },
  {
    icon: 'fitness_center',
    title: 'Fasilitas Gym & Kebugaran',
    description: 'Pusat pelatihan Strength & Conditioning untuk meningkatkan ketahanan fisik atlet.',
  },
  {
    icon: 'inventory_2',
    title: 'Peminjaman Inventaris',
    description: 'Sistem peminjaman peralatan olahraga (bola, raket, matras) yang terintegrasi secara digital.',
  },
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container">
      <div className="container-max mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left: Facility cards */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-6">
              {facilities.map((facility) => (
                <div
                  key={facility.title}
                  className="flex gap-6 items-start p-8 bg-surface rounded-2xl shadow-sm border border-outline-variant/30 hover-lift"
                >
                  <div className="bg-primary-container p-4 rounded-xl text-on-primary-container shrink-0">
                    <span className="material-symbols-outlined text-3xl">
                      {facility.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-primary mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-on-surface-variant">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image and text */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-[48px] md:leading-[56px] font-extrabold text-primary mb-6">
              Dukungan Fasilitas Terbaik
            </h2>
            <p className="text-lg leading-[28px] text-on-surface-variant mb-10">
              Kami percaya bahwa prestasi lahir dari latihan yang didukung oleh
              sarana yang memadai dan manajemen fasilitas yang profesional.
            </p>
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/facilities/sport-center.webp')" }}
                role="img"
                aria-label="Sport Center UIN Gusdur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <span className="text-white font-semibold uppercase tracking-wider text-sm">
                    Sport Center UIN Gusdur
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
