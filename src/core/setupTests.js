import 'jest-enzyme';
import 'mock-local-storage';
import 'jest-styled-components';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

process.env.BUILD_VERSION = 'TEST-1';

const dd = w => (typeof w.type() === 'function' ? dd(w.dive()) : w); // recursive diving

// eslint-disable-next-line import/prefer-default-export
export const deepDive = c => dd(shallow(c));
