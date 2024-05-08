import { Dimensions, PixelRatio, Platform } from 'react-native';

const DEVICE_WIDTH = {
  _360: 360,
  _667: 667,
  _735: 735,
};

const { width: DIMENSIONS_WIDTH, height: DIMENSIONS_HEIGHT } =
  Dimensions.get('window');

const width = DIMENSIONS_WIDTH;
const height = DIMENSIONS_HEIGHT;

const ratio = PixelRatio.get();

export const normalize = (size: number) => {
  if (ratio >= 2 && ratio < 3) {
    if (width < DEVICE_WIDTH._360) return size * 0.95;
    if (height < DEVICE_WIDTH._667) return size;
    if (height >= DEVICE_WIDTH._667 && height <= DEVICE_WIDTH._735)
      return size;

    return size * 1.25;
  }

  if (ratio >= 3 && ratio < 3.5) {
    if (width < DEVICE_WIDTH._360) return size;
    if (height < DEVICE_WIDTH._667) return size * 1.15;
    if (height >= DEVICE_WIDTH._667 && height <= DEVICE_WIDTH._735)
      return size * 1.2;

    return size * 1.27;
  }

  if (ratio >= 3.5) {
    if (width < 360) return size;
    if (height < DEVICE_WIDTH._667) return size * 1.2;
    if (height >= DEVICE_WIDTH._667 && height <= DEVICE_WIDTH._735)
      return size * 1.25;

    return size * 1.4;
  }

  return size;
};

export default {
  window: {
    width,
    height,
  },
  isiOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  isSmallDevice: width < 400,
  horizontalPadding: {
    medium: normalize(30),
  },
};
