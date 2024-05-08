import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { useFormik } from 'formik';
import { fonts } from '@constants/typography';
import CustomButton from '@components/buttons/CustomButton';
import { themeColors } from 'src/constants/Colors';
import { useLoginMutation } from 'src/app/features/auth/auth-api-slice';
import ArrowRightIcon from '@components/icons/ArrowRight';
import CustomTextInput from '@components/textInput/CustomTextInput';

export interface LoginReqBody {
  email: string;
  password: string;
}
const LoginForm = () => {
  const [login] = useLoginMutation();

  const formik = useFormik<LoginReqBody>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await login(values);
    },
  });

  const handleSubmit = () => formik.handleSubmit();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS ? 65 : 0}
    >
      <View>
        <View style={styles.textInputsContainer}>
          <CustomTextInput
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            label="Email"
            placeholder="Enter Email"
            autoCapitalize="none"
            containerStyle={styles.container}
            labelStyle={styles.label}
            inputContainerStyle={styles.inputContainer}
            focusColor={themeColors.primary.primary80}
            inputStyle={[]}
          />
          <CustomTextInput
            onChangeText={formik.handleChange('password')}
            label="Password"
            placeholder="Enter Password"
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
          <Text style={styles.forgotLinkText}>Forgot Password?</Text>
        </View>
        <CustomButton
          size="large"
          title="Sign In"
          onPress={handleSubmit}
          buttonIcon={<ArrowRightIcon size={20} />}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  textInputsContainer: {
    rowGap: 30,
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
    padding: 16,
  },
  forgotLinkContainer: {
    marginLeft: 10,
    marginTop: 22,
    marginBottom: 28,
  },
  forgotLinkText: {
    color: themeColors.helpers.rating2,
  },
});
