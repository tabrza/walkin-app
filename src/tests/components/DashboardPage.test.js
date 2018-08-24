import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DashboardPage from '../../components/DashboardPage';
import Person from '../../components/Person';
import Form from '../../components/Form';

configure({ adapter: new Adapter() }); // connect enzyme

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage />);

  expect(wrapper).toMatchSnapshot();
});

describe('<DashboardPage />', () => {
  it('should render one <Form /> element', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should contain person name', () => {
    const wrapper = shallow(<DashboardPage />);
    wrapper.setState({ persons: [{ id: 1, name: 'Bob' }] });
    expect(wrapper.find(Person)).toHaveLength(1);
  });
});
