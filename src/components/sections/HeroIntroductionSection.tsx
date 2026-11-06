import { ArrowUpRight, FileText, PenTool, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const serviceTags = ['Уникальный контент', 'Монтаж', 'Ведение соцсетей'];

const featureCards = [
  {
    title: 'Уникальные текста',
    icon: FileText,
    background: 'bg-coral',
  },
  {
    title: 'Персональный стиль',
    icon: PenTool,
    background: 'bg-coral-orange',
  },
  {
    title: 'Качественный монтаж',
    icon: Video,
    background: 'bg-coral-pink',
  },
];

const heroPortrait = '/images/ChatGPT_Image_30_авг__2026_г_,_16_52_16-no-bg-preview_(carve.photos)_1.png';
const heroDecoration = '/images/Group_4_1.png';

export function HeroIntroductionSection() {
  return (
    <section
      id="top"
      className="relative isolate w-full overflow-hidden bg-neutral-50 pt-[80px]"
    >
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1920px] flex-col overflow-hidden px-5 sm:px-8 lg:min-h-[860px] lg:px-12 xl:px-[100px] 2xl:px-[120px]">
        {/* Декоративный фон — только десктоп */}
        <img
          src={heroDecoration}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[1%] top-[4%] z-0 hidden w-[28%] max-w-[520px] object-contain lg:block xl:right-[3%] xl:w-[30%] xl:max-w-[560px] 2xl:right-[4%]"
        />

        {/* ===== Мобильная / планшетная раскладка ===== */}
        <div className="relative z-20 flex flex-1 flex-col lg:hidden">
          {/* Текст */}
          <div className="flex max-w-[520px] flex-col gap-5 pt-8 sm:pt-12">
            <p className="font-manrope text-base font-medium leading-[1.35] text-[#2a2a2acc] sm:text-lg">
              Я помогаю экспертам, брендам и предпринимателям создавать стильный
              визуальный контент и вести соцсети так, чтобы аудитория росла, а
              подписчики превращались в клиентов.
            </p>

            <p className="max-w-[470px] font-manrope text-base font-bold leading-[1.35] text-[#2a2a2a] sm:text-lg">
              Работаю под ключ: от идеи и съёмки до готовых Reels, Stories и
              регулярного ведения.
            </p>

            <ul className="flex flex-wrap gap-2.5">
              {serviceTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-2xl bg-coral/20 px-4 py-2 font-manrope text-sm font-semibold text-coral"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Карточки */}
          <div className="mt-8 grid w-full grid-cols-3 gap-2 sm:gap-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className={`min-w-0 rounded-[20px] border-0 shadow-none ${feature.background}`}
                >
                  <CardContent className="flex flex-col gap-1.5 p-3 sm:p-3.5">
                    <div className="flex w-full items-start gap-2">
                      <Icon className="h-5 w-5 shrink-0 text-white sm:h-6 sm:w-6" />
                      <div className="h-5 flex-1 rounded-xl bg-white/20 sm:h-6" />
                    </div>
                    <p className="font-inter text-[10px] font-semibold leading-tight text-white sm:text-[11px]">
                      {feature.title}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Кнопки */}
          <div className="mt-8 flex w-full max-w-[420px] flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Button
                type="button"
                variant="secondary"
                asChild
                className="h-12 flex-1 rounded-3xl bg-[#f1f1f1] px-5 font-manrope text-base font-bold text-[#2b2b2bcc] shadow-none hover:bg-[#e7e7e7]"
              >
                <a href="#portfolio">Кейсы</a>
              </Button>

              <Button
                type="button"
                asChild
                aria-label="Открыть кейсы"
                className="h-12 w-12 shrink-0 rounded-3xl bg-[#2b2b2b] p-2.5 shadow-none hover:bg-[#202020]"
              >
                <a href="#portfolio">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </a>
              </Button>
            </div>

            <Button
              type="button"
              asChild
              className="h-12 w-full justify-center gap-2 rounded-3xl bg-coral px-4 font-manrope text-base font-bold text-white shadow-none hover:bg-coral-dark"
            >
              <a href="#contacts">
                Обсудить проект
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Фото — упирается в низ */}
          <div className="mt-8 flex flex-1 items-end justify-center">
            <img
              src={heroPortrait}
              alt="Евгения Назарова — контент-мейкер"
              className="h-auto w-full max-w-[320px] object-contain object-bottom sm:max-w-[400px]"
            />
          </div>
        </div>

        {/* ===== Десктопная раскладка (lg+) ===== */}
        <div className="relative z-20 hidden min-h-[780px] w-full flex-1 lg:block">
          {/* Текст слева */}
          <div className="absolute left-0 top-[90px] z-30 flex max-w-[380px] flex-col gap-5 xl:top-[120px] xl:max-w-[520px] xl:gap-6">
            <p className="font-manrope text-[17px] font-medium leading-[1.35] text-[#2a2a2acc] xl:text-[19px] 2xl:text-xl">
              Я помогаю экспертам, брендам и предпринимателям создавать стильный
              визуальный контент и вести соцсети так, чтобы аудитория росла, а
              подписчики превращались в клиентов.
            </p>

            <p className="max-w-[360px] font-manrope text-[17px] font-bold leading-[1.35] text-[#2a2a2a] xl:max-w-[470px] xl:text-[19px] 2xl:text-xl">
              Работаю под ключ: от идеи и съёмки до готовых Reels, Stories и
              регулярного ведения.
            </p>

            <ul className="flex flex-wrap gap-2.5 xl:gap-3">
              {serviceTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-2xl bg-coral/20 px-3.5 py-2 font-manrope text-sm font-semibold text-coral xl:px-5 xl:py-2.5"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Карточки справа */}
          <div className="absolute right-0 top-[120px] z-40 grid w-[420px] grid-cols-3 gap-2.5 xl:top-[145px] xl:w-[580px] xl:gap-3 2xl:w-[610px]">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className={`min-w-0 rounded-[20px] border-0 shadow-none xl:rounded-[24px] ${feature.background}`}
                >
                  <CardContent className="flex flex-col gap-1 p-3 xl:p-4">
                    <div className="flex w-full items-start gap-2 xl:gap-2.5">
                      <Icon className="h-6 w-6 shrink-0 text-white xl:h-7 xl:w-7 2xl:h-8 2xl:w-8" />
                      <div className="h-6 flex-1 rounded-xl bg-white/20 xl:h-7 2xl:h-8" />
                    </div>
                    <p className="font-inter text-[11px] font-semibold leading-tight text-white xl:text-[13px] 2xl:text-sm">
                      {feature.title}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Кнопки слева внизу */}
          <div className="absolute bottom-10 left-0 z-50 flex w-[240px] flex-col gap-3 xl:w-[280px]">
            <div className="flex items-center gap-2.5">
              <Button
                type="button"
                variant="secondary"
                asChild
                className="h-12 flex-1 rounded-3xl bg-[#f1f1f1] px-5 font-manrope text-base font-bold text-[#2b2b2bcc] shadow-none hover:bg-[#e7e7e7]"
              >
                <a href="#portfolio">Кейсы</a>
              </Button>

              <Button
                type="button"
                asChild
                aria-label="Открыть кейсы"
                className="h-12 w-12 shrink-0 rounded-3xl bg-[#2b2b2b] p-2.5 shadow-none hover:bg-[#202020]"
              >
                <a href="#portfolio">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </a>
              </Button>
            </div>

            <Button
              type="button"
              asChild
              className="h-12 w-full justify-center gap-2 rounded-3xl bg-coral px-4 font-manrope text-base font-bold text-white shadow-none hover:bg-coral-dark"
            >
              <a href="#contacts">
                Обсудить проект
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Портрет — строго в самый низ секции */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
            <img
              src={heroPortrait}
              alt="Евгения Назарова — контент-мейкер"
              className="block h-auto w-[480px] max-w-none -translate-x-[6%] object-contain object-bottom xl:w-[680px] xl:-translate-x-[6%] 2xl:w-[720px] 2xl:-translate-x-[5%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}