import { CalendarDays, CheckCircle2, ClipboardList, Sparkles } from 'lucide-react';

const workSteps = [
  {
    number: '01',
    title: 'Вы присылаете исходники — я превращаю их в готовый контент',
    text: 'Как правило, монтаж занимает до одного дня. Вы получаете готовое видео без необходимости погружаться в технические детали и тратить на них собственное время.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Работаем по плану, а не в режиме вечного дедлайна',
    text: 'Если у вас уже есть контент-план, я придерживаюсь согласованных сроков. Если его пока нет — не проблема: могу составить план сама или вместе с вами, согласовав даты и объём задач.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Вы всегда знаете, что происходит с вашим контентом',
    text: 'Заранее сообщаю о готовности видео и предупреждаю о возможных форс-мажорах. Сотрудничество прозрачное — вы спокойно планируете публикации.',
    icon: CheckCircle2,
  },
];

export function WorkProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="work-process-heading"
      className="w-full bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-[60px] xl:px-[100px]"
    >
      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-10 lg:gap-14">
        {/* Заголовок */}
        <div className="flex max-w-[640px] flex-col gap-3">
          <p className="font-manrope text-sm font-semibold uppercase tracking-wider text-coral">
            Процесс
          </p>
          <h2
            id="work-process-heading"
            className="font-inter text-2xl font-semibold text-[#2a2a2a] sm:text-3xl lg:text-[32px]"
          >
            Как строится наша работа
          </h2>
          <p className="font-inter text-base leading-relaxed text-[#2a2a2a99] sm:text-lg">
            Понятный порядок, без сюрпризов по срокам и оплате. Вы занимаетесь
            своим делом — я закрываю контент.
          </p>
        </div>

        {/* Шаги */}
        <ol className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {workSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number}>
                <article className="flex h-full flex-col gap-5 rounded-[28px] border border-[#efefef] bg-white p-6 shadow-none sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <span className="font-inter text-3xl font-semibold tabular-nums text-[#2a2a2a14]">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-2.5">
                    <h3 className="font-inter text-lg font-semibold leading-snug text-[#2a2a2a] sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="font-inter text-[15px] leading-relaxed text-[#2a2a2a99] sm:text-base">
                      {step.text}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        {/* Стоимость + старт — две колонки на десктопе */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Стоимость и оплата */}
          <article className="flex flex-col gap-5 rounded-[28px] border border-[#efefef] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#505050] text-white">
                <CalendarDays className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="font-inter text-xl font-semibold text-[#2a2a2a] sm:text-2xl">
                Стоимость и оплата
              </h3>
            </div>

            <div className="flex flex-col gap-4 font-inter text-[15px] leading-relaxed text-[#2a2a2a99] sm:text-base">
              <p>
                Без неожиданных расходов. Стоимость соответствует прайсу, который
                я направляю заранее. Срочная задача — двойной тариф: возможность
                и сроки согласуем с учётом текущей загрузки.
              </p>
              <p className="font-medium text-[#2a2a2a]">
                При долгосрочном сотрудничестве оплата дважды в месяц:
              </p>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-start gap-3 rounded-2xl bg-neutral-50 px-4 py-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/15 font-inter text-xs font-bold text-coral">
                    1
                  </span>
                  <span>
                    <span className="font-semibold text-[#2a2a2a]">1-го числа</span>
                    {' '}— за первую половину месяца
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-neutral-50 px-4 py-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/15 font-inter text-xs font-bold text-coral">
                    15
                  </span>
                  <span>
                    <span className="font-semibold text-[#2a2a2a]">15-го числа</span>
                    {' '}— за вторую половину месяца
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* С чего начнём */}
          <article className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-[#505050] p-6 text-white sm:p-8">
            {/* мягкий акцент */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-coral/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-coral/15 blur-3xl"
            />

            <div className="relative flex flex-col gap-4">
              <h3 className="font-inter text-xl font-semibold sm:text-2xl">
                С чего начнём?
              </h3>
              <p className="font-inter text-[15px] leading-relaxed text-white/75 sm:text-base">
                Предлагаю начать с согласования контент-плана. Так мы заранее
                определим объём работы, частоту публикаций и сроки — вам будет
                проще ориентироваться в бюджете.
              </p>
              <p className="font-inter text-[15px] leading-relaxed text-white/75 sm:text-base">
                Моя задача — не просто смонтировать видео, а сделать создание
                контента понятным, комфортным и системным процессом.
              </p>
            </div>

            <p className="relative font-inter text-base font-semibold leading-snug text-white sm:text-lg">
              Вы занимаетесь своим делом — я забочусь о том, чтобы ваш контент
              выходил вовремя.
            </p>

            <a
              href="#contacts"
              className="relative inline-flex h-12 w-fit items-center justify-center rounded-[20px] bg-coral px-6 font-inter text-base font-semibold text-white transition-colors hover:bg-[#ed5e5d]"
            >
              Обсудить проект
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}