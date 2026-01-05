export interface City {
  id: string;
  name: string;
  region: string;
  population: string;
  image: string;
  temp: number;
  timezone: number;
  lat: number;
  lng: number;
  attractions: Array<{ name: string; description: string; image: string }>;
  news: Array<{ title: string; date: string; source: string }>;
}

export const cities: City[] = [
  {
    id: 'moscow',
    name: 'Москва',
    region: 'Москва',
    population: '13.1 млн',
    image: 'https://cdn.poehali.dev/projects/d58285e7-31d6-4f9f-a889-49c5bb17c34f/files/4b81ba79-4671-4aa3-a83e-a94ad0eef3aa.jpg',
    temp: -5,
    timezone: 3,
    lat: 55.7558,
    lng: 37.6173,
    attractions: [
      { name: 'Красная площадь', description: 'Главная площадь страны с Кремлем и Храмом Василия Блаженного', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80' },
      { name: 'ВДНХ', description: 'Выставка достижений народного хозяйства', image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=800&q=80' },
      { name: 'Третьяковская галерея', description: 'Крупнейший музей русского искусства', image: 'https://images.unsplash.com/photo-1566127444032-7efa940c8e37?w=800&q=80' }
    ],
    news: [
      { title: 'Открытие нового участка метро в Москве', date: '2 января 2026', source: 'РИА Новости' },
      { title: 'В столице прошел фестиваль "Путешествие в Рождество"', date: '1 января 2026', source: 'ТАСС' }
    ]
  },
  {
    id: 'spb',
    name: 'Санкт-Петербург',
    region: 'Ленинградская область',
    population: '5.6 млн',
    image: 'https://cdn.poehali.dev/projects/d58285e7-31d6-4f9f-a889-49c5bb17c34f/files/07fb67c9-07a5-4781-9271-d26f0f15e911.jpg',
    temp: -8,
    timezone: 3,
    lat: 59.9311,
    lng: 30.3609,
    attractions: [
      { name: 'Эрмитаж', description: 'Один из крупнейших художественных музеев мира', image: 'https://images.unsplash.com/photo-1556610961-2fecc5927173' },
      { name: 'Петергоф', description: 'Дворцово-парковый ансамбль с фонтанами', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded' },
      { name: 'Исаакиевский собор', description: 'Крупнейший православный храм Санкт-Петербурга', image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445' }
    ],
    news: [
      { title: 'В Петербурге открылась выставка современного искусства', date: '3 января 2026', source: 'Фонтанка.ру' },
      { title: 'Реставрация Мариинского дворца завершена', date: '30 декабря 2025', source: 'РБК Петербург' }
    ]
  },
  {
    id: 'novosibirsk',
    name: 'Новосибирск',
    region: 'Новосибирская область',
    population: '1.6 млн',
    image: 'https://cdn.poehali.dev/projects/d58285e7-31d6-4f9f-a889-49c5bb17c34f/files/2e140830-900b-4a8b-a7bc-ee5d5b455763.jpg',
    temp: -18,
    timezone: 7,
    lat: 55.0084,
    lng: 82.9357,
    attractions: [
      { name: 'Театр оперы и балета', description: 'Крупнейший в России театр оперы и балета', image: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d' },
      { name: 'Академгородок', description: 'Научный центр Сибирского отделения РАН', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f' },
      { name: 'Зоопарк', description: 'Один из крупнейших зоопарков России', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7' }
    ],
    news: [
      { title: 'Новосибирский зоопарк готовится к юбилею', date: '4 января 2026', source: 'НГС.Новости' },
      { title: 'Строительство нового моста через Обь идет по графику', date: '2 января 2026', source: 'Сиб.фм' }
    ]
  },
  {
    id: 'ekaterinburg',
    name: 'Екатеринбург',
    region: 'Свердловская область',
    population: '1.5 млн',
    image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853',
    temp: -12,
    timezone: 5,
    lat: 56.8389,
    lng: 60.6057,
    attractions: [
      { name: 'Храм-на-Крови', description: 'Место гибели царской семьи', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b' },
      { name: 'Плотинка', description: 'Исторический центр города', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' },
      { name: 'Ельцин Центр', description: 'Музейно-выставочный комплекс', image: 'https://images.unsplash.com/photo-1580137189272-c22c56744e39' }
    ],
    news: [
      { title: 'В Екатеринбурге открыли новый ТРЦ', date: '3 января 2026', source: 'Е1.ру' },
      { title: 'Реконструкция набережной продолжится весной', date: '1 января 2026', source: 'URA.ru' }
    ]
  },
  {
    id: 'kazan',
    name: 'Казань',
    region: 'Татарстан',
    population: '1.3 млн',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07',
    temp: -10,
    timezone: 3,
    lat: 55.7887,
    lng: 49.1221,
    attractions: [
      { name: 'Казанский Кремль', description: 'Объект всемирного наследия ЮНЕСКО', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07' },
      { name: 'Мечеть Кул-Шариф', description: 'Главная мечеть Татарстана', image: 'https://images.unsplash.com/photo-1584291527905-6b4f0b1b02fc' },
      { name: 'Улица Баумана', description: 'Главная пешеходная улица города', image: 'https://images.unsplash.com/photo-1555113307-e6f8e8ad2b4b' }
    ],
    news: [
      { title: 'Казань вошла в топ-10 туристических городов России', date: '4 января 2026', source: 'Татар-информ' },
      { title: 'В столице Татарстана открылся новый IT-парк', date: '2 января 2026', source: 'Бизнес Online' }
    ]
  },
  {
    id: 'nn',
    name: 'Нижний Новгород',
    region: 'Нижегородская область',
    population: '1.2 млн',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59',
    temp: -9,
    timezone: 3,
    lat: 56.2965,
    lng: 43.9361,
    attractions: [
      { name: 'Нижегородский Кремль', description: 'Крепость XVI века с 13 башнями', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59' },
      { name: 'Чкаловская лестница', description: '560 ступеней от набережной до памятника Чкалову', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' },
      { name: 'Стрелка', description: 'Место слияния Оки и Волги', image: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527' }
    ],
    news: [
      { title: 'Нижегородское метро продлят до центра города', date: '3 января 2026', source: 'НН.ру' },
      { title: 'Реставрация Кремля завершится в 2026 году', date: '31 декабря 2025', source: 'Время Н' }
    ]
  },
  {
    id: 'chelyabinsk',
    name: 'Челябинск',
    region: 'Челябинская область',
    population: '1.2 млн',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44',
    temp: -15,
    timezone: 5,
    lat: 55.1644,
    lng: 61.4368,
    attractions: [
      { name: 'Кировка', description: 'Пешеходная улица с современными скульптурами', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44' },
      { name: 'Аркаим', description: 'Древнее городище бронзового века', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f' },
      { name: 'Озеро Тургояк', description: 'Одно из чистейших озер России', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' }
    ],
    news: [
      { title: 'В Челябинске открылся новый культурный центр', date: '4 января 2026', source: '74.ru' },
      { title: 'Метеорит Челябинск выставили в музее', date: '2 января 2026', source: 'Вечерний Челябинск' }
    ]
  },
  {
    id: 'samara',
    name: 'Самара',
    region: 'Самарская область',
    population: '1.1 млн',
    image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f',
    temp: -11,
    timezone: 4,
    lat: 53.2001,
    lng: 50.1500,
    attractions: [
      { name: 'Набережная Волги', description: 'Самая длинная набережная в России (5 км)', image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f' },
      { name: 'Ракета-носитель «Союз»', description: 'Памятник космической эре', image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9' },
      { name: 'Жигулевские горы', description: 'Национальный парк Самарская Лука', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' }
    ],
    news: [
      { title: 'Самара готовится к чемпионату по волейболу', date: '3 января 2026', source: 'Волга Ньюс' },
      { title: 'Модернизация метро в Самаре начнется весной', date: '1 января 2026', source: 'Самарские известия' }
    ]
  },
  {
    id: 'omsk',
    name: 'Омск',
    region: 'Омская область',
    population: '1.1 млн',
    image: 'https://images.unsplash.com/photo-1605282003441-a966bb348137',
    temp: -20,
    timezone: 6,
    lat: 54.9885,
    lng: 73.3242,
    attractions: [
      { name: 'Успенский собор', description: 'Кафедральный собор в историческом центре', image: 'https://images.unsplash.com/photo-1605282003441-a966bb348137' },
      { name: 'Любинский проспект', description: 'Главная пешеходная улица города', image: 'https://images.unsplash.com/photo-1555113307-e6f8e8ad2b4b' },
      { name: 'Драматический театр', description: 'Один из старейших театров Сибири', image: 'https://images.unsplash.com/photo-1503095396549-807759245b35' }
    ],
    news: [
      { title: 'Омский театр получил престижную премию', date: '4 января 2026', source: 'Омск-информ' },
      { title: 'Реконструкция центральных улиц завершена', date: '2 января 2026', source: 'Коммерческие вести' }
    ]
  },
  {
    id: 'rostov',
    name: 'Ростов-на-Дону',
    region: 'Ростовская область',
    population: '1.1 млн',
    image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5',
    temp: -2,
    timezone: 3,
    lat: 47.2357,
    lng: 39.7015,
    attractions: [
      { name: 'Большая Садовая', description: 'Главная улица города с историческими зданиями', image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5' },
      { name: 'Левбердон', description: 'Левый берег Дона с пляжами и парками', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0' },
      { name: 'Театр Горького', description: 'Главный драматический театр региона', image: 'https://images.unsplash.com/photo-1503095396549-807759245b35' }
    ],
    news: [
      { title: 'Ростов принимает международный кинофестиваль', date: '3 января 2026', source: 'РостовГазета' },
      { title: 'Набережная Дона получит новую зону отдыха', date: '1 января 2026', source: '161.ру' }
    ]
  },
  {
    id: 'ufa',
    name: 'Уфа',
    region: 'Башкортостан',
    population: '1.1 млн',
    image: 'https://images.unsplash.com/photo-1593462265996-24a083e2df56',
    temp: -13,
    timezone: 5,
    lat: 54.7388,
    lng: 55.9721,
    attractions: [
      { name: 'Монумент Дружбы', description: 'Символ единства народов', image: 'https://images.unsplash.com/photo-1593462265996-24a083e2df56' },
      { name: 'Мечеть Ляля-Тюльпан', description: 'Одна из красивейших мечетей России', image: 'https://images.unsplash.com/photo-1584291527905-6b4f0b1b02fc' },
      { name: 'Парк Победы', description: 'Мемориальный комплекс и зона отдыха', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5' }
    ],
    news: [
      { title: 'Уфа вошла в топ городов для семейного туризма', date: '4 января 2026', source: 'Башинформ' },
      { title: 'Открытие нового музея современного искусства', date: '2 января 2026', source: 'Уфа.РФ' }
    ]
  },
  {
    id: 'krasnoyarsk',
    name: 'Красноярск',
    region: 'Красноярский край',
    population: '1.1 млн',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    temp: -16,
    timezone: 7,
    lat: 56.0153,
    lng: 92.8932,
    attractions: [
      { name: 'Красноярские Столбы', description: 'Уникальные скальные образования', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96' },
      { name: 'Часовня Параскевы Пятницы', description: 'Символ города на 10-рублевой купюре', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b' },
      { name: 'Коммунальный мост', description: 'Самый длинный автомобильный мост через Енисей', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' }
    ],
    news: [
      { title: 'Красноярск готовится к Универсиаде 2027', date: '3 января 2026', source: 'Newslab' },
      { title: 'Парк "Столбы" расширяет туристические маршруты', date: '1 января 2026', source: 'НГС24' }
    ]
  },
  {
    id: 'voronezh',
    name: 'Воронеж',
    region: 'Воронежская область',
    population: '1.0 млн',
    image: 'https://images.unsplash.com/photo-1584291527905-6b4f0b1b02fc',
    temp: -7,
    timezone: 3,
    lat: 51.6720,
    lng: 39.1843,
    attractions: [
      { name: 'Корабль-музей "Гото Предестинация"', description: 'Копия первого линейного корабля русского флота', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96' },
      { name: 'Адмиралтейская площадь', description: 'Центральная площадь с ростовой колонной', image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f' },
      { name: 'Дивногорье', description: 'Музей-заповедник с меловыми пещерами', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' }
    ],
    news: [
      { title: 'В Воронеже открылся центр современного искусства', date: '4 января 2026', source: 'РИА Воронеж' },
      { title: 'Реконструкция набережной завершится летом', date: '2 января 2026', source: 'МОЁ!' }
    ]
  },
  {
    id: 'perm',
    name: 'Пермь',
    region: 'Пермский край',
    population: '1.0 млн',
    image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5',
    temp: -14,
    timezone: 5,
    lat: 58.0105,
    lng: 56.2502,
    attractions: [
      { name: 'Пермская галерея', description: 'Музей с коллекцией пермской деревянной скульптуры', image: 'https://images.unsplash.com/photo-1566127444032-7efa940c8e37' },
      { name: 'Объект "Счастье не за горами"', description: 'Знаменитая надпись на набережной Камы', image: 'https://images.unsplash.com/photo-1555113307-e6f8e8ad2b4b' },
      { name: 'Кунгурская пещера', description: 'Одна из крупнейших карстовых пещер России', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' }
    ],
    news: [
      { title: 'Пермь вошла в топ культурных столиц России', date: '3 января 2026', source: 'Новый Компаньон' },
      { title: 'Театр оперы и балета открыл новый сезон', date: '1 января 2026', source: 'РИА ПроПерм' }
    ]
  },
  {
    id: 'volgograd',
    name: 'Волгоград',
    region: 'Волгоградская область',
    population: '1.0 млн',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f',
    temp: -6,
    timezone: 3,
    lat: 48.7080,
    lng: 44.5133,
    attractions: [
      { name: 'Мамаев курган', description: 'Главный монумент-ансамбль "Героям Сталинградской битвы"', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f' },
      { name: 'Родина-мать', description: 'Один из самых высоких памятников мира (85 м)', image: 'https://images.unsplash.com/photo-1593462265996-24a083e2df56' },
      { name: 'Музей-панорама', description: 'Панорама "Разгром немецко-фашистских войск под Сталинградом"', image: 'https://images.unsplash.com/photo-1566127444032-7efa940c8e37' }
    ],
    news: [
      { title: 'Волгоград готовится к 80-летию победы в Сталинградской битве', date: '4 января 2026', source: 'V1.ru' },
      { title: 'Набережная получит новую инфраструктуру', date: '2 января 2026', source: 'Волга-медиа' }
    ]
  },
  {
    id: 'krasnodar',
    name: 'Краснодар',
    region: 'Краснодарский край',
    population: '1.0 млн',
    image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5',
    temp: 3,
    timezone: 3,
    lat: 45.0355,
    lng: 38.9753,
    attractions: [
      { name: 'Парк Галицкого', description: 'Современный парк у стадиона', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5' },
      { name: 'Улица Красная', description: 'Главная улица города', image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5' },
      { name: 'Сафари-парк', description: 'Зоопарк и сафари-парк', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7' }
    ],
    news: [
      { title: 'Краснодар лидирует по темпам строительства', date: '3 января 2026', source: 'Юга.ру' },
      { title: 'Новый парк откроют весной', date: '1 января 2026', source: 'Кубань 24' }
    ]
  },
  {
    id: 'saratov',
    name: 'Саратов',
    region: 'Саратовская область',
    population: '830 тыс',
    image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f',
    temp: -8,
    timezone: 4,
    lat: 51.5336,
    lng: 46.0342,
    attractions: [
      { name: 'Набережная Космонавтов', description: 'Главная набережная Волги', image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f' },
      { name: 'Проспект Кирова', description: 'Центральная улица города', image: 'https://images.unsplash.com/photo-1555113307-e6f8e8ad2b4b' },
      { name: 'Парк Победы', description: 'Мемориальный комплекс', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5' }
    ],
    news: [
      { title: 'Саратов модернизирует общественный транспорт', date: '3 января 2026', source: 'СарБК' },
      { title: 'Реконструкция театра оперы завершена', date: '1 января 2026', source: 'Саратов 24' }
    ]
  },
  {
    id: 'tyumen',
    name: 'Тюмень',
    region: 'Тюменская область',
    population: '820 тыс',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    temp: -17,
    timezone: 5,
    lat: 57.1522,
    lng: 65.5272,
    attractions: [
      { name: 'Набережная', description: 'Четырехуровневая набережная Туры', image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f' },
      { name: 'Мост Влюбленных', description: 'Символ города', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' },
      { name: 'Цветной бульвар', description: 'Пешеходная улица', image: 'https://images.unsplash.com/photo-1555113307-e6f8e8ad2b4b' }
    ],
    news: [
      { title: 'Тюмень признана самым благоустроенным городом', date: '3 января 2026', source: 'Тюменская правда' },
      { title: 'Новый IT-кластер откроется летом', date: '1 января 2026', source: 'Вслух.ру' }
    ]
  },
  {
    id: 'tolyatti',
    name: 'Тольятти',
    region: 'Самарская область',
    population: '690 тыс',
    image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f',
    temp: -12,
    timezone: 4,
    lat: 53.5303,
    lng: 49.3461,
    attractions: [
      { name: 'Технический музей АВТОВАЗа', description: 'История автомобилестроения', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96' },
      { name: 'Жигулевская ГЭС', description: 'Крупнейшая ГЭС на Волге', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' },
      { name: 'Парк Победы', description: 'Мемориальный комплекс', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5' }
    ],
    news: [
      { title: 'АвтоВАЗ представил новую модель', date: '3 января 2026', source: 'TLT.ru' },
      { title: 'Модернизация дорог продолжается', date: '1 января 2026', source: 'Площадь Свободы' }
    ]
  },
  {
    id: 'izhevsk',
    name: 'Ижевск',
    region: 'Удмуртия',
    population: '650 тыс',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44',
    temp: -14,
    timezone: 4,
    lat: 56.8519,
    lng: 53.2048,
    attractions: [
      { name: 'Музей Калашникова', description: 'История легендарного оружия', image: 'https://images.unsplash.com/photo-1566127444032-7efa940c8e37' },
      { name: 'Набережная', description: 'Главная набережная города', image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f' },
      { name: 'Зоопарк', description: 'Крупный зоопарк Урала', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7' }
    ],
    news: [
      { title: 'Ижевск празднует 260-летие', date: '3 января 2026', source: 'IZHLIFE' },
      { title: 'Новый культурный центр открылся', date: '1 января 2026', source: 'Удмуртия' }
    ]
  },
  {
    id: 'barnaul',
    name: 'Барнаул',
    region: 'Алтайский край',
    population: '630 тыс',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    temp: -19,
    timezone: 7,
    lat: 53.3547,
    lng: 83.7697,
    attractions: [
      { name: 'Демидовская площадь', description: 'Исторический центр', image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f' },
      { name: 'Набережная Оби', description: 'Главная набережная', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' },
      { name: 'Алтайский заповедник', description: 'Природный заповедник', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' }
    ],
    news: [
      { title: 'Барнаул готовится к летнему сезону', date: '3 января 2026', source: 'Толк' },
      { title: 'Реконструкция центра завершена', date: '1 января 2026', source: 'Амител' }
    ]
  },
  {
    id: 'ulyanovsk',
    name: 'Ульяновск',
    region: 'Ульяновская область',
    population: '620 тыс',
    image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f',
    temp: -11,
    timezone: 4,
    lat: 54.3143,
    lng: 48.4033,
    attractions: [
      { name: 'Ленинский мемориал', description: 'Музейный комплекс', image: 'https://images.unsplash.com/photo-1566127444032-7efa940c8e37' },
      { name: 'Императорский мост', description: 'Мост через Волгу', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' },
      { name: 'Парк Победы', description: 'Мемориальный комплекс', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5' }
    ],
    news: [
      { title: 'Ульяновск развивает авиастроение', date: '3 января 2026', source: 'UlPravda' },
      { title: 'Новый парк откроется весной', date: '1 января 2026', source: 'Мозаика' }
    ]
  },
  {
    id: 'vladivostok',
    name: 'Владивосток',
    region: 'Приморский край',
    population: '600 тыс',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    temp: -8,
    timezone: 10,
    lat: 43.1332,
    lng: 131.9113,
    attractions: [
      { name: 'Золотой мост', description: 'Вантовый мост через бухту Золотой Рог', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' },
      { name: 'Остров Русский', description: 'Кампус ДВФУ', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0' },
      { name: 'Токаревский маяк', description: 'Старейший маяк', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96' }
    ],
    news: [
      { title: 'Владивосток принимает международный форум', date: '3 января 2026', source: 'VL.ru' },
      { title: 'Новый терминал порта открылся', date: '1 января 2026', source: 'Приморская газета' }
    ]
  },
  {
    id: 'yaroslavl',
    name: 'Ярославль',
    region: 'Ярославская область',
    population: '600 тыс',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b',
    temp: -10,
    timezone: 3,
    lat: 57.6261,
    lng: 39.8845,
    attractions: [
      { name: 'Спасо-Преображенский монастырь', description: 'Исторический памятник XII века', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b' },
      { name: 'Стрелка', description: 'Место слияния Волги и Которосли', image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f' },
      { name: 'Набережная Волги', description: 'Главная набережная', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' }
    ],
    news: [
      { title: 'Ярославль отмечает 1015-летие', date: '3 января 2026', source: 'YarNews' },
      { title: 'Реставрация исторического центра продолжается', date: '1 января 2026', source: 'Комсомольская правда' }
    ]
  },
  {
    id: 'irkutsk',
    name: 'Иркутск',
    region: 'Иркутская область',
    population: '590 тыс',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    temp: -21,
    timezone: 8,
    lat: 52.2869,
    lng: 104.3050,
    attractions: [
      { name: 'Озеро Байкал', description: 'Самое глубокое озеро в мире', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' },
      { name: '130 квартал', description: 'Историческая зона', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44' },
      { name: 'Богоявленский собор', description: 'Старейший храм города', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b' }
    ],
    news: [
      { title: 'Иркутск развивает туризм на Байкале', date: '3 января 2026', source: 'Irk.ru' },
      { title: 'Новый музей откроется летом', date: '1 января 2026', source: 'АС Байкал' }
    ]
  },
  {
    id: 'khabarovsk',
    name: 'Хабаровск',
    region: 'Хабаровский край',
    population: '580 тыс',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    temp: -22,
    timezone: 10,
    lat: 48.4827,
    lng: 135.0838,
    attractions: [
      { name: 'Набережная Амура', description: 'Главная набережная', image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f' },
      { name: 'Утес', description: 'Смотровая площадка', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96' },
      { name: 'Спасо-Преображенский собор', description: 'Главный храм края', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b' }
    ],
    news: [
      { title: 'Хабаровск модернизирует инфраструктуру', date: '3 января 2026', source: 'Хабаровский Экспресс' },
      { title: 'Новый парк откроется весной', date: '1 января 2026', source: 'RIA27' }
    ]
  },
  {
    id: 'vladikavkaz',
    name: 'Владикавказ',
    region: 'Северная Осетия',
    population: '300 тыс',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    temp: -2,
    timezone: 3,
    lat: 43.0368,
    lng: 44.6681,
    attractions: [
      { name: 'Проспект Мира', description: 'Главная улица города', image: 'https://images.unsplash.com/photo-1555113307-e6f8e8ad2b4b' },
      { name: 'Кармадонское ущелье', description: 'Природная достопримечательность', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' },
      { name: 'Осетинская башня', description: 'Историческая башня', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96' }
    ],
    news: [
      { title: 'Владикавказ развивает горный туризм', date: '3 января 2026', source: 'Осетия-Ирыстон' },
      { title: 'Реконструкция центра завершена', date: '1 января 2026', source: 'Северная Осетия' }
    ]
  },
  {
    id: 'makhachkala',
    name: 'Махачкала',
    region: 'Дагестан',
    population: '600 тыс',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0',
    temp: 5,
    timezone: 3,
    lat: 42.9849,
    lng: 47.5047,
    attractions: [
      { name: 'Джума-мечеть', description: 'Центральная мечеть', image: 'https://images.unsplash.com/photo-1584291527905-6b4f0b1b02fc' },
      { name: 'Набережная', description: 'Набережная Каспийского моря', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0' },
      { name: 'Бархан Сарыкум', description: 'Крупнейший бархан Евразии', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' }
    ],
    news: [
      { title: 'Махачкала модернизирует набережную', date: '3 января 2026', source: 'РИА Дагестан' },
      { title: 'Новый парк откроется летом', date: '1 января 2026', source: 'Черновик' }
    ]
  },
  {
    id: 'tomsk',
    name: 'Томск',
    region: 'Томская область',
    population: '570 тыс',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44',
    temp: -20,
    timezone: 7,
    lat: 56.4977,
    lng: 84.9744,
    attractions: [
      { name: 'Деревянная архитектура', description: 'Уникальные резные дома', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44' },
      { name: 'ТГУ', description: 'Старейший университет Сибири', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f' },
      { name: 'Воскресенская гора', description: 'Исторический центр', image: 'https://images.unsplash.com/photo-1555113307-e6f8e8ad2b4b' }
    ],
    news: [
      { title: 'Томск - столица деревянного зодчества', date: '3 января 2026', source: 'Томский обзор' },
      { title: 'Университет открыл новый корпус', date: '1 января 2026', source: 'ТВ2' }
    ]
  },
  {
    id: 'orenburg',
    name: 'Оренбург',
    region: 'Оренбургская область',
    population: '570 тыс',
    image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f',
    temp: -16,
    timezone: 5,
    lat: 51.7727,
    lng: 55.0988,
    attractions: [
      { name: 'Караван-Сарай', description: 'Памятник архитектуры', image: 'https://images.unsplash.com/photo-1566127444032-7efa940c8e37' },
      { name: 'Пешеходный мост', description: 'Граница Европы и Азии', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19' },
      { name: 'Национальная деревня', description: 'Этнографический комплекс', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44' }
    ],
    news: [
      { title: 'Оренбург отмечает 280 лет', date: '3 января 2026', source: 'ОренбургMedia' },
      { title: 'Реконструкция центра завершена', date: '1 января 2026', source: 'Оренбург 56' }
    ]
  },
  {
    id: 'novokuznetsk',
    name: 'Новокузнецк',
    region: 'Кемеровская область',
    population: '550 тыс',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    temp: -18,
    timezone: 7,
    lat: 53.7557,
    lng: 87.1099,
    attractions: [
      { name: 'Кузнецкая крепость', description: 'Историческая крепость XVIII века', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96' },
      { name: 'Спасо-Преображенский собор', description: 'Главный храм города', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b' },
      { name: 'Бульвар Героев', description: 'Главная улица', image: 'https://images.unsplash.com/photo-1555113307-e6f8e8ad2b4b' }
    ],
    news: [
      { title: 'Новокузнецк модернизирует металлургию', date: '3 января 2026', source: 'НИА Кузбасс' },
      { title: 'Реставрация крепости завершена', date: '1 января 2026', source: 'Новокузнецк Online' }
    ]
  },
  {
    id: 'ryazan',
    name: 'Рязань',
    region: 'Рязанская область',
    population: '540 тыс',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b',
    temp: -9,
    timezone: 3,
    lat: 54.6269,
    lng: 39.6916,
    attractions: [
      { name: 'Рязанский Кремль', description: 'Историко-архитектурный музей', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b' },
      { name: 'Набережная Оки', description: 'Главная набережная', image: 'https://images.unsplash.com/photo-1605091373219-654678ed9f0f' },
      { name: 'Музей ВДВ', description: 'Музей воздушно-десантных войск', image: 'https://images.unsplash.com/photo-1566127444032-7efa940c8e37' }
    ],
    news: [
      { title: 'Рязань празднует День ВДВ', date: '3 января 2026', source: 'Рязанские ведомости' },
      { title: 'Реконструкция Кремля продолжается', date: '1 января 2026', source: '7info' }
    ]
  },
  {
    id: 'kaliningrad',
    name: 'Калининград',
    region: 'Калининградская область',
    population: '500 тыс',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44',
    temp: 0,
    timezone: 2,
    lat: 54.7104,
    lng: 20.4522,
    attractions: [
      { name: 'Кафедральный собор', description: 'Символ города и могила Канта', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b' },
      { name: 'Музей Мирового океана', description: 'Крупнейший морской музей', image: 'https://images.unsplash.com/photo-1566127444032-7efa940c8e37' },
      { name: 'Куршская коса', description: 'Объект ЮНЕСКО', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' }
    ],
    news: [
      { title: 'Калининград развивает туризм', date: '3 января 2026', source: 'Клопс' },
      { title: 'Новый терминал аэропорта открылся', date: '1 января 2026', source: 'Страна Калининград' }
    ]
  }
];
