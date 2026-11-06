import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  InstagramIcon,
  TelegramIcon,
  TikTokIcon,
  VkIcon,
} from '@/components/icons/SocialIcons';

const socialLinks = [
  {
    name: 'Instagram',
    icon: InstagramIcon,
    className:
      'bg-[linear-gradient(35deg,#f9ed32_0%,#ee2a7b_35%,#d22a8a_45%,#8b2ab2_60%,#1b2af0_90%,#002aff_100%)]',
  },
  { name: 'Telegram', icon: TelegramIcon, className: 'bg-[#27a6e5]' },
  { name: 'Вконтакте', icon: VkIcon, className: 'bg-[#0077ff]' },
  { name: 'TikTok', icon: TikTokIcon, className: 'bg-[#111111]' },
];

const workSteps = [
  {
    number: '1',
    title: 'Вы присылаете исходники — я превращаю их в готовый контент',
    text: 'Как правило, монтаж занимает до одного дня. Вы получаете готовое видео без необходимости погружаться в технические детали и тратить на них собственное время.',
  },
  {
    number: '2',
    title: 'Работаем по плану, а не в режиме вечного дедлайна',
    text: 'Если у вас уже есть контент-план, я придерживаюсь согласованных сроков. Если его пока нет — не проблема! Я могу самостоятельно составить план публикаций или помочь вам разработать его вместе, согласовав даты и объём задач.',
  },
  {
    number: '3',
    title: 'Вы всегда знаете, что происходит с вашим контентом',
    text: 'Я заранее сообщаю о готовности видео и предупреждаю о возможных форс-мажорах. Для меня важно, чтобы сотрудничество было прозрачным, а вы могли спокойно планировать свои публикации.',
  },
];

export function AboutAndContactSection() {
  return (
    <section
      id="about"
      className="flex w-full flex-col items-start bg-neutral-50 px-5 pb-10 pt-0 sm:px-8 lg:px-12 lg:pb-[60px] xl:px-[100px]"
    >
      <Card className="w-full overflow-hidden rounded-[32px] border-0 bg-[#505050] shadow-[inset_4px_4px_10px_#a8a8a859,inset_-4px_-4px_10px_#a7a7a740] sm:rounded-[48px] lg:rounded-[60px]">
        <CardContent className="p-6 sm:p-8 lg:p-10 xl:p-[50px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-16">
            {/* ===== Левая колонка: текст ===== */}
            <article className="flex min-w-0 flex-1 flex-col gap-8">
              {/* Заголовок + вступление */}
              <div className="flex flex-col gap-5">
                <h2 className="font-inter text-2xl font-semibold leading-tight text-white sm:text-[28px] lg:text-[32px]">
                  Ваш контент — моя забота.
                  <br className="hidden sm:block" /> Ваше время — ваша свобода.
                </h2>

                <div className="flex flex-col gap-4 font-inter text-[15px] font-normal leading-[1.65] text-[#ffffff99] sm:text-base">
                  <p>
                    Меня зовут Евгения, я — монтажёр коротких видеоформатов.
                    Помогаю превращать исходники в динамичные Reels, Shorts и
                    другие короткие видео, которые удерживают внимание и помогают
                    развивать ваш личный бренд.
                  </p>
                  <p>
                    Работая со мной, вы покупаете не просто монтаж — вы
                    освобождаете время для себя, своих проектов и новых идей.
                    Все заботы о монтаже я беру на себя, чтобы вы могли
                    сосредоточиться на том, что действительно важно.
                  </p>
                  <p>
                    За моими плечами — 2 года опыта в монтаже. Кажется, что это
                    мало? Не предлагаю верить на слово — лучше покажу результат.
                    Загляните в мои кейсы!
                  </p>
                  <p>
                    Помимо монтажа, я могу стать вашим контент-ассистентом:
                    помочь с планированием публикаций, организацией
                    контент-процесса и регулярным выпуском материалов в
                    социальных сетях.
                  </p>
                </div>
              </div>
            </article>

            {/* Разделитель */}
            <div className="hidden w-px self-stretch bg-white/15 lg:block" />

            {/* ===== Правая колонка: контакты ===== */}
            <section
              id="contacts"
              className="flex w-full flex-col gap-5 lg:w-[380px] lg:shrink-0 xl:w-[440px]"
              aria-labelledby="contact-heading"
            >
              <h2
                id="contact-heading"
                className="font-inter text-2xl font-semibold text-white sm:text-[28px]"
              >
                Связаться со мной
              </h2>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {socialLinks.map((socialLink) => {
                  const Icon = socialLink.icon;
                  return (
                    <a
                      key={socialLink.name}
                      href="#contacts"
                      className={`flex min-h-[60px] w-full items-center justify-center gap-2.5 rounded-[20px] px-3 py-4 font-inter text-lg font-medium text-white transition-opacity hover:opacity-90 sm:min-h-[64px] sm:text-xl ${socialLink.className}`}
                    >
                      <Icon className="h-5 w-5 shrink-0 text-white sm:h-6 sm:w-6" />
                      <span className="whitespace-nowrap">{socialLink.name}</span>
                    </a>
                  );
                })}
              </div>

              <div className="flex min-h-[72px] items-center justify-center gap-2.5 rounded-[40px] bg-[#ffffff33] px-5 py-4 shadow-[inset_4px_4px_4px_#ffffff40,inset_-4px_-4px_4px_#ffffff26]">
                <Clock className="h-7 w-7 shrink-0 text-[#ffffffcc] sm:h-8 sm:w-8" />
                <p className="font-inter text-sm font-semibold text-[#ffffffcc] sm:text-base">
                  Отвечаю в течение 5 минут
                </p>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}