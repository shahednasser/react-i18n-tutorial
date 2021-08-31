import { useTranslation } from "react-i18next";

function Text () {
  const { t } = useTranslation();

  return (
    <p>{t('text')}</p>
  )
}

export default Text;