import { success, info, warn, error, log } from './utils/colors';

log(info.heading(' Info '));
log(info.text('you now have pleasant logs'));
log(success.heading(' Success '));
log(success.text('on getting pleasant logs'));
log(warn.heading(' Warning '));
log(warn.text('hopefully they work'));
log(error.heading(' Error '));
log(error.text('something went wrong..!'));
