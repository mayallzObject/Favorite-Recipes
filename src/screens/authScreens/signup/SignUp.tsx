import React from 'react';
import AppLayout from '@components/AppLayout';
import { StyleSheet, View } from 'react-native';

import SignUpHeader from './signup_components/SignUpHeader';
import SignInSection from '../common-components/SignInSection';

import SignUpForm from './signup_components/SignUpForm';

import AuthLink from '@screens/appScreens/common-components/AuthLink';
import { EnumScreenNames } from 'src/navigation/types';

const SignUp = () => {
  return (
    <AppLayout isNotAnimated>
      <View style={style.container}>
        <SignUpHeader />
        <SignUpForm />
        <SignInSection />
      </View>
      <AuthLink
        mainText="Already a member? "
        subText="Sign In"
        routeName={EnumScreenNames.Login}
      />
    </AppLayout>
  );
};

export default SignUp;

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
