import { NumericString } from '..';

const numberStr: NumericString = '234';

// @ts-expect-error
const notNumberStr: NumericString = 'abc';

// @ts-expect-error
const notNumberStr2: NumericString = '123a';