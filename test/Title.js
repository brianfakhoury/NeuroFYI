import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Title from '../frontend/components/Title';

describe('Component: App', () => {
  it('should render the App component', () => {
    const wrapper = shallow(
      <Title name="Brian" />
    );

    expect(wrapper.find('h1').text()).toEqual('Brian');
  });

  it('should run a solid smoke test', () => {
    expect(true).toEqual(true);
  });
});
