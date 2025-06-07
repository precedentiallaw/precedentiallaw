
import React, { useState, useContext, createContext } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', direction: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', direction: 'rtl' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', direction: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', direction: 'rtl' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', direction: 'ltr' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', direction: 'ltr' }
];

// Translations object (simplified - in production would be externalized)
const translations: Record<string, Record<string, string>> = {
  en: {
    'contact.title': 'Contact Us',
    'services.title': 'Our Services',
    'about.title': 'About Us',
    'consultation.book': 'Book Consultation',
    'phone.call': 'Call Now',
    'emergency.available': 'Emergency Available 24/7'
  },
  ar: {
    'contact.title': 'اتصل بنا',
    'services.title': 'خدماتنا',
    'about.title': 'معلومات عنا',
    'consultation.book': 'احجز استشارة',
    'phone.call': 'اتصل الآن',
    'emergency.available': 'متاح للطوارئ ٢٤/٧'
  },
  hi: {
    'contact.title': 'संपर्क करें',
    'services.title': 'हमारी सेवाएं',
    'about.title': 'हमारे बारे में',
    'consultation.book': 'परामर्श बुक करें',
    'phone.call': 'अभी कॉल करें',
    'emergency.available': 'आपातकाल के लिए 24/7 उपलब्ध'
  }
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.direction;
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-precedential-gold/10"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[250px] z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">Select Language</p>
              <p className="text-xs text-gray-500">Choose your preferred language</p>
            </div>
            
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setLanguage(language);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{language.flag}</span>
                  <div>
                    <div className="font-medium text-gray-900">{language.name}</div>
                    <div className="text-sm text-gray-500">{language.nativeName}</div>
                  </div>
                </div>
                {currentLanguage.code === language.code && (
                  <Check className="w-4 h-4 text-precedential-gold" />
                )}
              </button>
            ))}
            
            <div className="px-4 py-2 border-t border-gray-100 mt-2">
              <p className="text-xs text-gray-500">
                Legal consultation available in all languages
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const MultilingualBanner: React.FC = () => {
  const { currentLanguage } = useLanguage();
  
  return (
    <div className="bg-precedential-gold/10 border-l-4 border-precedential-gold p-4 rounded-lg">
      <div className="flex items-start">
        <Globe className="w-5 h-5 text-precedential-gold mt-0.5 mr-3" />
        <div>
          <h3 className="font-semibold text-precedential-black mb-1">
            Multilingual Legal Services
          </h3>
          <p className="text-sm text-precedential-black/70 mb-2">
            Our legal team provides comprehensive consultation and representation in multiple languages 
            to serve Dubai's diverse international community.
          </p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span key={lang.code} className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded text-xs">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { LanguageSelector, MultilingualBanner };
export default LanguageSelector;
