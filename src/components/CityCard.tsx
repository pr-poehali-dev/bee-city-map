import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import type { City } from '@/data/cities';

interface CityCardProps {
  city: City;
  currentTime: Date;
  index: number;
  onOpenMap: (lat: number, lng: number, cityName: string, e: React.MouseEvent) => void;
}

export const CityCard = ({ city, currentTime, index, onOpenMap }: CityCardProps) => {
  const navigate = useNavigate();

  const getCityTime = (timezone: number) => {
    const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
    const cityTime = new Date(utc + 3600000 * timezone);
    return cityTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <button
      onClick={() => navigate(`/city/${city.id}`)}
      className="city-card animate-scale-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="city-card-inner">
        <div className="city-image" style={{ backgroundImage: `url(${city.image})` }} />
        <div className="city-overlay" />
        <button
          className="city-map-pin"
          onClick={(e) => onOpenMap(city.lat, city.lng, city.name, e)}
          aria-label={`Открыть ${city.name} на карте`}
        >
          <Icon name="MapPin" size={24} className="text-black" />
        </button>
        <div className="city-content">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-2xl leading-tight">{city.name}</h3>
            <p className="text-sm text-white/80">{city.region}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1.5">
                <Icon name="Thermometer" size={18} className="text-yellow-400" />
                <span className="font-mono font-semibold">{city.temp}°C</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Clock" size={18} className="text-yellow-400" />
                <span className="font-mono font-semibold">{getCityTime(city.timezone)}</span>
              </span>
            </div>
            <Badge className="w-full justify-center bg-yellow-500 text-black hover:bg-yellow-600 font-semibold">
              {city.population}
            </Badge>
          </div>
        </div>
      </div>
    </button>
  );
};
