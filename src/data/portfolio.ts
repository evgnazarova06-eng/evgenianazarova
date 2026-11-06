export type PortfolioCase = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  priceLabel: string;
  image: string;
  tags: string[];
  results: string[];
  works: {
    id: string;
    title: string;
    url: string;
    platform: 'instagram';
    requiresVpn: boolean;
  }[];
};

export const portfolioCases: PortfolioCase[] = [
  {
    id: 1,
    slug: 'reel-degqihe',
    title: 'Длинный Reels с полной проработкой',
    shortDescription:
      'Ролик от 1,5 минут: наложения, субтитры, саунд-дизайн и цветокор.',
    fullDescription:
      'Монтаж ролика хронометражем от 1,5 минут. Добавлены наложения, субтитры, саунд-дизайн и работа с цветокоррекцией — чтобы видео выглядело цельно и удерживало внимание до конца.',
    price: 1000,
    priceLabel: '1000 ₽',
    image: '/cases/case_1.jpg',
    tags: ['Instagram', 'Reels', 'Цветокор', 'Саунд-дизайн'],
    results: [
      'Хронометраж от 1,5 минут',
      'Наложения и субтитры',
      'Саунд-дизайн',
      'Цветокоррекция',
    ],
    works: [
      {
        id: 'w1',
        title: 'Смотреть в Instagram',
        url: 'https://www.instagram.com/reel/DegqiHeRuDP/?psln=MWNldGJneXZjMzczZQ==',
        platform: 'instagram',
        requiresVpn: true,
      },
    ],
  },
  {
    id: 2,
    slug: 'reel-dezftux',
    title: 'Влог с вечеринки',
    shortDescription:
      'Лайф-контент: цвето- и светокоррекция, субтитры, наложения, саунд-дизайн.',
    fullDescription:
      'Влог с вечеринки в лайф-формате. Проработаны цвето- и светокоррекция, добавлены субтитры, наложения и саунд-дизайн — атмосфера события передаётся без лишней «студийности».',
    price: 750,
    priceLabel: '750 ₽',
    image: '/cases/case_2.jpg',
    tags: ['Instagram', 'Reels', 'Влог', 'Лайф'],
    results: [
      'Лайф-формат',
      'Цвето- и светокоррекция',
      'Субтитры и наложения',
      'Саунд-дизайн',
    ],
    works: [
      {
        id: 'w1',
        title: 'Смотреть в Instagram',
        url: 'https://www.instagram.com/reel/DeZfTuxMIp7/?cplk=cHN0NWJjNHptcmZm',
        platform: 'instagram',
        requiresVpn: true,
      },
    ],
  },
  {
    id: 3,
    slug: 'reel-ddj0cfo',
    title: 'Сторителлинг в лайф-формате',
    shortDescription:
      'История в лайф-подаче: субтитры, саунд-дизайн и аккуратные наложения.',
    fullDescription:
      'Сторителлинг в лайф-формате. Добавлены субтитры, саунд-дизайн и наложения — текст и картинка работают вместе, историю удобно смотреть и со звуком, и без него.',
    price: 750,
    priceLabel: '750 ₽',
    image: '/cases/case_3.jpg',
    tags: ['Instagram', 'Reels', 'Сторителлинг', 'Лайф'],
    results: [
      'Сторителлинг',
      'Лайф-формат',
      'Субтитры',
      'Саунд-дизайн и наложения',
    ],
    works: [
      {
        id: 'w1',
        title: 'Смотреть в Instagram',
        url: 'https://www.instagram.com/reel/DdJ0cfoMQto/?cplk=azhiZnllMzV6ZjE5',
        platform: 'instagram',
        requiresVpn: true,
      },
    ],
  },
  {
    id: 4,
    slug: 'reel-dewxp6h',
    title: 'Экспертный Reels с «говорящей головой»',
    shortDescription:
      'От 1,5 минут: заголовки, субтитры, оформление talking head, цвет и свет.',
    fullDescription:
      'Ролик хронометражем от 1,5 минут с акцентом на экспертную подачу. Проработаны заголовки и субтитры, оформлена «говорящая голова», выполнена цвето- и светокоррекция — видео выглядит аккуратно и читается с первых секунд.',
    price: 1000,
    priceLabel: '1000 ₽',
    image: '/cases/case_4.jpg',
    tags: ['Instagram', 'Reels', 'Talking head', 'Экспертный контент'],
    results: [
      'Хронометраж от 1,5 минут',
      'Заголовки и субтитры',
      'Оформление talking head',
      'Цвето- и светокоррекция',
    ],
    works: [
      {
        id: 'w1',
        title: 'Смотреть в Instagram',
        url: 'https://www.instagram.com/reel/DeWXp6hRqOX/?dlrf=M3o0OGExcXhvM2xj',
        platform: 'instagram',
        requiresVpn: true,
      },
    ],
  },
  {
    id: 5,
    slug: 'reel-depjotl',
    title: 'Длинный экспертный Reels',
    shortDescription:
      'От 1,5 минут: заголовки, субтитры, talking head, цвето- и светокоррекция.',
    fullDescription:
      'Монтаж ролика от 1,5 минут для экспертного контента. Работа с заголовками и субтитрами, оформление «говорящей головы», проработка цвето- и светокоррекции — всё заточено под удержание и понятную подачу мысли.',
    price: 1000,
    priceLabel: '1000 ₽',
    image: '/cases/case_5.jpg',
    tags: ['Instagram', 'Reels', 'Talking head', 'Экспертный контент'],
    results: [
      'Хронометраж от 1,5 минут',
      'Заголовки и субтитры',
      'Оформление talking head',
      'Цвето- и светокоррекция',
    ],
    works: [
      {
        id: 'w1',
        title: 'Смотреть в Instagram',
        url: 'https://www.instagram.com/reel/DePJOTLIgOk/?rpxt=a2U3cno2Y2NuazEy',
        platform: 'instagram',
        requiresVpn: true,
      },
    ],
  },
  {
    id: 6,
    slug: 'reel-debryzq',
    title: 'Прогрев к запуску курса',
    shortDescription:
      'Короткий ролик: текст, переходы, отбор сильных кадров под старт продаж.',
    fullDescription:
      'Короткое видео-прогрев перед стартом продаж курса. Оформление текста, переходы и отбор лучших кадров — ролик быстро доносит оффер и подводит к действию.',
    price: 500,
    priceLabel: '500 ₽',
    image: '/cases/case_6.jpg',
    tags: ['Instagram', 'Reels', 'Прогрев', 'Запуск'],
    results: [
      'Формат прогрева',
      'Оформление текста',
      'Переходы',
      'Отбор лучших кадров',
    ],
    works: [
      {
        id: 'w1',
        title: 'Смотреть в Instagram',
        url: 'https://www.instagram.com/reel/DebRyzQxCjZ/?obrf=MXFmdjVob2E5N2lnOA==',
        platform: 'instagram',
        requiresVpn: true,
      },
    ],
  },
  {
    id: 7,
    slug: 'reel-deelxf9',
    title: 'Короткий лайф-Reels',
    shortDescription:
      'Лайф-формат: текст, переходы и отбор лучших кадров.',
    fullDescription:
      'Короткое видео в лайф-формате. Оформление текста, переходы и отбор сильных кадров — лёгкий, живой ролик без перегруза эффектами.',
    price: 500,
    priceLabel: '500 ₽',
    image: '/cases/case_7.jpg',
    tags: ['Instagram', 'Reels', 'Лайф'],
    results: [
      'Лайф-формат',
      'Оформление текста',
      'Переходы',
      'Отбор лучших кадров',
    ],
    works: [
      {
        id: 'w1',
        title: 'Смотреть в Instagram',
        url: 'https://www.instagram.com/reel/DeELxf9MkCJ/?rpxt=MXNrZnNya3E2dHg2aw==',
        platform: 'instagram',
        requiresVpn: true,
      },
    ],
  },
];

export function getPortfolioCaseBySlug(slug: string): PortfolioCase | undefined {
  return portfolioCases.find((item) => item.slug === slug);
}

export function getPortfolioCaseById(id: number): PortfolioCase | undefined {
  return portfolioCases.find((item) => item.id === id);
}