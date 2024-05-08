import { themeColors } from '@constants/Colors';
import useSafeAreaView from '@hooks/useSafeAreaView';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EnumScreenNames } from 'src/navigation/types';
import { fonts } from '@constants/typography';

interface NavLinkProps {
  mainText: string;
  subText: string;
  routeName: EnumScreenNames;
  marginTop?: number;
}

const AuthLink = ({
  mainText,
  subText,
  routeName,
  marginTop,
}: NavLinkProps) => {
  const { navigate } = useNavigation();
  const { bottom } = useSafeAreaView();

  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={[
        styles.container,
        {
          paddingBottom: bottom,
          marginTop: marginTop ? 30 : 0,
        },
      ]}
    >
      <Text style={styles.textWrapper}>
        <Text>{mainText}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default AuthLink;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textWrapper: {
    ...fonts.smallerRegular,
  },
  mainText: {
    // margin: 20,
    color: themeColors.neutrals.black1,
  },
  subText: {
    color: themeColors.secondary.secondary100,
  },
});
