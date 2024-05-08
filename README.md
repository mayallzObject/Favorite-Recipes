## Recipes App

### Install and run
  1. npm install
  2. npm run dev

### Test User
  - email: user@test.com
  - password: Test123!

## Attation
  - user auth is currenly not pesisted, the app will take you too login on reload

## File Stucture
  -

## typography (fonts)

### smallerRegular

- **Font Size**: 11
- **Line Height**: 17
- **Font Family**: Poppins-Regular

### smallerBold

- **Font Size**: 11
- **Line Height**: 17
- **Font Family**: Poppins-SemiBold

### smallRegular

- **Font Size**: 14
- **Line Height**: 21
- **Font Family**: Poppins-Regular

### smallBold

- **Font Size**: 14
- **Line Height**: 21
- **Font Family**: Poppins-SemiBold

### normalRegular

- **Font Size**: 16
- **Line Height**: 24
- **Font Family**: Poppins-Regular

### normalBold

- **Font Size**: 16
- **Line Height**: 24
- **Font Family**: Poppins-SemiBold

### mediumRegular

- **Font Size**: 18
- **Line Height**: 27
- **Font Family**: Poppins-Regular

### mediumBold

- **Font Size**: 18
- **Line Height**: 27
- **Font Family**: Poppins-SemiBold

### largeRegular

- **Font Size**: 20
- **Line Height**: 30
- **Font Family**: Poppins-Regular

### largeBold

- **Font Size**: 20
- **Line Height**: 30
- **Font Family**: Poppins-SemiBold

### headerRegular

- **Font Size**: 30
- **Line Height**: 45
- **Font Family**: Poppins-Regular

### headerBold

- **Font Size**: 30
- **Line Height**: 45
- **Font Family**: Poppins-SemiBold

## Colors

/**
 * ### Color Types Documentation
 *
 * This document describes the color types and their definitions used in the application.
 */

/**
 * ### Primary Colors
 *
 * These colors are part of the primary color palette.
 */
type PrimaryColors = {
  primary100: string;
  primary80: string;
  primary60: string;
  primary40: string;
  primary20: string;
};

/**
 * ### Secondary Colors
 *
 * These colors are part of the secondary color palette.
 */
type SecondaryColors = {
  secondary100: string;
  secondary80: string;
  secondary60: string;
  secondary40: string;
  secondary20: string;
};

/**
 * ### Neutral Colors
 *
 * These colors are neutral and used for various purposes.
 */
type NeutralColors = {
  black1: string;
  black2: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  white: string;
};

/**
 * ### Helper Colors
 *
 * These colors are used for special purposes like ratings and warnings.
 */
type HelperColors = {
  rating1: string;
  rating2: string;
  warning1: string;
  warning2: string;
  success: string;
};

/**
 * ### App Colors
 *
 * Combined definition of all color palettes.
 */
export type AppColors = {
  primary: PrimaryColors;
  secondary: SecondaryColors;
  neutrals: NeutralColors;
  helpers: HelperColors;
};

/**
 * ### Theme Colors
 *
 * Definition of the theme color palette.
 */
export const themeColors: AppColors = {
  primary: {
    primary100: '#129575',
    primary80: '#71B1A1',
    primary60: '#AFD3CA',
    primary40: '#DBEBE7',
    primary20: '#F6FAF9',
  },

  secondary: {
    secondary100: '#FF9C00',
    secondary80: '#FFA61A',
    secondary60: '#FFBA4D',
    secondary40: '#FFCE80',
    secondary20: '#FFE1B3',
  },
  neutrals: {
    black1: '#000000',
    black2: '#000000',
    gray1: '#484848',
    gray2: '#797979',
    gray3: '#A9A9A9',
    gray4: '#D9D9D9',
    white: '#FFFFFF',
  },
  helpers: {
    rating1: '#FFAD30',
    rating2: '#FF9C00',
    warning1: '#FFAD30',
    warning2: '#995E00',
    success: '#31B057',
  },
};

## Layout

/**
 * ### React Native Dimensions Documentation
 *
 * This document describes utility functions and constants related to device dimensions in React Native.
 */

import { Dimensions, PixelRatio, Platform } from 'react-native';

/**
 * ### Constants
 *
 * Constants representing device widths.
 */
const DEVICE_WIDTH = {
  _360: 360,
  _667: 667,
  _735: 735,
};

/**
 * ### Dimensions
 *
 * Get device width and height from React Native Dimensions module.
 */
const { width: DIMENSIONS_WIDTH, height: DIMENSIONS_HEIGHT } = Dimensions.get('window');

/**
 * ### Width and Height
 *
 * Extracted width and height from device dimensions.
 */
const width = DIMENSIONS_WIDTH;
const height = DIMENSIONS_HEIGHT;

/**
 * ### Pixel Ratio
 *
 * Get device pixel ratio.
 */
const ratio = PixelRatio.get();

/**
 * ### Normalize Function
 *
 * Function to normalize size based on device pixel ratio and dimensions.
 */
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

/**
 * ### Exported Object
 *
 * Object containing window dimensions and platform information.
 */
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

## File Structure

### React App `src` Directory Structure

This document outlines a simplified file structure for the `src` directory of a React application.

### `src` Directory

- **app**
  - features
    - auth
    - middleware
    - recipes
  - hooks.ts
  - store.ts
- **components**
- **context**
- **hooks**
- **navigation**
- **screens**
  - appScreens
  - authScreens
- **tests**
- **types**
