type StringUtil = (arg: string) => string;

export const lowerCase: StringUtil = s => s.toLowerCase();
export const titleCase: StringUtil = s =>
  `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`;
