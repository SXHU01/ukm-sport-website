const GOOGLE_FORMS_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfBEFcJY4K4aEn1UbHPDl9KF-PzTmI9ti8KXtysFdy-eaTV1Q/viewform';

const WHATSAPP_URL = 'https://wa.me/6281329174131';

export function CTASection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <div className="container-max mx-auto bg-primary rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" />

        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-[48px] md:leading-[56px] font-extrabold text-white mb-8">
            Siap Menjadi Bagian dari Sejarah?
          </h2>
          <p className="text-on-primary/80 text-lg leading-[28px] max-w-2xl mb-12">
            Jangan biarkan bakatmu terpendam. Bergabunglah dengan UKM Sport
            UIN Gusdur dan kembangkan potensi atletikmu hingga titik maksimal.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href={GOOGLE_FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-secondary-container px-12 py-5 rounded-full font-semibold uppercase hover-lift text-lg text-center"
            >
              Daftar Anggota Sekarang
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-full font-semibold uppercase hover:bg-white/10 transition-all text-lg text-center"
            >
              Hubungi Admin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}