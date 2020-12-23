import React from 'react';
import { shallow } from 'enzyme';
import Sidemenu from './Sidemenu';

describe('Sidemenu', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Sidemenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
