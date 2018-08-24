import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DashboardPage from '../../components/DashboardPage';
import Person from '../../components/Person';
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
