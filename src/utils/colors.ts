import chalk from 'chalk';

interface ColorConfig {
  text: chalk.Chalk;
  heading: chalk.Chalk;
}

export const info: ColorConfig = {
  text: chalk.hex('#6198FF').bold,
  heading: chalk.whiteBright.bold.bgHex('#6198FF'),
};

export const success: ColorConfig = {
  text: chalk.green,
  heading: chalk.whiteBright.bold.bgGreen,
};

export const warn: ColorConfig = {
  text: chalk.hex('#FFA500'),
  heading: chalk.whiteBright.bold.bgHex('#FFA500'),
};

export const error: ColorConfig = {
  text: chalk.red,
  heading: chalk.whiteBright.bold.bgRed,
};
