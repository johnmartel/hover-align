import * as I18nWrapper from '@modules/i18nWrapper';

describe('i18nWrapper', () => {
  const i18nSource = {
    localize: jest.fn((key) => key),
    format: jest.fn((key, _) => key),
  };
  let originalSource;

  beforeAll(() => {
    originalSource = I18nWrapper.source();
  });

  it('should invoke i18nSource.localize when no parameters are provided', () => {
    I18nWrapper.setSource(i18nSource);

    const localizedString = I18nWrapper.localize('test');

    expect(localizedString).toBeString();
    expect(i18nSource.localize).toHaveBeenCalledWith('test');
  });

  it('should invoke i18nSource.localize when null parameters are provided', () => {
    I18nWrapper.setSource(i18nSource);

    const localizedString = I18nWrapper.localize('test', null);

    expect(localizedString).toBeString();
    expect(i18nSource.localize).toHaveBeenCalledWith('test');
  });

  it('should invoke i18nSource.format when parameters are provided', () => {
    I18nWrapper.setSource(i18nSource);

    const localizedString = I18nWrapper.localize('test', { param: 'param' });

    expect(localizedString).toBeString();
    expect(i18nSource.format).toHaveBeenCalledWith('test', { param: 'param' });
  });

  afterAll(() => {
    I18nWrapper.setSource(originalSource);
  });
});
