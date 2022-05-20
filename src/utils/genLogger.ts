import * as style from './colors';
import { lowerCase, titleCase } from './strings';
import containsObject from './containsObject';

export interface Logger {
  (...data: any[]): void;
}

export const genLogger =
  (variant: string): Logger =>
  (...data) => {
    const { log } = console;

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
