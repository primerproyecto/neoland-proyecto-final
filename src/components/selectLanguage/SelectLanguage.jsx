import { useContext } from 'react';

import { contextLanguage } from '../../context/languageContext';

const SelectLanguage = () => {
  const { locale, handleLanguage } = useContext(contextLanguage);
  return (
    <select
      name="language"
      id="language"
      onChange={handleLanguage}
      defaultValue={locale === 'en' ? 'en' : 'es'}
    >
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
};

export default SelectLanguage;
