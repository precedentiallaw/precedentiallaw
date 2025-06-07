
import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Simplified multilingual banner without context dependency
export const MultilingualBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' }
  ];

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  return (
    <div className="bg-precedential-gold/10 border border-precedential-gold/20 rounded-lg p-4 max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className="w-5 h-5 text-precedential-gold" />
          <span className="text-sm font-medium">Available in Multiple Languages</span>
        </div>
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2"
          >
            <span>{currentLanguage.flag}</span>
            <span>{currentLanguage.name}</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
          
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    setCurrentLanguage(language);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2"
                >
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <p className="text-xs text-gray-600 mt-2">
        Our legal services are available in English and Arabic to better serve the UAE community.
      </p>
    </div>
  );
};

export default MultilingualBanner;
