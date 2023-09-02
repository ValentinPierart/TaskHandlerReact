import styles from "./Language.module.css";
import { useTranslation } from "react-i18next";

class Language {
  protected tag: string;
  protected label: string;
  protected code: string;

  constructor(label: string, tag: string, code: string) {
    this.label = label;
    this.tag = tag;
    this.code = code;
  }

  getLabel(): string {
    return this.label;
  }
  getTag(): string {
    return this.tag;
  }
  getCode(): string {
    return this.code;
  }

  getClassName(): string {
    return this.getTag() + " " + styles.language;
  }
}

// TODO: create a config file
const LANGUAGES = [
  new Language("English", "fi fi-gb", "en"),
  new Language("Français", "fi fi-fr", "fr"),
  new Language("中文", "fi fi-cn", "cn"),
];

const LANGUAGES_MAP: Map<string, Language> = new Map();
LANGUAGES.forEach((language) =>
  LANGUAGES_MAP.set(language.getCode(), language)
);

const Languages = () => {
  const { i18n } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <select
      className={styles["language-container"]}
      defaultValue={i18n.language}
      onChange={onChangeLang}
    >
      {LANGUAGES?.map((language: Language) => (
        <option
          key={language.getCode()}
          value={language.getCode()}
          title={language.getLabel()}
          className={language.getClassName()}
        >
          {language.getLabel()}
        </option>
      ))}
    </select>
  );
};

export default Languages;
