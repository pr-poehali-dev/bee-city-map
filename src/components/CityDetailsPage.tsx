import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import type { City } from '@/data/cities';

interface CityDetailsPageProps {
  city: City;
  onOpenMap: (lat: number, lng: number, cityName: string, e: React.MouseEvent) => void;
}

export const CityDetailsPage = ({ city, onOpenMap }: CityDetailsPageProps) => {
  const navigate = useNavigate();

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
              {city.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">{city.region} • {city.population}</p>
            <Button
              onClick={(e) => onOpenMap(city.lat, city.lng, city.name, e)}
              className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              <Icon name="MapPin" size={20} />
              Открыть на карте Google Maps
            </Button>
          </div>

          <div className="space-y-6 animate-scale-in">
            <h2 className="text-3xl font-heading font-bold flex items-center gap-3">
              <Icon name="MapPin" size={32} className="text-primary" />
              Достопримечательности
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.attractions.map((attr, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur border-2 border-yellow-500/50 hover:border-yellow-500"
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
              {city.news.map((item, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-all bg-card/50 backdrop-blur hover:bg-card/70 border-2 border-yellow-500/30 hover:border-yellow-500/60">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-yellow-500/20">
                      <Icon name="Newspaper" size={24} className="text-yellow-500" />
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
};
