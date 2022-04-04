// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters-template.actual'
import type { Locales, Translations } from './types.actual'
import { loadedFormatters, loadedLocales, locales } from './util.actual'

const localeTranslationLoaders = {
	en: () => import('./en'),
}

const getDictionary = (locale: Locales) =>
	loadedLocales[locale] || (loadedLocales[locale] = {} as Translations)

export const loadLocaleAsync = async (locale: Locales) => {
	loadedLocales[locale] = {
		...getDictionary(locale),
		...(await localeTranslationLoaders[locale]()).default as Translations
	}

	loadFormatters(locale)
}

export const loadAllLocalesAsync = () => Promise.all(locales.map(loadLocaleAsync))

export const loadFormatters = (locale: Locales) => {
	loadedFormatters[locale] = initFormatters(locale)
}