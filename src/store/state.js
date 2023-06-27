import { convertPureObject } from '~/libs/object';
import defaults from '~/store/defaults';

// set state
let state = convertPureObject(defaults);

// TODO: temporary adjustment for testing
state.usePreference.data = false;

export default state;
