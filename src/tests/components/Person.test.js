import React from 'react';
import { shallow } from 'enzyme';

import Person from '../../components/Person';
import ProgressBar from '../../components/ProgressBar';

describe('<Person />', () => {
  it('should render one <ProgressBar /> element', () => {
    const wrapper = shallow(<Person />);
    expect(wrapper.find(ProgressBar)).toHaveLength(1);
  });

  it('should contain person name and wait time', () => {
    const wrapper = shallow(<Person name="Bob" waitTime="10" />);
    expect(wrapper.contains(<strong> Bob </strong>));
    expect(wrapper.contains(<strong> 10 </strong>));
  });
});
