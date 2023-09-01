import * as sinon from 'sinon';

import type { LogLevels } from './logger';
import {
  init,
  setVerbose,
  setInfo,
  setWarn,
  setQuiet,
  debug,
  info,
  warn,
  error
} from './logger';

function runLogger(level: LogLevels = 'debug') {
  const initMessages = {
    debug: [`${level} level - debug init`],
    info: [`${level} level - info init`],
    warn: [`${level} level - warn init`],
    error: [`${level} level - error init`]
  };

  init(level, initMessages);
  debug('default level - debug message');
  info('default level - info message');
  warn('default level - warn message');
  error('default level - error message');

  setQuiet();
  debug('quiet level - debug message');
  info('quiet level - info message');
  warn('quiet level - warn message');
  error('quiet level - error message');

  setWarn();
  debug('warn level - debug message');
  info('warn level - info message');
  warn('warn level - warn message');
  error('warn level - error message');

  setInfo();
  debug('info level - debug message');
  info('info level - info message');
  warn('info level - warn message');
  error('info level - error message');

  setVerbose();
  debug('verbose level - debug message');
  info('verbose level - info message');
  warn('verbose level - warn message');
  error('verbose level - error message');
}

const clock = sinon.useFakeTimers({
  now: new Date('2023-09-01')
});
runLogger((process.env.LOG_LEVEL as LogLevels) || 'debug');
clock.restore();
