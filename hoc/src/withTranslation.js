import React, { useState } from 'react';


export default function withTranslation(WrappedComponent, translation) {
  return function (props) {
    const [language, setLanguage] = useState('en');

    const translate = (key) => translation[language][key] || key;

    const changeLanguage = (lang) => {
      setLanguage(lang);
    };

    return (
      <WrappedComponent
        {...props}
        t={translate}
        language={language}
        changeLanguage={changeLanguage}
      />
    );
  };
}





