import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import ENtranslation from './i18n/locales/en/translation.json'
import JAtranslation from './i18n/locales/ja/translation.json'
import THtranslation from './i18n/locales/th/translation.json'
import zhHanstranslation from './i18n/locales/zh-Hans/translation.json'
import zhHanttranslation from './i18n/locales/zh-Hant/translation.json'
import { locales } from '../locales/resources'
// 同步导入所有 JSON 文件
const deDeLang = import.meta.globEager('./i18n/locales/de-DE/*.json')
const enUsLang = import.meta.globEager('./i18n/locales/en-US/*.json')
const esEsLang = import.meta.globEager('./i18n/locales/es-ES/*.json')
const frFrLang = import.meta.globEager('./i18n/locales/fr-FR/*.json')
const itItLang = import.meta.globEager('./i18n/locales/it-IT/*.json')
const jaJpLang = import.meta.globEager('./i18n/locales/ja-JP/*.json')
const koKrLang = import.meta.globEager('./i18n/locales/ko-KR/*.json')
const nlNlLang = import.meta.globEager('./i18n/locales/nl-NL/*.json')
const plPlLang = import.meta.globEager('./i18n/locales/pl-PL/*.json')
const ptBrLang = import.meta.globEager('./i18n/locales/pt-BR/*.json')
const ruRuLang = import.meta.globEager('./i18n/locales/ru-RU/*.json')
const trTrLang = import.meta.globEager('./i18n/locales/tr-TR/*.json')
const ViVnLang = import.meta.globEager('./i18n/locales/vi-VN/*.json')
const zhCnLang = import.meta.globEager('./i18n/locales/zh-CN/*.json')
const zhHansLang = import.meta.globEager('./i18n/locales/zh-Hans/*.json')
const zhHantLang = import.meta.globEager('./i18n/locales/zh-Hant/*.json')
const zhTwLang = import.meta.globEager('./i18n/locales/zh-TW/*.json')

const LangArr = [
    { key: 'de-DE', value: deDeLang },
    { key: 'en-US', value: enUsLang },
    { key: 'en', value: enUsLang },
    { key: 'es-ES', value: esEsLang },
    { key: 'fr-FR', value: frFrLang },
    { key: 'it-IT', value: itItLang },
    { key: 'ja-JP', value: jaJpLang },
    { key: 'ko-KR', value: koKrLang },
    { key: 'nl-NL', value: nlNlLang },
    { key: 'pl-PL', value: plPlLang },
    { key: 'pt-BR', value: ptBrLang },
    { key: 'ru-RU', value: ruRuLang },
    { key: 'tr-TR', value: trTrLang },
    { key: 'vi-VN', value: ViVnLang },
    { key: 'zh-CN', value: zhCnLang },
    { key: 'zh', value: zhCnLang },
    { key: 'zh-Hans', value: zhHansLang },
    { key: 'zh-Hant', value: zhHantLang },
    { key: 'zh-TW', value: zhTwLang },
]
const getLocale = (key) => {
    const lang = LangArr.find((item) => item.key === key)
    if (!lang && !lang.value) {
        return {}
    }
    const allTranslations = {}
    for (const path in lang.value) {
        const key = path.split('/').pop().split('.')[0] // 将路径转换为文件名（无扩展名）
        allTranslations[key] = lang.value[path].default
    }
    return allTranslations
}

const resources = {
    'zh-Hans': {
        translation: zhHanstranslation,
    },
    'zh-Hant': {
        translation: zhHanttranslation,
    },
    'en': {
        translation: ENtranslation,
    },
    'ja': {
        translation: JAtranslation,
    },
    'th': {
        translation: THtranslation,
    },
}

for (const key in locales) {
    const allTranslations = getLocale(locales[key])
    resources[locales[key]] = {
        translation: allTranslations,
    }
}
console.log('resources', resources)
i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        // prevent creating i18nextLng in localStorage for each domain
        detection: {
            caches: [],
        },
    })
    .then(() => {
        console.log('inited')
    })

export default i18n
