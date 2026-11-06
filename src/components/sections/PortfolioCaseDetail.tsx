import { ArrowLeft, ExternalLink, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { PortfolioCase } from '@/data/portfolio';

type Props = {
  caseItem: PortfolioCase;
  onBack: () => void;
};

export function PortfolioCaseDetail({ caseItem, onBack }: Props) {
  return (
    <section className="w-full bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-[60px] xl:px-[100px]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8">
        {/* Назад */}
        <button
          type="button"
          onClick={onBack}
          className="inline-flex w-fit items-center gap-2 font-inter text-base font-medium text-[#2a2a2a99] transition-colors hover:text-[#2a2a2a]"
        >
          <ArrowLeft className="h-5 w-5" />
          Назад к кейсам
        </button>

        {/* Шапка */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          <img
            src={caseItem.image}
            alt={caseItem.title}
            className="h-[240px] w-full rounded-[24px] object-cover sm:h-[320px] lg:h-[360px] lg:w-[480px] lg:shrink-0"
          />

          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-coral/15 px-4 py-1.5 font-inter text-sm font-semibold text-coral">
                {caseItem.priceLabel}
              </span>
              {caseItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-200/80 px-3 py-1 font-inter text-xs font-medium text-[#2a2a2a99]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-inter text-3xl font-semibold text-[#2a2a2a] sm:text-4xl">
              {caseItem.title}
            </h1>

            <p className="font-inter text-base leading-relaxed text-[#2a2a2a99] sm:text-lg">
              {caseItem.fullDescription}
            </p>

            {caseItem.results.length > 0 && (
              <ul className="flex flex-col gap-2">
                {caseItem.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-2 font-inter text-base text-[#2a2a2a]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {result}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Работы / ссылки */}
        {caseItem.works.length > 0 && (
          <div className="flex flex-col gap-5">
            <h2 className="font-inter text-2xl font-semibold text-[#2a2a2a]">
              Примеры работ
            </h2>

            {/* Предупреждение про VPN */}
            {caseItem.works.some((w) => w.requiresVpn) && (
              <div className="flex items-start gap-3 rounded-[20px] border border-amber-200 bg-amber-50 px-4 py-3.5">
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="font-inter text-sm leading-relaxed text-amber-900 sm:text-base">
                  Некоторые ссылки ведут на Instagram. В ряде регионов ресурс может
                  не открываться без VPN.
                </p>
              </div>
            )}

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {caseItem.works.map((work) => (
                <li key={work.id}>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-[20px] border border-[#efefef] bg-white px-5 py-4 transition-colors hover:border-coral/40 hover:bg-coral/5"
                  >
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <span className="truncate font-inter text-base font-medium text-[#2a2a2a] group-hover:text-coral">
                        {work.title}
                      </span>
                      <span className="font-inter text-xs text-[#2a2a2a66]">
                        {work.platform === 'instagram' ? 'Instagram Reels' : work.platform}
                        {work.requiresVpn ? ' · может потребоваться VPN' : ''}
                      </span>
                    </div>
                    <ExternalLink className="h-5 w-5 shrink-0 text-[#2a2a2a55] transition-colors group-hover:text-coral" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            type="button"
            asChild
            className="h-12 rounded-[20px] bg-coral px-6 font-inter text-base font-semibold text-white hover:bg-[#ed5e5d]"
          >
            <a href="#contacts">Обсудить похожий проект</a>
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="h-12 rounded-[20px] border-[#2a2a2a33] px-6 font-inter text-base font-medium text-[#2a2a2a]"
          >
            Вернуться к кейсам
          </Button>
        </div>
      </div>
    </section>
  );
}