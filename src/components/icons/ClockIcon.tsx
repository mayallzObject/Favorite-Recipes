import Svg, { Path } from 'react-native-svg';
import { CutomSvgProps } from './types';

const ClockIcon = ({
  height = 17,
  width = 17,
  viewBox = '0 0 17 17',
  fillColor = '#A9A9A9',
}: CutomSvgProps) => {
  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none">
      <Path
        d="M8.49089 16.1146C4.77922 16.1146 1.76172 13.0971 1.76172 9.38542C1.76172 5.67375 4.77922 2.65625 8.49089 2.65625C12.2026 2.65625 15.2201 5.67375 15.2201 9.38542C15.2201 13.0971 12.2026 16.1146 8.49089 16.1146ZM8.49089 3.71875C5.36714 3.71875 2.82422 6.26167 2.82422 9.38542C2.82422 12.5092 5.36714 15.0521 8.49089 15.0521C11.6146 15.0521 14.1576 12.5092 14.1576 9.38542C14.1576 6.26167 11.6146 3.71875 8.49089 3.71875Z"
        fill={fillColor}
      />
      <Path
        d="M8.49084 9.73959C8.20043 9.73959 7.95959 9.49876 7.95959 9.20834V5.66667C7.95959 5.37626 8.20043 5.13542 8.49084 5.13542C8.78126 5.13542 9.02209 5.37626 9.02209 5.66667V9.20834C9.02209 9.49876 8.78126 9.73959 8.49084 9.73959Z"
        fill={fillColor}
      />
      <Path
        d="M10.6158 1.94792H6.36584C6.07543 1.94792 5.83459 1.70709 5.83459 1.41667C5.83459 1.12626 6.07543 0.885422 6.36584 0.885422H10.6158C10.9063 0.885422 11.1471 1.12626 11.1471 1.41667C11.1471 1.70709 10.9063 1.94792 10.6158 1.94792Z"
        fill={fillColor}
      />
    </Svg>
  );
};

export default ClockIcon;
