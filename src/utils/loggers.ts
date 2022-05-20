import * as style from './colors';

interface Logger {
  (...data: any[] | any): void;
}

export const log = console.log;

export const info: Logger = msg => {
  const { text, heading } = style.info;

  log(`${heading(' Info ')}  ${text(msg)}`);
};
