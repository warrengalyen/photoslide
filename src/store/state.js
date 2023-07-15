import { convertPureObject } from '~/libs/object';
import defaults from '~/store/defaults';

// set state
let state = convertPureObject(defaults);

// TODO: temporary adjustment for testing
// state.usePreference.data = false;
// state.mode = 'preference';

export default state;
