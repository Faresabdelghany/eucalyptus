import { createContext, useContext, useState, useEffect } from 'react';
import { t as tHelper } from '../i18n/index.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('lang') || 'en'
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);

  const setLang = (newLang) => setLangState(newLang);
  const tBound = (key) => tHelper(lang, key);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: tBound }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
