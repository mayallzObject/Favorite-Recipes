import { fonts } from '@constants/typography';
import { StyleSheet, Text, View } from 'react-native';
import { themeColors } from 'src/constants/Colors';

const SignUpHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create an account </Text>
      <View>
        <Text style={styles.subHeader}>
          Let’s help you set up your account,
        </Text>
        <Text style={styles.subHeader}>it won’t take long.</Text>
      </View>
    </View>
  );
};

export default SignUpHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginBottom: 30,
  },
  header: {
    ...fonts.largeBold,
    color: themeColors.neutrals.black1,
  },
  subHeader: {
    fontSize: 12,
    lineHeight: 17,
    color: themeColors.neutrals.black2,
  },
});
