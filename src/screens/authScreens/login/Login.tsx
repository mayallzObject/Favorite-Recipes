import AppLayout from '@components/AppLayout';
import { themeColors } from '@constants/Colors';
import { StyleSheet, View } from 'react-native';
import SignInSection from '../common-components/SignInSection';
import LoginForm from './login_components/LoginForm';

import AuthLink from '@screens/appScreens/common-components/AuthLink';
import LoginHeader from './login_components/LoginHeader';
import React from 'react';
import { EnumScreenNames } from 'src/navigation/types';

const Login = () => {
  return (
    <AppLayout isNotAnimated>
      <View style={styles.container}>
        <LoginHeader />
        <LoginForm />
        <SignInSection />
      </View>
      <AuthLink
        marginTop={40}
        mainText="Don’t have an account? "
        subText="Sign Up"
        routeName={EnumScreenNames.SignUp}
      />
    </AppLayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 5,
  },
  separatorText: {
    marginVertical: 16,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '500',
    color: themeColors.neutrals.gray4,
  },
  border: {
    borderWidth: 0.6,
    borderColor: themeColors.neutrals.gray4,
    alignSelf: 'center',
    width: '20%',
  },
});
