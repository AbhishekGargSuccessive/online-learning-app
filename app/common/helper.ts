import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

const GooglesignIn = async () => {
  GoogleSignin.configure({
    scopes: [], // [Android] what API you want to access on behalf of the user, default is email and profile
    webClientId:
      '240602027263-1lkogv3s3mvj7eo39n036tp076ao12ga.apps.googleusercontent.com',
    offlineAccess: true,
  });

  console.log('button clicked');
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('userinfo=>', userInfo);
  } catch (error) {
    console.log(error);

    if (error === statusCodes.SIGN_IN_CANCELLED) {
    } else if (error === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

const SigninWithFacebook = () => {
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    function (result) {
      if (result.isCancelled) {
        console.log('==> Login cancelled');
      } else {
        // console.log("==> Login success with permissions: " ,result.grantedPermissions?.toString());

        AccessToken.getCurrentAccessToken().then(data => {
          console.log(data);
        });
      }
    },
    function (error) {
      console.log('==> Login fail with error: ' + error);
    },
  );
};

export default {GooglesignIn, SigninWithFacebook};
