const sports = [
  'Futsal', 'Sepak Bola', 'Bulutangkis', 'Basket', 'Voli',
  'Tenis Meja', 'Catur', 'Bela Diri', 'Parkour',
];

export function MarqueeBanner() {
  return (
    <div className="bg-primary-container py-4 overflow-hidden border-y border-outline-variant/20">
      <div className="animate-marquee whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-12 items-center px-6">
            {sports.map((sport) => (
              <span
                key={`${dup}-${sport}`}
                className="text-on-primary-container font-display text-xl md:text-2xl font-bold uppercase italic flex items-center gap-2"
              >
                <span className="material-symbols-outlined">stars</span>
                {sport}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}