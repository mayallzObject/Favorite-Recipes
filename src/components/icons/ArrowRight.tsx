import Svg, { Circle, Path } from 'react-native-svg';

interface CustomCircleProps {
  size?: number;
  viewBox?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const ArrowRightIcon = ({
  size = 20,
  fillColor = 'white',
  viewBox = '0 0 20 20',
}: // strokeWidth = 1.5,
CustomCircleProps) => {
  return (
    <Svg width={size} height={size} viewBox={viewBox} fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.7422 4.35666C10.506 4.6094 10.5068 5.0183 10.744 5.26996L14.5934 9.35412H3.93937L3.85713 9.36002C3.56131 9.40278 3.33331 9.67298 3.33331 9.99993C3.33331 10.3566 3.60465 10.6457 3.93937 10.6457H14.5921L10.744 14.7298L10.6851 14.8021C10.5086 15.0545 10.5275 15.4133 10.7422 15.6431C10.9784 15.8958 11.3621 15.8967 11.5993 15.645L16.4739 10.4721C16.5873 10.3593 16.66 10.2006 16.6661 10.0238C16.6722 9.85007 16.6129 9.67419 16.4881 9.54179L11.5992 4.35469L11.5311 4.29232C11.2935 4.10527 10.9569 4.12689 10.7422 4.35666Z"
        fill={fillColor}
      />
    </Svg>
  );
};

export default ArrowRightIcon;
