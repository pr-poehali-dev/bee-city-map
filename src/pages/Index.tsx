import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { cities } from '@/data/cities';
import { CityCard } from '@/components/CityCard';
import { CityDetailsPage } from '@/components/CityDetailsPage';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { cityId } = useParams();
  const { language, setLanguage, t } = useLanguage();
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
    city.name.toLowerCase().includes(search.toLowerCase()) ||
    (city.name_en && city.name_en.toLowerCase().includes(search.toLowerCase()))
  );

  const selectedCity = cityId ? cities.find(c => c.id === cityId) : null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Отдых в России города миллионники',
        text: 'Интерактивная карта городов-миллионников России',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована в буфер обмена!');
    }
  };

  const openGoogleMaps = (lat: number, lng: number, cityName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(cityName)}`;
    window.open(url, '_blank');
  };

  if (selectedCity) {
    return <CityDetailsPage city={selectedCity} onOpenMap={openGoogleMaps} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent animate-fade-in">
              {t('title')}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button
                  onClick={() => setLanguage('ru')}
                  variant={language === 'ru' ? 'default' : 'outline'}
                  size="sm"
                  className={language === 'ru' ? 'bg-yellow-500 text-black hover:bg-yellow-600' : 'hover:bg-yellow-500/20 border-yellow-500/50'}
                >
                  RU
                </Button>
                <Button
                  onClick={() => setLanguage('en')}
                  variant={language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  className={language === 'en' ? 'bg-yellow-500 text-black hover:bg-yellow-600' : 'hover:bg-yellow-500/20 border-yellow-500/50'}
                >
                  EN
                </Button>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Badge variant="outline" className="gap-2 py-1.5 px-3 border-yellow-500/50">
                  <span className="text-xs">💵 USD</span>
                  <span className="font-mono font-semibold">{usdRate.toFixed(2)} ₽</span>
                </Badge>
                <Badge variant="outline" className="gap-2 py-1.5 px-3 border-yellow-500/50">
                  <span className="text-xs">💶 EUR</span>
                  <span className="font-mono font-semibold">{eurRate.toFixed(2)} ₽</span>
                </Badge>
              </div>
              <Button onClick={handleShare} variant="outline" size="icon" className="hover:bg-yellow-500/20 border-yellow-500/50">
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
              placeholder={t('search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-14 text-lg bg-card/50 backdrop-blur border-2 border-yellow-500/50 focus:border-yellow-500 transition-all"
            />
          </div>
          {search && filteredCities.length > 0 && (
            <Card className="mt-2 p-2 bg-card/95 backdrop-blur absolute z-10 w-full max-w-xl animate-fade-in border-2 border-yellow-500/50">
              {filteredCities.slice(0, 5).map((city) => (
                <button
                  key={city.id}
                  onClick={() => {
                    window.location.href = `/city/${city.id}`;
                    setSearch('');
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-yellow-500/10 transition-colors flex items-center gap-3"
                >
                  <Icon name="MapPin" size={18} className="text-yellow-500" />
                  <span className="font-medium">{language === 'en' ? (city.name_en || city.name) : city.name}</span>
                  <span className="text-sm text-muted-foreground ml-auto">{language === 'en' ? (city.region_en || city.region) : city.region}</span>
                </button>
              ))}
            </Card>
          )}
        </div>

        <div className="city-grid">
          {filteredCities.map((city, index) => (
            <CityCard
              key={city.id}
              city={city}
              currentTime={currentTime}
              index={index}
              onOpenMap={openGoogleMaps}
            />
          ))}
        </div>
      </main>

      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-xl mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-lg">
            <Icon name="Users" size={20} className="text-yellow-500" />
            <span className="text-muted-foreground">{t('visitors')}</span>
            <span className="font-mono font-bold text-yellow-500 text-xl">{visitors.toLocaleString()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;