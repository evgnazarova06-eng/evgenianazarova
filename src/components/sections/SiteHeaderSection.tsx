import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Отзывы', href: '#contacts' },
];

type Props = {
  /** Вызывается при любом переходе по якорю (в т.ч. с детальной страницы кейса) */
  onNavigate?: (href: string) => void;
};

export function SiteHeaderSection({ onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Если родитель умеет обрабатывать навигацию (закрыть кейс → показать лендинг → скролл)
    if (onNavigate) {
      event.preventDefault();
      setMenuOpen(false);
      onNavigate(href);
      return;
    }

    // Обычный режим — просто закрываем меню
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-neutral-50/90 px-5 py-4 backdrop-blur-md sm:px-8 lg:px-12 lg:py-5 xl:px-[100px]">
        {/* Логотип */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="font-manrope text-lg font-bold leading-none text-coral sm:text-xl"
        >
          Евгения Назарова
        </a>

        {/* Десктопное меню */}
        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-[30px]">
            {navigationItems.map((item, index) => (
              <li key={item.label} className="flex items-center gap-[30px]">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[#2a2a2a99]"
                  />
                )}
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-manrope text-base font-semibold text-[#2a2a2a99] transition-colors hover:text-[#2a2a2a]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Кнопка связи — только десктоп */}
        <Button
          type="button"
          variant="outline"
          asChild
          className="hidden h-auto w-[217px] justify-start rounded-[40px] border-2 border-coral-dark bg-transparent p-[5px] text-coral-dark shadow-none hover:bg-transparent hover:text-coral-dark lg:flex"
        >
          <a href="#contacts" onClick={(e) => handleNavClick(e, '#contacts')}>
            <span className="inline-flex items-center rounded-[20px] bg-coral-dark p-2.5">
              <Phone className="h-3 w-3 text-white" />
            </span>
            <span className="flex-1 text-center font-manrope text-base font-semibold">
              Связаться
            </span>
          </a>
        </Button>

        {/* Бургер */}
        <button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-coral p-2 text-white transition-transform hover:scale-105 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] flex min-h-[100dvh] w-screen flex-col bg-white text-[#2a2a2a] animate-fade-in lg:hidden">
          <div className="flex w-full items-center justify-between px-5 py-4 sm:px-8">
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="font-manrope text-lg font-bold leading-none text-coral sm:text-xl"
            >
              Евгения Назарова
            </a>

            <button
              type="button"
              aria-label="Закрыть меню"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a2a2a] text-white transition-all hover:scale-105"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav
            aria-label="Мобильная навигация"
            className="flex flex-1 items-center px-5 sm:px-8"
          >
            <ul className="flex w-full flex-col gap-1">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 font-manrope text-2xl font-semibold text-[#2a2a2a]/70 transition-all hover:bg-[#f5f5f5] hover:text-coral"
                  >
                    <span>{item.label}</span>
                    <span className="text-lg text-[#2a2a2a55] transition-transform group-hover:translate-x-1 group-hover:text-coral">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-full px-5 pb-8 pt-4 sm:px-8">
            <Button
              type="button"
              asChild
              className="h-auto w-full justify-center gap-2.5 rounded-[40px] bg-coral p-4 font-manrope text-lg font-semibold text-white shadow-none transition-all hover:scale-[1.01] hover:bg-coral-dark"
            >
              <a
                href="#contacts"
                onClick={(e) => handleNavClick(e, '#contacts')}
              >
                <Phone className="h-5 w-5" />
                <span>Связаться</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}