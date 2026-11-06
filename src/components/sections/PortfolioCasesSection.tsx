import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioCases } from '@/data/portfolio';

type Props = {
  onOpenCase?: (slug: string) => void;
};

export function PortfolioCasesSection({ onOpenCase }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollControls = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const { scrollLeft, clientWidth, scrollWidth } = carousel;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  };

  const scrollCases = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction === 'left' ? -390 : 390,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    updateScrollControls();
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new ResizeObserver(updateScrollControls);
    observer.observe(carousel);
    window.addEventListener('resize', updateScrollControls);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScrollControls);
    };
  }, []);

  const handleOpenCase = (slug: string) => {
    if (onOpenCase) {
      onOpenCase(slug);
    } else {
      window.location.hash = `#portfolio/${slug}`;
    }
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-cases-heading"
      className="flex w-full flex-col items-start justify-center gap-[30px] self-stretch overflow-hidden bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-[60px] xl:px-[100px]"
    >
      <h2
        id="portfolio-cases-heading"
        className="font-inter text-2xl font-semibold text-[#2a2a2a] sm:text-3xl lg:text-[32px]"
      >
        Кейсы
      </h2>

      <div className="flex w-full flex-col items-end">
        {/* items-stretch — все карточки одной высоты */}
        <div
          ref={carouselRef}
          onScroll={updateScrollControls}
          className="flex w-full snap-x snap-mandatory items-stretch gap-[30px] overflow-x-auto pb-[30px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {portfolioCases.map((item) => (
            <Card
              key={item.id}
              className="flex w-[300px] shrink-0 snap-start flex-col gap-5 overflow-hidden rounded-[30px] border border-[#efefef] bg-white p-2.5 shadow-none sm:w-[380px]"
            >
              {/* Фиксированная высота картинки */}
              <div className="relative shrink-0">
                <img
                  className="h-[320px] w-full rounded-[20px] object-cover sm:h-[400px]"
                  alt={item.title}
                  src={item.image}
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 font-inter text-sm font-medium text-white backdrop-blur-sm">
                  {item.priceLabel}
                </span>
              </div>

              {/* Контент растягивается, кнопка всегда внизу */}
              <CardContent className="flex min-h-0 flex-1 flex-col items-start gap-3 px-2.5 py-0">
                <h3 className="line-clamp-2 min-h-[2.6em] w-full font-inter text-xl font-semibold leading-snug text-[#2a2a2acc] sm:text-2xl lg:text-[26px]">
                  {item.title}
                </h3>

                <p className="line-clamp-3 min-h-[4.5em] w-full font-inter text-sm font-normal leading-relaxed text-[#2a2a2a99] sm:text-base lg:text-lg">
                  {item.shortDescription}
                </p>

                {item.tags.length > 0 && (
                  <ul className="mt-auto flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1 font-inter text-xs font-medium text-[#2a2a2a99]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>

              <Button
                type="button"
                onClick={() => handleOpenCase(item.slug)}
                className="mt-auto h-auto w-full shrink-0 rounded-[20px] bg-coral px-0 py-2.5 font-inter text-lg font-medium text-white hover:bg-[#ed5e5d] lg:text-xl"
              >
                Подробнее
              </Button>
            </Card>
          ))}
        </div>

        <nav
          aria-label="Навигация по кейсам"
          className="inline-flex items-start gap-5 rounded-[40px] border border-white/10 bg-[#2a2a2a33] p-[5px] backdrop-blur-[7.5px]"
        >
          <Button
            type="button"
            aria-label="Предыдущие кейсы"
            disabled={!canScrollLeft}
            onClick={() => scrollCases('left')}
            className={`h-auto rounded-[30px] p-[15px] transition-colors disabled:opacity-100 ${
              canScrollLeft
                ? 'bg-[#2a2a2a] hover:bg-[#2a2a2a]'
                : 'bg-[#2a2a2a80] hover:bg-[#2a2a2a80]'
            }`}
          >
            <ArrowLeft className="h-8 w-8 text-white" />
          </Button>

          <Button
            type="button"
            aria-label="Следующие кейсы"
            disabled={!canScrollRight}
            onClick={() => scrollCases('right')}
            className={`h-auto rounded-[30px] p-[15px] transition-colors disabled:opacity-100 ${
              canScrollRight
                ? 'bg-[#2a2a2a] hover:bg-[#2a2a2a]'
                : 'bg-[#2a2a2a80] hover:bg-[#2a2a2a80]'
            }`}
          >
            <ArrowRight className="h-8 w-8 text-white" />
          </Button>
        </nav>
      </div>
    </section>
  );
}