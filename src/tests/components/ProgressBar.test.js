import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from '../../components/ProgressBar';

describe('<ProgressBar />', () => {
  it('should contain div with progress-bar class', () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper.contains(<div className="progress-bar" />));
  });
});
