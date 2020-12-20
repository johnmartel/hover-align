import ModuleLogger from '@modules/moduleLogger';

describe('moduleLogger', () => {
  it('should inject module tag to console.debug', () => {
    const spy = jest.spyOn(console, 'debug');

    ModuleLogger.debug('test debug');

    expect(spy).toHaveBeenCalledWith('[hover-align] test debug');
  });

  it('should inject module tag to console.error', () => {
    const spy = jest.spyOn(console, 'error');

    ModuleLogger.error('test error');

    expect(spy).toHaveBeenCalledWith('[hover-align] test error');
  });

  it('should inject module tag to console.info', () => {
    const spy = jest.spyOn(console, 'info');

    ModuleLogger.info('test info');

    expect(spy).toHaveBeenCalledWith('[hover-align] test info');
  });

  it('should inject module tag to console.log', () => {
    const spy = jest.spyOn(console, 'log');

    ModuleLogger.log('test log');

    expect(spy).toHaveBeenCalledWith('[hover-align] test log');
  });

  it('should inject module tag to console.warn', () => {
    const spy = jest.spyOn(console, 'warn');

    ModuleLogger.warn('test warn');

    expect(spy).toHaveBeenCalledWith('[hover-align] test warn');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
