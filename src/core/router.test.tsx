import * as React from 'react';
// import { deepDive } from '~/core/setupTests';
import { shallow } from 'enzyme';

import Router from './router';

describe('core: router', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<Router />);

    expect(wrapper).toExist();
  });
});


/*
  expect(wrapper.find('[data-qa="status-container"]')).toExist();
  expect(wrapper.find('[data-qa="quote-status"]')).toExist();
*/
