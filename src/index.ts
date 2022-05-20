import { info, log, success, warn, error } from './utils/loggers';

const test = true;
success('Tests all passed :))', test);
info('Prisma is wild...', 'right??');
warn('Houston we have a problem', ['hi', 7, false]);
error(`uh oh... something went wrong: ${new Error('errrrr')}`);
log('seems boring now!');
log('Prisma is wild...', 'right??', ['hi', 7, false]);
