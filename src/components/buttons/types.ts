import { PressableProps } from 'react-native';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonSizeProps {
  [key: string]: {
    height: number;
    paddingVertical: number;
    paddingHorizontal: number;
    fontSize: number;
    lineHeight: number;
    gap: number;
  };
}

export interface CustomButtonProps extends PressableProps {
  title: string;
  size?: ButtonSize;
  backgroundColor?: string;
  textColor?: string;
  buttonIcon?: React.ReactNode;
}

export type UseReSizableStyleProps = {
  backgroundColor?: string;
  textColor?: string;
  size?: ButtonSize;
};
