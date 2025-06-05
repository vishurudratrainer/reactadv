import withTranslation from "./hoc/withTranslation";

const LoginComponent = ({ t, language, changeLanguage }) => {
  return (
    <div>
      <p>{t('Please Login')}</p>
      <p>Current language: {language}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>

    </div>
  );
};

const i18n = {
  en: {
    "Please Login": 'Please Login',
  },
  es: {
    "Please Login": 'Por favor Iniciar sesión',
  },
  fr: {
    "Please Login": 'Veuillez vous connecter'
  }
};
export default withTranslation(LoginComponent,i18n)