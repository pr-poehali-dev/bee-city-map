import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    title: 'Отдых в России города миллионники',
    search: 'Поиск города...',
    visitors: 'Посетителей:',
    backToCities: 'Назад к городам',
    openOnMap: 'Открыть на карте Google Maps',
    attractions: 'Достопримечательности',
    news: 'Последние новости',
    population: 'Население',
    temperature: 'Температура',
    time: 'Время',
    region: 'Регион',
  },
  en: {
    title: 'Rest in Russia - Million-Plus Cities',
    search: 'Search city...',
    visitors: 'Visitors:',
    backToCities: 'Back to Cities',
    openOnMap: 'Open on Google Maps',
    attractions: 'Attractions',
    news: 'Latest News',
    population: 'Population',
    temperature: 'Temperature',
    time: 'Time',
    region: 'Region',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
