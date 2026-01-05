import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

interface City {
  id: string;
  name: string;
  region: string;
  population: string;
  image: string;
  temp: number;
  timezone: number;
  color: string;
  attractions: Array<{ name: string; description: string; image: string }>;
  news: Array<{ title: string; date: string; source: string }>;
}

const cities: City[] = [
  {
    id: 'moscow',
    name: 'Москва',
    region: 'Москва',
    population: '13.1 млн',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d',
    temp: -5,
    timezone: 3,
    color: 'from-purple-500 to-pink-600',
    attractions: [
      { name: 'Красная площадь', description: 'Главная площадь страны с Кремлем и Храмом Василия Блаженного', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d' },
      { name: 'ВДНХ', description: 'Выставка достижений народного хозяйства', image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568' },
      { name: 'Третьяковская галерея', description: 'Крупнейший музей русского искусства', image: 'https://images.unsplash.com/photo-1566127444032-7efa940c8e37' }
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
    image: 'https://images.unsplash.com/photo-1556610961-2fecc5927173',
    temp: -8,
    timezone: 3,
    color: 'from-blue-500 to-cyan-600',
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
    image: 'https://images.unsplash.com/photo-1590509687778-6b0e3928c9cf',
    temp: -18,
    timezone: 7,
    color: 'from-emerald-500 to-teal-600',
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
    color: 'from-orange-500 to-red-600',
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
    color: 'from-rose-500 to-fuchsia-600',
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
    color: 'from-indigo-500 to-violet-600',
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
    color: 'from-amber-500 to-yellow-600',
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
    color: 'from-sky-500 to-blue-600',
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
    color: 'from-lime-500 to-green-600',
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
    color: 'from-red-500 to-pink-600',
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
    color: 'from-teal-500 to-emerald-600',
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
    color: 'from-purple-600 to-indigo-600',
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
    color: 'from-cyan-500 to-blue-600',
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
    color: 'from-pink-500 to-rose-600',
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
    color: 'from-yellow-500 to-orange-600',
    attractions: [
      { name: 'Мамаев курган', description: 'Главный монумент-ансамбль "Героям Сталинградской битвы"', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f' },
      { name: 'Родина-мать', description: 'Один из самых высоких памятников мира (85 м)', image: 'https://images.unsplash.com/photo-1593462265996-24a083e2df56' },
      { name: 'Музей-панорама', description: 'Панорама "Разгром немецко-фашистских войск под Сталинградом"', image: 'https://images.unsplash.com/photo-1566127444032-7efa940c8e37' }
    ],
    news: [
      { title: 'Волгоград готовится к 80-летию победы в Сталинградской битве', date: '4 января 2026', source: 'V1.ru' },
      { title: 'Набережная получит новую инфраструктуру', date: '2 января 2026', source: 'Волга-медиа' }
    ]
  }
];

const Index = () => {
  const { cityId } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [visitors, setVisitors] = useState(12847);
  const [usdRate, setUsdRate] = useState(95.43);
  const [eurRate, setEurRate] = useState(105.21);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('visitors') || '12847');
    setVisitors(count + 1);
    localStorage.setItem('visitors', String(count + 1));
  }, []);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedCity = cityId ? cities.find(c => c.id === cityId) : null;

  const getCityTime = (timezone: number) => {
    const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
    const cityTime = new Date(utc + 3600000 * timezone);
    return cityTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Города-миллионники России',
        text: 'Интерактивная карта городов России',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована в буфер обмена!');
    }
  };

  if (selectedCity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto px-4 py-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-6 gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад к городам
          </Button>

          <div className="space-y-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {selectedCity.name}
              </h1>
              <p className="text-xl text-muted-foreground">{selectedCity.region} • {selectedCity.population}</p>
            </div>

            <div className="space-y-6 animate-scale-in">
              <h2 className="text-3xl font-heading font-bold flex items-center gap-3">
                <Icon name="MapPin" size={32} className="text-primary" />
                Достопримечательности
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCity.attractions.map((attr, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={attr.image}
                        alt={attr.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-heading font-bold mb-2">{attr.name}</h3>
                      <p className="text-muted-foreground text-sm">{attr.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-heading font-bold flex items-center gap-3">
                <Icon name="Newspaper" size={32} className="text-secondary" />
                Последние новости
              </h2>
              <div className="space-y-4">
                {selectedCity.news.map((item, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-all bg-card/50 backdrop-blur hover:bg-card/70">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon name="Newspaper" size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" size={16} />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Building2" size={16} />
                            {item.source}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
              Города-миллионники России
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 text-sm">
                <Badge variant="outline" className="gap-2 py-1.5 px-3">
                  <span className="text-xs">💵 USD</span>
                  <span className="font-mono font-semibold">{usdRate.toFixed(2)} ₽</span>
                </Badge>
                <Badge variant="outline" className="gap-2 py-1.5 px-3">
                  <span className="text-xs">💶 EUR</span>
                  <span className="font-mono font-semibold">{eurRate.toFixed(2)} ₽</span>
                </Badge>
              </div>
              <Button onClick={handleShare} variant="outline" size="icon" className="hover:bg-primary/20">
                <Icon name="Share2" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 max-w-xl mx-auto animate-scale-in">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск города..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-14 text-lg bg-card/50 backdrop-blur border-2 focus:border-primary transition-all"
            />
          </div>
          {search && filteredCities.length > 0 && (
            <Card className="mt-2 p-2 bg-card/95 backdrop-blur absolute z-10 w-full max-w-xl animate-fade-in">
              {filteredCities.slice(0, 5).map((city) => (
                <button
                  key={city.id}
                  onClick={() => {
                    navigate(`/city/${city.id}`);
                    setSearch('');
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-3"
                >
                  <Icon name="MapPin" size={18} className="text-primary" />
                  <span className="font-medium">{city.name}</span>
                  <span className="text-sm text-muted-foreground ml-auto">{city.region}</span>
                </button>
              ))}
            </Card>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
          {filteredCities.map((city, index) => (
            <button
              key={city.id}
              onClick={() => navigate(`/city/${city.id}`)}
              className="group relative aspect-square animate-scale-in hover:z-10"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 opacity-80 group-hover:opacity-100"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${city.color.split(' ').join(', ')})`,
                  filter: 'blur(20px)',
                }}
              />
              <Card className="relative h-full w-full p-4 flex flex-col justify-between overflow-hidden bg-card/40 backdrop-blur-xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-2xl">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 space-y-2">
                  <h3 className="font-heading font-bold text-lg leading-tight">{city.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">{city.region}</p>
                </div>
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Icon name="Thermometer" size={16} className="text-accent" />
                      <span className="font-mono font-semibold">{city.temp}°C</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} className="text-secondary" />
                      <span className="font-mono font-semibold">{getCityTime(city.timezone)}</span>
                    </span>
                  </div>
                  <Badge variant="secondary" className="w-full justify-center text-xs py-1">
                    {city.population}
                  </Badge>
                </div>
              </Card>
            </button>
          ))}
        </div>
      </main>

      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-xl mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-lg">
            <Icon name="Users" size={20} className="text-primary animate-pulse-glow" />
            <span className="text-muted-foreground">Посетителей:</span>
            <span className="font-mono font-bold text-primary text-xl">{visitors.toLocaleString()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
