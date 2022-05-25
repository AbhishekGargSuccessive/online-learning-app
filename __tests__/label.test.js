import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {Label} from '../app/components';

afterEach(cleanup);
const prop = {
  labelname: 'string',
};

afterEach(cleanup);

const LabelComponent = prop => render(<Label {...prop} />);

describe('Label test case', () => {
  afterEach(cleanup);
  it('To render screen with prop', async () => {
    const resultTest = LabelComponent(prop);
    expect(resultTest).toBeTruthy();
  });
});
