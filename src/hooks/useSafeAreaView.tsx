import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useSafeAreaView = () => {
  const { top, bottom, left, right } = useSafeAreaInsets();

  return { top, bottom, left, right };
};

export default useSafeAreaView;
