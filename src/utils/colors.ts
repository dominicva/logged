import chalk from 'chalk';

interface ColorConfig {
  [key: string]: {
    [index: string]: chalk.Chalk;
  };
}

const colorPalette: ColorConfig = {
  info: {
    text: chalk.hex('#6198FF'),
    heading: chalk.whiteBright.bold.bgHex('#6198FF'),
  },
  success: {
    text: chalk.green,
    heading: chalk.whiteBright.bold.bgGreen,
  },
  warn: {
    text: chalk.hex('#FFA500'),
    heading: chalk.whiteBright.bold.bgHex('#FFA500'),
  },
  error: {
    text: chalk.red,
    heading: chalk.whiteBright.bold.bgRed,
  },
};

export const { info, success, warn, error } = colorPalette;
export const { log } = console;

export default colorPalette;
