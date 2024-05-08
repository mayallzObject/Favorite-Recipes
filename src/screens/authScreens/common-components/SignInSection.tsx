import FacebookLogoIcon from '@components/icons/FacebookLogoIcon';
import GoogleLogoIcon from '@components/icons/GoogleLogoIcon';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { themeColors } from 'src/constants/Colors';

const SignInSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <View style={styles.border} />
        <Text style={styles.separatorText}>Or Sign in With</Text>
        <View style={styles.border} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => console.log('login with google')}
        >
          <GoogleLogoIcon size={24} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => console.log('login with facebooks')}
        >
          <FacebookLogoIcon size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInSection;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  iconContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 30,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 5,
  },

  separatorText: {
    marginVertical: 20,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '500',
    color: themeColors.neutrals.gray4,
  },

  border: {
    borderWidth: 0.7,
    borderColor: themeColors.neutrals.gray4,
    alignSelf: 'center',
    width: '15%',
  },
  iconWrapper: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: themeColors.neutrals.white,
    ...Platform.select({
      ios: {
        shadowColor: themeColors.neutrals.gray2,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
