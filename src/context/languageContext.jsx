import React, { createContext, useState } from 'react';
// gestion de idiomas
import { IntlProvider } from 'react-intl';

//custom hook useStickyStatus
import { useStickyState } from '../hooks/useStickyState';
import English from '../lang/en.json';
import Spanish from '../lang/es.json';

export const contextLanguage = createContext();

const ProviderLanguage = (props) => {
  const [locale, setLocale] = useStickyState('en', 'IDIOMA_LOCALE');
  /* const [messages, setMessages] = useState(recoverLang()); */
  const [messages, setMessages] = useState(() => {
    const idioma_app = window.localStorage.getItem('IDIOMA_LOCALE');
    return idioma_app !== null
      ? JSON.parse(idioma_app) === 'es'
        ? Spanish
        : English
      : English;
  });

  const handleLanguage = (e) => {
    setLocale(e.target.value);
    setMessages(e.target.value === 'en' ? English : Spanish);
    window.localStorage.setItem('IDIOMA_LOCALE', e.target.value);
  };
  return (
    <contextLanguage.Provider value={{ locale, setLocale, handleLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </contextLanguage.Provider>
  );
};

export default ProviderLanguage;
