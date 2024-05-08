import Svg, { Path } from 'react-native-svg';
import { CutomSvgProps } from './types';

const ProfileIcon = ({
  height = 24,
  width = 24,
  viewBox = '0 0 24 24',
  strokeColor = '#D9D9D9',
  fillColor = 'none',
}: CutomSvgProps & { fillColor2?: string }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fillColor}
    >
      <Path
        d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ProfileIcon;
