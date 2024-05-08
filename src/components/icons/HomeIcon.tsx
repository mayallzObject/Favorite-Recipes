import Svg, { Path } from 'react-native-svg';
import { CutomSvgProps } from './types';

const HomeIcon = ({
  height = 24,
  width = 24,
  viewBox = '0 0 24 24',
  strokeColor = '#D9D9D9',
  fillColor = 'none',
  fillColor2 = 'none',
}: CutomSvgProps & { fillColor2?: string }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fillColor}
    >
      <Path
        d="M20.04 6.81994L14.28 2.78994C12.71 1.68994 10.3 1.74994 8.78999 2.91994L3.77999 6.82994C2.77999 7.60994 1.98999 9.20994 1.98999 10.4699V17.3699C1.98999 19.9199 4.05999 21.9999 6.60999 21.9999H17.39C19.94 21.9999 22.01 19.9299 22.01 17.3799V10.5999C22.01 9.24994 21.14 7.58994 20.04 6.81994ZM12.75 17.9999C12.75 18.4099 12.41 18.7499 12 18.7499C11.59 18.7499 11.25 18.4099 11.25 17.9999V14.9999C11.25 14.5899 11.59 14.2499 12 14.2499C12.41 14.2499 12.75 14.5899 12.75 14.9999V17.9999Z"
        fill={fillColor2}
        stroke={strokeColor}
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export default HomeIcon;
