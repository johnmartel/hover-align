import * as I18nWrapper from './i18nWrapper';

function registerModule() {
  console.info('[hover-align] Initializing module');

  I18nWrapper.setSource(game.i18n);
  console.info(I18nWrapper.localize('hover-align.title'));

  console.info('[hover-align] Done initializing');
}

Hooks.on('ready', registerModule);
