import { genLogger } from './genLogger';

export const info = genLogger('info');
export const success = genLogger('success');
export const warn = genLogger('warn');
export const error = genLogger('error');
export const log = console.log;
