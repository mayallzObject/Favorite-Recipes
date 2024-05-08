import Svg, { Circle, Path } from 'react-native-svg';

interface CustomCircleProps {
  width?: number;
  height?: number;
  viewBox?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const ArrowLeftIcon = ({
  width = 20,
  height = 20,
  viewBox = '0 0 20 20',
  strokeColor = '#292D32',
}: CustomCircleProps) => {
  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none">
      <Path
        d="M7.97496 4.94168L2.91663 10L7.97496 15.0583"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0833 10H3.05835"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
