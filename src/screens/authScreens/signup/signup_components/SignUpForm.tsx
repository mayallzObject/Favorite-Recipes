import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useFormik } from 'formik';
import CustomButton from '@components/buttons/CustomButton';
import { themeColors } from 'src/constants/Colors';
import { useSignUpAndCreateNewUserMutation } from 'src/app/features/auth/auth-api-slice';
import CustomTextInput from '@components/textInput/CustomTextInput';
import { fonts } from '@constants/typography';
import ArrowRightIcon from '@components/icons/ArrowRight';
import Layout from '@constants/Layout';

type SignUpReqBody = {
  username: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const [signUp] = useSignUpAndCreateNewUserMutation();

  const formik = useFormik<SignUpReqBody>({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await signUp(values);
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS ? 60 : 0}
    >
      <View style={styles.container}>
        <View style={styles.textInputsContainer}>
          <CustomTextInput
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
            label="Name"
            placeholder="Enter Name"
            autoCapitalize="none"
            containerStyle={styles.container}
            labelStyle={styles.label}
            inputContainerStyle={styles.inputContainer}
            focusColor={themeColors.primary.primary80}
            inputStyle={[]}
          />

          <CustomTextInput
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            label="Email"
            placeholder="Enter Email"
            autoCapitalize="none"
            accessibilityLabel="Email Address"
            containerStyle={styles.container}
            labelStyle={styles.label}
            inputContainerStyle={styles.inputContainer}
            focusColor={themeColors.primary.primary80}
            inputStyle={[]}
          />
          <CustomTextInput
            label="Password"
            placeholder="Enter Password"
            autoCapitalize="none"
            secureTextEntry
            focusColor={themeColors.primary.primary80}
            onChangeText={formik.handleChange('password')}
            containerStyle={styles.container}
            labelStyle={styles.label}
            inputContainerStyle={styles.inputContainer}
            inputStyle={[]}
          />
          <CustomTextInput
            label="Confirm Password"
            placeholder="Retype Password"
            autoCapitalize="none"
            secureTextEntry
            focusColor={themeColors.primary.primary80}
            containerStyle={styles.container}
            labelStyle={styles.label}
            inputContainerStyle={styles.inputContainer}
            inputStyle={[]}
          />
        </View>

        <View style={styles.forgotLinkContainer}>
          <Text>Forgot Passwords</Text>
        </View>
        <View>
          <CustomButton
            size="large"
            title="Sign Up"
            onPress={() => formik.handleSubmit()}
            buttonIcon={<ArrowRightIcon size={20} />}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  textInputsContainer: {
    rowGap: Layout.isSmallDevice ? 10 : 15,
  },
  container: {
    rowGap: 8,
  },
  label: {
    ...fonts.smallRegular,
    borderColor: themeColors.neutrals.black2,
  },
  inputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    padding: Layout.isSmallDevice ? 10 : 16,
  },
  forgotLinkContainer: {
    marginLeft: 10,
    marginVertical: 15,
  },
  forgotLinkText: {
    color: themeColors.helpers.rating2,
  },
});
