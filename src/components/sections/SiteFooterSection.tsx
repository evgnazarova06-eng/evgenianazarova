const navigationItems = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Как работаем', href: '#process' },
  { label: 'Связаться', href: '#contacts' },
];

const socialItems = [
  { label: 'Instagram', href: '#contacts' },
  { label: 'Telegram', href: '#contacts' },
  { label: 'Вконтакте', href: '#contacts' },
  { label: 'TikTok', href: '#contacts' },
];

const linkClassName =
  'font-manrope text-base font-medium text-white/70 transition-colors hover:text-white sm:text-lg';

export function SiteFooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#2a2a2a]">
      {/* мягкое coral-свечение */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-coral/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-coral/10 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-[1920px] flex-col gap-12 px-5 py-12 sm:px-8 lg:gap-16 lg:px-12 lg:py-16 xl:px-[100px]">
        {/* Верх: описание + колонки */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* О себе */}
          <section
            aria-labelledby="footer-owner-heading"
            className="flex max-w-[480px] flex-col gap-5"
          >
            <a
              href="#top"
              className="font-manrope text-xl font-bold text-coral transition-opacity hover:opacity-90 sm:text-2xl"
            >
              Евгения Назарова
            </a>
            <p className="font-manrope text-base leading-relaxed text-white/70 sm:text-lg">
              Помогаю экспертам, брендам и предпринимателям создавать стильный
              визуальный контент и вести соцсети так, чтобы аудитория росла, а
              подписчики превращались в клиентов.
            </p>
            <a
              href="#contacts"
              className="inline-flex h-11 w-fit items-center justify-center rounded-full bg-coral px-5 font-manrope text-sm font-semibold text-white transition-colors hover:bg-[#ed5e5d] sm:text-base"
            >
              Обсудить проект
            </a>
          </section>

          {/* Навигация + соцсети */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-20">
            <nav
              aria-labelledby="footer-navigation-heading"
              className="flex flex-col gap-5"
            >
              <h2
                id="footer-navigation-heading"
                className="font-inter text-sm font-semibold uppercase tracking-wider text-white/40"
              >
                Навигация
              </h2>
              <ul className="flex flex-col gap-3">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={linkClassName}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <section
              aria-labelledby="footer-links-heading"
              className="flex flex-col gap-5"
            >
              <h2
                id="footer-links-heading"
                className="font-inter text-sm font-semibold uppercase tracking-wider text-white/40"
              >
                Соцсети
              </h2>
              <ul className="flex flex-col gap-3">
                {socialItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={linkClassName}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Низ: линия + копирайт */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-manrope text-sm text-white/40">
            © {year} Евгения Назарова. Все права защищены.
          </p>
          <p className="font-manrope text-sm text-white/40">
            Контент · Монтаж · Ведение соцсетей
          </p>
        </div>
      </div>
    </footer>
  );
}