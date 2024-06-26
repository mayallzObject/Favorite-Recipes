import Svg, {
  Defs,
  Image,
  Path,
  Pattern,
  Rect,
  Use,
} from 'react-native-svg';

interface CustomCircleProps {
  height: number;
  width: number;
  viewBox?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const LocationPointerIcon = ({
  height = 17,
  width = 17,
  fillColor = '#71B1A1',
  viewBox = '0 0 17 17',
}: CustomCircleProps) => {
  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none">
      <Path
        d="M14.6058 5.98542C13.862 2.71292 11.0074 1.23959 8.49995 1.23959C8.49995 1.23959 8.49995 1.23959 8.49286 1.23959C5.99245 1.23959 3.13078 2.70584 2.38703 5.97834C1.55828 9.63334 3.79661 12.7288 5.82245 14.6767C6.57328 15.3992 7.53661 15.7604 8.49995 15.7604C9.46328 15.7604 10.4266 15.3992 11.1704 14.6767C13.1962 12.7288 15.4345 9.64042 14.6058 5.98542ZM8.49995 9.53417C7.26745 9.53417 6.2687 8.53542 6.2687 7.30292C6.2687 6.07042 7.26745 5.07167 8.49995 5.07167C9.73245 5.07167 10.7312 6.07042 10.7312 7.30292C10.7312 8.53542 9.73245 9.53417 8.49995 9.53417Z"
        fill={fillColor}
      />
    </Svg>
  );
};

export default LocationPointerIcon;
