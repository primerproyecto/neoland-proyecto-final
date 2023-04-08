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
    const stickyValue = window.localStorage.getItem('IDIOMA_LOCALE');
    console.log(stickyValue);
    return stickyValue !== null
      ? JSON.parse(stickyValue) === 'es'
        ? Spanish
        : English
      : English;
  });

  const handleLanguage = (e) => {
    console.log('cambiamos', e.target.value);
    setLocale(e.target.value);
    setMessages(e.target.value === 'en' ? English : Spanish);
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
