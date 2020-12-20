const MODULE_TAG = '[hover-align]';

export default class ModuleLogger {
  static debug(message) {
    console.debug(`${MODULE_TAG} ${message}`);
  }

  static error(message) {
    console.error(`${MODULE_TAG} ${message}`);
  }

  static info(message) {
    console.info(`${MODULE_TAG} ${message}`);
  }

  static log(message) {
    console.log(`${MODULE_TAG} ${message}`);
  }

  static warn(message) {
    console.warn(`${MODULE_TAG} ${message}`);
  }
}
