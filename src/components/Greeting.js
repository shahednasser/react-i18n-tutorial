import { useTranslation } from "react-i18next";

function Greeting () {
  const { t } = useTranslation();

  return (
    <h1>{t('greeting')}</h1>
  );
}

export default Greeting;