import { StyleSheet, Text, View } from 'react-native';
import { themeColors } from '@constants/Colors';

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello,</Text>
      <Text style={styles.subHeader}>Welcome Back!</Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 60,
  },
  header: {
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '600',
    borderColor: themeColors.neutrals.black1,
  },
  subHeader: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '400',
    borderColor: themeColors.neutrals.black2,
  },
});
