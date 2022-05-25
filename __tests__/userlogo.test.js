import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {Userlogo} from '../app/components';

afterEach(cleanup);

const UserlogoProps = () => render(<Userlogo />);

describe('Userlogo test case', () => {
  afterEach(cleanup);
  it('To render screen', async () => {
    const resultTest = UserlogoProps();
    expect(resultTest).toBeTruthy();
  });
});
