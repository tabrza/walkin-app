import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from '../../components/Form';

configure({ adapter: new Adapter() }); // connect enzyme


describe('<Form />', () => {
  it('renders without crashing', () => {
    shallow(<Form />);
  });

  it('should render Form correctly', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });
});
