import React from 'react';
import {
  Svg,
  Rect,
  Defs,
  Pattern,
  LinearGradient,
  Stop,
  Image,
} from 'react-native-svg';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreenIcon = () => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width - 100} ${height - 200}`}
      fill="none"
    >
      <Defs>
        <Pattern
          id="pattern0_18_217"
          x={0}
          y={0}
          width={200}
          height={100}
          patternContentUnits="objectBoundingBox"
        >
          <Image
            href={require('../../../assets/splashScreen.png')}
            x={0}
            y={0}
            width={120}
            height={120}
          />
        </Pattern>
        <LinearGradient
          id="paint0_linear_18_217"
          x1={0}
          y1={0}
          x2={width}
          y2={height}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopOpacity="0.4" />
          <Stop offset="1" />
        </LinearGradient>
      </Defs>
      <Rect
        width={120}
        height={height}
        fill="url(#pattern0_18_217)"
      />
      <Rect
        width={120}
        height={120}
        fill="url(#paint0_linear_18_217)"
      />
    </Svg>
  );
};

export default SplashScreenIcon;
