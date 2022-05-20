import * as style from './colors';
import containsObject from './containsObject';
import { lowerCase, titleCase } from './strings';

interface Logger {
  (...data: any[]): void;
}

export const log = console.log;

const genLogger =
  (variant: string): Logger =>
  (...data) => {
    // @ts-ignore -> TS doesn't like accessing prop by [string]
    const { text, heading } = style[lowerCase(variant)];

    const label = heading(` ${titleCase(variant)} `);

    if (containsObject(data)) {
      log(heading(label));
      data.forEach(v => {
        v instanceof Object ? console.dir(v) : log(text(v));
      });
    } else {
      log(heading(label), text(...data));
    }
  };

export const info = genLogger('info');
export const success = genLogger('success');
export const warn = genLogger('warn');
export const error = genLogger('error');
