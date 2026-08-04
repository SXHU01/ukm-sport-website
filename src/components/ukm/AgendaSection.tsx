interface AgendaItem {
  phase: string;
  title: string;
  description: string;
  schedule: string;
  isMainEvent?: boolean;
}

const agendaItems: AgendaItem[] = [
  {
    phase: 'FASE 1',
    title: 'Open Recruitment',
    description: 'Tahap awal penerimaan anggota baru dengan Demo Cabor di area kampus.',
    schedule: 'September - Oktober',
  },
  {
    phase: 'FASE 2',
    title: 'Diklat & TC Alam',
    description: 'Pembekalan manajemen organisasi dan outbound merekatkan kekeluargaan antar atlet.',
    schedule: 'November',
  },
  {
    phase: 'FASE 3',
    title: 'Sport Grand Match',
    description: 'Event turnamen terbesar antar-fakultas/se-Eks Keresidenan Pekalongan.',
    schedule: 'Maret - April',
    isMainEvent: true,
  },
  {
    phase: 'CONTINUOUS',
    title: 'Invitasi & Match',
    description: 'Uji tanding rutin melawan kampus/komunitas luar untuk evaluasi atlet secara berkala.',
    schedule: 'Rutin Bulanan',
  },
];

export function AgendaSection() {
  return (
    <section
      id="agenda"
      className="py-32 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary relative overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10" />

      <div className="container-max mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-[48px] md:leading-[56px] font-extrabold text-white mb-4">
              Agenda & Ekosistem
            </h2>
            <p className="text-on-primary/80 max-w-xl">
              Jadwal kegiatan rutin dan event besar yang membentuk mental juara
              anggota UKM Sport.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="material-symbols-outlined text-8xl text-secondary opacity-30">
              calendar_month
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {agendaItems.map((item) => (
            <div
              key={item.phase}
              className="bg-primary-container p-8 rounded-2xl border border-white/10 hover:bg-primary-container/80 transition-all relative overflow-hidden"
            >
              {item.isMainEvent && (
                <div className="absolute top-0 right-0 bg-secondary px-3 py-1 rounded-bl-xl font-semibold text-xs uppercase tracking-wider">
                  Main Event
                </div>
              )}
              <span className="text-primary-fixed-dim font-semibold block mb-4 text-sm uppercase tracking-wider">
                {item.phase}
              </span>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-on-primary/70 mb-6">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-primary-fixed-dim">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span className="text-sm">{item.schedule}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}