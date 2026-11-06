import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const compactServices = [
  {
    title: 'Съёмка камерных мероприятий',
    description:
      'Мобильная съёмка небольших мероприятий с последующим монтажом материала. Подходит для дней рождения, небольших праздников, встреч, мероприятий и других событий, которые хочется сохранить в формате фото/видео-контента.',
    price: '1000 ₽/час',
    color: '#fc9a54',
  },
  {
    title: 'Создание постов',
    description:
      'Создание готовых публикаций для Telegram, VK и Instagram. В услугу входит не только написание текста, но и визуальное оформление публикации.',
    price: 'от 1000 ₽ за пост',
    color: '#fc54e5',
  },
];

const contentManagerFeatures = [
  'Ведение аккаунта/сообщества',
  'Составление контент-плана',
  'Обсуждение будущего контента и идей',
  'Публикация материалов',
];

interface ServiceActionProps {
  price: string;
  color: string;
  className?: string;
}

function ServiceAction({ price, color, className = '' }: ServiceActionProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      asChild
      className={`h-auto shrink-0 gap-2.5 rounded-[30px] bg-white px-[30px] py-2.5 font-manrope text-xl font-bold hover:bg-white/90 ${className}`}
      style={{ color }}
    >
      <a href="#contacts">
        <span>{price}</span>
        <ArrowRight className="h-6 w-6" style={{ color }} />
      </a>
    </Button>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="flex w-full flex-col items-start gap-[30px] bg-neutral-50 px-5 py-10 sm:px-8 lg:px-[100px] lg:py-[60px]"
    >
      <h2
        id="services-heading"
        className="font-inter text-2xl font-semibold text-[#2a2a2a] sm:text-3xl lg:text-[32px]"
      >
        Услуги
      </h2>

      <div className="grid w-full grid-cols-1 items-stretch gap-[30px] xl:grid-cols-2">
        {/* Добавили h-full к article, чтобы колонка растягивала карточку */}
        <article className="min-w-0 h-full">
          {/* Карточке гарантируем h-full */}
          <Card className="relative h-full min-h-[505px] overflow-hidden rounded-[40px] border-0 bg-coral shadow-[inset_6px_6px_5px_#ffffff40] lg:rounded-[60px]">
            <img
              className="pointer-events-none absolute bottom-0 right-0 h-[343px] w-[435px] object-cover opacity-40 sm:opacity-60 lg:opacity-100"
              alt=""
              aria-hidden="true"
              src="/images/Frame_58_1.png"
            />
            {/* Контенту задаем flex-auto и flex-col, чтобы нижний текст прижимался корректно */}
            <CardContent className="relative z-10 flex h-full min-h-[505px] flex-col items-start p-6 sm:p-10 justify-between">
              <div className="max-w-[735px]">
                <h3 className="font-manrope text-2xl font-bold text-white lg:text-3xl">
                  Монтаж Reels
                </h3>
                <p className="mt-[30px] font-manrope text-sm font-medium text-[#ffffffcc] lg:text-xl">
                  Монтаж коротких вертикальных видео из ваших готовых
                  исходников. В работу входит нарезка материала, добавление
                  звуковых эффектов, субтитров, цветокоррекция, вставки и
                  визуальные наложения.
                </p>
                <ServiceAction
                  price="от 500 ₽"
                  color="#fd6d6c"
                  className="mt-[30px] text-xl lg:text-2xl"
                />
              </div>
              <p className="mt-auto flex items-center justify-center text-center font-inter text-xs font-medium text-[#fd6d6c] bg-white rounded-2xl px-3 py-2">
                Итоговая стоимость зависит от технического задания и сложности монтажа.
              </p>

            </CardContent>
          </Card>
        </article>

        {/* Правая колонка. Добавили h-full, чтобы flex растягивался на всю высоту grid */}
        <div className="flex min-w-0 flex-col gap-[30px] h-full">
          {compactServices.map((service) => (
            <article key={service.title} className="flex-1 h-full">
              <Card
                className="h-full min-h-[237px] overflow-hidden rounded-[40px] border-0 shadow-[inset_6px_6px_5px_#ffffff40] lg:rounded-[50px]"
                style={{ backgroundColor: service.color }}
              >
                <CardContent className="flex h-full flex-col items-end justify-between gap-5 p-6 sm:p-[30px]">
                  <h3 className="w-full font-manrope text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="w-full font-manrope text-lg font-medium leading-6 text-[#ffffffcc] lg:text-base">
                    {service.description}
                  </p>
                  <ServiceAction price={service.price} color={service.color} />
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>


      <article className="w-full">
        <Card className="relative min-h-[429px] overflow-hidden rounded-[40px] border-0 bg-coral-light shadow-[inset_6px_6px_5px_#ffffff40] lg:rounded-[60px]">
          <img
            className="pointer-events-none absolute right-[90px] top-1/2 h-[404px] w-[570px] -translate-y-1/2 object-cover opacity-30 sm:opacity-50 lg:opacity-100"
            alt=""
            aria-hidden="true"
            src="/images/Frame_71_1.png"
          />
          <CardContent className="relative z-10 flex max-w-[973px] flex-col items-start gap-[30px] p-6 sm:p-10">
            <h3 className="font-manrope text-3xl font-bold text-white lg:text-4xl">
              Контент-менеджер
            </h3>
            <p className="font-manrope text-xl font-medium text-[#ffffffcc] lg:text-2xl">
              Комплексное ведение аккаунта или сообщества в Telegram, Instagram
              или VK
            </p>
            <div className="flex w-full flex-col items-start gap-2.5">
              <p className="font-manrope text-xl font-medium text-[#ffffffcc] lg:text-2xl">
                В работу входит:
              </p>
              <ul
                className="flex flex-wrap items-start gap-2.5"
                aria-label="В работу входит"
              >
                {contentManagerFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-[30px] bg-[#ffffff33] px-5 py-2.5 font-manrope text-base font-medium text-white lg:text-xl"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <ServiceAction
              price="от 12 000 ₽ в месяц"
              color="#ffaba7"
              className="text-xl lg:text-2xl"
            />
          </CardContent>
        </Card>
      </article>
    </section>
  );
}
