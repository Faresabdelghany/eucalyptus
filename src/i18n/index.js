import en from './en.js';
import ar from './ar.js';

const translations = { en, ar };

export function t(lang, key) {
  const keys = key.split('.');
  let value = translations[lang] ?? translations['en'];
  for (const k of keys) { value = value?.[k]; }
  if (value !== undefined) return value;
  let fallback = translations['en'];
  for (const k of keys) { fallback = fallback?.[k]; }
  return fallback ?? key;
}

export { translations };
