import React from 'react';
import { useTranslation } from 'react-i18next';

const Translate = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='button-div'>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('jp')}>日本語</button>
      <button onClick={() => changeLanguage('in')}>हिन्दी</button>
    </div>
  );
};

export default Translate;
