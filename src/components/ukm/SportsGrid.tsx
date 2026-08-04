import { ScrollAnimator } from './ScrollAnimator';

interface Sport {
  name: string;
  icon: string;
  description: string;
  image: string;
}

const sports: Sport[] = [
  {
    name: 'Futsal & Bola',
    icon: 'sports_soccer',
    description: 'Pembinaan chemistry tim dan taktik permainan untuk ajang Rektor Cup & PTKIN.',
    image: '/images/sports/futsal.webp',
  },
  {
    name: 'Bulutangkis',
    icon: 'sports_tennis',
    description: 'Penguatan footwork dan teknik smash untuk kategori tunggal & ganda.',
    image: '/images/sports/bulutangkis.webp',
  },
  {
    name: 'Basket',
    icon: 'sports_basketball',
    description: 'Latihan drilling dasar, pola pertahanan, dan pembentukan tim solid.',
    image: '/images/sports/basket.webp',
  },
  {
    name: 'Voli',
    icon: 'sports_volleyball',
    description: 'Membina tim putra & putri dengan fokus pada koordinasi passing dan spike.',
    image: '/images/sports/voli.webp',
  },
  {
    name: 'Tenis Meja',
    icon: 'sports_tennis',
    description: 'Ketangkasan refleks, spin control, dan strategi permainan.',
    image: '/images/sports/tenis-meja.webp',
  },
  {
    name: 'Catur',
    icon: 'strategy',
    description: 'Pengasahan teori opening, taktik middle game, hingga simulasi rapid.',
    image: '/images/sports/catur.webp',
  },
  {
    name: 'Bela Diri',
    icon: 'sports_martial_arts',
    description: 'Pembinaan mental dan disiplin fisik (Taekwondo, Karate, Pencak Silat).',
    image: '/images/sports/bela-diri.webp',
  },
  {
    name: 'Parkour',
    icon: 'directions_run',
    description: 'Seni gerak ketangkasan dengan teknik safe landing dan vaulting terukur.',
    image: '/images/sports/parkour.webp',
  },
];

function SportCard({ sport, index }: { sport: Sport; index: number }) {
  return (
    <div className="group bg-surface border border-outline-variant rounded-xl overflow-hidden hover-lift flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url('${sport.image}')` }}
          role="img"
          aria-label={sport.name}
        />
      </div>
      <div className="p-6 flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-secondary">
            {sport.icon}
          </span>
          <h3 className="font-display text-2xl font-bold text-primary">
            {sport.name}
          </h3>
        </div>
        <p className="text-base leading-6 text-on-surface-variant">
          {sport.description}
        </p>
      </div>
      <div className="h-1 bg-secondary w-0 group-hover:w-full transition-all duration-300" />
    </div>
  );
}

export function SportsGrid() {
  return (
    <section id="sports" className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="container-max mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-[48px] md:leading-[56px] font-extrabold text-primary mb-4">
            Pilih Cabang Jagoanmu
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            8 Cabang Olahraga pilihan untuk asah potensi diri dan raih kejayaan
            di berbagai kompetisi.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport, index) => (
            <ScrollAnimator 
              key={sport.name} 
              animation="zoom-in" 
              delay={index * 100}
              duration={600}
              className="h-full"
            >
              <SportCard sport={sport} index={index} />
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
