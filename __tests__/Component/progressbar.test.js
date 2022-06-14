import React from 'react';
import {render, cleanup} from '@testing-library/react-native';

import {ProgressBar} from '../app/components';

afterEach(cleanup);

const props = {
  containerstyle: {},
  progress: 'number',
};
const progressBarProps = props => render(<ProgressBar {...props} />);
describe('progrssbar test case', () => {
  afterEach(cleanup);
  it('to render the styles ', async () => {
    const resultTest = progressBarProps(props);
    expect(resultTest).toBeTruthy();
  });
});
