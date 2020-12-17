import * as I18nWrapper from './i18nWrapper';
import ModuleLogger from './moduleLogger';

function registerModule() {
  ModuleLogger.info('Initializing module');

  I18nWrapper.setSource(game.i18n);
  ModuleLogger.info(I18nWrapper.localize('hover-align.title'));

  ModuleLogger.info('Done initializing');
}

Hooks.once('ready', registerModule);
