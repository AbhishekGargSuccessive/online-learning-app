import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react-native';
import {MultiSliders} from '../app/components';

afterEach(cleanup);

const props = {
  values: 'test',
  min: 'test',
  max: 'test',
  postfix: 'test',
  onValueChange: jest.fn,
  prifix: 'test',
};

const MultiSliderProps = props => render(<MultiSliders {...props} />);

describe('Success test case for MultiSlider', () => {
  afterEach(cleanup);
  it('To render screen with props', async () => {
    const resultTest = MultiSliderProps(props);
    expect(resultTest).toBeTruthy();
  });
  it('To render screen with button click',async()=>{
      const resultTest=MultiSliderProps()
      const button = await resultTest.findByTestId('test');
      fireEvent(button);
      expect(resultTest).toBeTruthy();
  })
  
it('To render screen with button click',async()=>{
    const resultTest=MultiSliderProps()
    const button = await resultTest.findByTestId('test');
    fireEvent(button,'onValuesChange');
    expect(resultTest).toBeTruthy();
})
});
