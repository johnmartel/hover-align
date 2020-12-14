/* istanbul ignore next: tests inject their own */
let i18nSource = {
  localize: (key, _) => `${key}`,
  format: (key, _) => `${key}`,
};

export function source() {
  return i18nSource;
}

export function setSource(source) {
  i18nSource = source;
}

export function localize(key, params) {
  if (!params || Object.keys(params).length === 0) {
    return i18nSource.localize(key);
  }

  return i18nSource.format(key, params);
}
