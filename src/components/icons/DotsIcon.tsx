import Svg, { Circle, Path } from 'react-native-svg';

interface CustomCircleProps {
  width?: number;
  height?: number;
  viewBox?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const DotsIcon = ({
  width = 18,
  height = 4,
  fillColor = 'black',
}: // strokeWidth = 1.5,
CustomCircleProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 4" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0ZM7 2C7 0.89543 7.89543 0 9 0C10.1046 0 11 0.89543 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2ZM14 2C14 0.89543 14.8954 0 16 0C17.1046 0 18 0.89543 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z"
        fill={fillColor}
      />
    </Svg>
  );
};

export default DotsIcon;
