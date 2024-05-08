## Recipes App

### Install and run
  1. npm install
  2. npm run dev

### Test User
  - email: user@test.com
  - password: Test123!

## Attation
  - user auth is currenly not pesisted, the app will take you too login on reload

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

## Color Palette Documentation

This document outlines the color palette used in the application. The colors are categorized into primary, secondary, neutrals, and helper colors.

### Primary Colors

Primary colors represent the main brand colors used throughout the application.

#### Shades

- **primary100:** #129575
- **primary80:** #71B1A1
- **primary60:** #AFD3CA
- **primary40:** #DBEBE7
- **primary20:** #F6FAF9

### Secondary Colors

Secondary colors complement the primary colors and are used for secondary elements or accents.

#### Shades

- **secondary100:** #FF9C00
- **secondary80:** #FFA61A
- **secondary60:** #FFBA4D
- **secondary40:** #FFCE80
- **secondary20:** #FFE1B3

### Neutral Colors

Neutral colors include shades of black, gray, and white, which are used for text, backgrounds, and borders.

#### Shades

- **black1:** #000000
- **black2:** #000000
- **gray1:** #484848
- **gray2:** #797979
- **gray3:** #A9A9A9
- **gray4:** #D9D9D9
- **white:** #FFFFFF

### Helper Colors

Helper colors are used for specific elements such as ratings, warnings, and success indicators.

#### Shades

- **rating1:** #FFAD30
- **rating2:** #FF9C00
- **warning1:** #FFAD30
- **warning2:** #995E00
- **success:** #31B057

---
This Markdown document provides an overview of the color palette used in the application, along with their respective shades and categories.

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


