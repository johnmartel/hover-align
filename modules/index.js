import * as I18nWrapper from './i18nWrapper.js';
import ModuleLogger from './moduleLogger.js';
import showAlignment from './showAlignment.js';

function registerModule() {
  ModuleLogger.info('Initializing module');

  I18nWrapper.setSource(game.i18n);

  Hooks.on('hoverToken', showAlignment);

  ModuleLogger.info('Done initializing');
}

Hooks.once('ready', registerModule);
