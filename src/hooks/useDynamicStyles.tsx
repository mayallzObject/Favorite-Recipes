import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

type Style<T> = { [key: string]: T };

const useDynamicStyles = <T extends Style<T>>(
  getStyleFunction: () => T,
  deps: any[]
) => {
  const dynamicStyles = useMemo(getStyleFunction, deps);
  const styles = StyleSheet.create(dynamicStyles);

  return styles;
};

export default useDynamicStyles;
