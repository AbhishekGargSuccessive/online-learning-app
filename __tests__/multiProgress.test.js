import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {MultiProgress} from '../app/components';

afterEach(cleanup);
const prop = {
  containerstyle: 'string',
};

afterEach(cleanup);

const MultiProgressProp = prop => render(<MultiProgress {...prop} />);

describe('MultiProgress test case', () => {
  afterEach(cleanup);
  it('To render screen with prop', async () => {
    const resultTest = MultiProgressProp(prop);
    expect(resultTest).toBeTruthy();
  });
});
