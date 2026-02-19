import { createContext, useContext, useState, useCallback } from 'react';
import ja from './translations/ja';
import zhTW from './translations/zh-TW';

const translations = { ja, 'zh-TW': zhTW };
const STORAGE_KEY = 'mimictype-lang';

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch (_) {}
  return 'ja';
}

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    try { localStorage.setItem(STORAGE_KEY, newLang); } catch (_) {}
    document.documentElement.lang = newLang === 'zh-TW' ? 'zh-Hant' : 'ja';
  }, []);

  const t = useCallback((key) => {
    return translations[lang]?.[key] ?? translations['ja']?.[key] ?? key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
