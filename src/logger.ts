/* eslint-disable @typescript-eslint/no-explicit-any */

import { createLogger, transports, format } from 'winston';

type LogLevels = 'debug' | 'info' | 'warn' | 'error';
type Messages = {
  debug?: string[];
  info?: string[];
  warn?: string[];
  error?: string[];
};

const stderrTransport = new transports.Console({
  stderrLevels: ['debug', 'info', 'warn', 'error'],
  format: format.combine(
    format.timestamp(),
    format.align(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level.toUpperCase()} ${message}`;
    })
  )
});
const logger = createLogger({ level: 'error', transports: [stderrTransport] });

function init(
  level: LogLevels,
  messages: Messages = {},
  transports = [stderrTransport]
): void {
  logger.level = level;
  logger.transports.pop();
  transports.forEach((transport) => logger.push(transport));
  messages.debug && messages.debug.forEach((message) => debug(message));
  messages.info && messages.info.forEach((message) => info(message));
  messages.warn && messages.warn.forEach((message) => warn(message));
  messages.error && messages.error.forEach((message) => error(message));
}

const setInfo = (msgs: Messages = {}) => init('info', msgs);
const setVerbose = (msgs: Messages = {}) => init('debug', msgs);
const setWarn = (msgs: Messages = {}) => init('warn', msgs);
const setQuiet = (msgs: Messages = {}) => init('error', msgs);
const debug = (message: string) => logger.debug(message);
const info = (message: string) => logger.info(message);
const warn = (message: string) => logger.warn(message);
const error = (message: string) => logger.error(message);

export type { LogLevels };
export {
  init,
  setVerbose,
  setInfo,
  setWarn,
  setQuiet,
  debug,
  info,
  warn,
  error
};
