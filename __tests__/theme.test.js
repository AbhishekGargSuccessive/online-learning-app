import {cleanup, render} from '@testing-library/react-native';
import {changeTheme} from '../app/config/Themes';

afterEach(cleanup);

const props = {
  selectedTheme: 'lightTheme',
};
const props2 = {
  selectedTheme: 'light',
};

const changeThemeComponent = props => render(changeTheme());

describe('Success test case for Change Theme', () => {
  afterEach(cleanup);
  it('To render screen with function', async () => {
    const resultTest = changeThemeComponent(props);
    expect(resultTest).toBeTruthy();
  });
  it('To render screen with function', async () => {
    const resultTest = changeThemeComponent(props2);
    expect(resultTest).toBeTruthy();
  });
});
