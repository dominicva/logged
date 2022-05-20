import * as style from './colors';
import containsObject from './containsObject';

interface Logger {
  (...data: any[]): void;
}

export const log = console.log;

export const info: Logger = (...data) => {
  const { text, heading } = style.info;

  if (containsObject(data)) {
    log(heading(' Info '));
    data.forEach(v => {
      v instanceof Object ? console.dir(v) : log(text(v));
    });
  } else {
    log(heading(' Info '), text(...data));
  }
};

export const success: Logger = (...data) => {
  const { text, heading } = style.success;

  log(`${heading(' Success ')}  ${text(...data)}`);
};

export const warn: Logger = (...data) => {
  const { text, heading } = style.warn;

  log(`${heading(' Warning ')}  ${text(...data)}`);
};

export const error: Logger = (...data) => {
  const { text, heading } = style.error;

  log(heading(' Error '), text(...data));
};
