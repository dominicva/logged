import chalk from 'chalk';

interface ColorConfig {
  text: chalk.Chalk;
  heading: chalk.Chalk;
}

export const info: ColorConfig = {
  text: chalk.bold.hex('#6198FF'),
  heading: chalk.whiteBright.bold.bgHex('#6198FF'),
};

export const success: ColorConfig = {
  text: chalk.greenBright.bold,
  heading: chalk.whiteBright.bold.bgGreen,
};

export const warn: ColorConfig = {
  text: chalk.bold.hex('#FFA500'),
  heading: chalk.whiteBright.bold.bgHex('#FFA500'),
};

export const error: ColorConfig = {
  text: chalk.redBright.bold,
  heading: chalk.whiteBright.bold.bgRedBright,
};
