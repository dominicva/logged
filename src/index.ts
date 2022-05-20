import { info, log, success, warn, error } from './utils/loggers';

const test = true;
success('Tests all passed :))', test);
info('Prisma is wild...', 'right??', ['hi', 7, false]);
warn('You might wanna check that out...');
error(`uh oh... something went wrong: ${new Error('errrrr')}`);
// log('seems boring now!');
// log('Prisma is wild...', 'right??', ['hi', 7, false]);
