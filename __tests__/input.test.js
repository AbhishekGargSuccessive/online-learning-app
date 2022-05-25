import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {Input} from '../app/components';

afterEach(cleanup);
const prop = {
  inputplaceholder: 'string',
};

afterEach(cleanup);

const InputComponent = prop => render(<Input {...prop} />);

describe('Input test case', () => {
  afterEach(cleanup);
  it('To render screen with prop', async () => {
    const resultTest = InputComponent(prop);
    expect(resultTest).toBeTruthy();
  });
});
