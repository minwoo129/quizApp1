import {ImageSourcePropType, StyleProp, TextStyle} from 'react-native';

export interface CommonHeaderProps
  extends HeaderLeftSideElementsProps,
    HeaderCenterElementsProps,
    HeaderRightSideElementsProps {
  customStyle?: StyleProp<TextStyle>;
}

export interface HeaderLeftSideElementsProps {
  leftSideElements?: leftSideElement[];
  rightSideElements?: rightSideElement[];
}

export interface HeaderCenterElementsProps {
  centerElements?: centerElement[];
}

export interface HeaderRightSideElementsProps {
  leftSideElements?: leftSideElement[];
  rightSideElements?: rightSideElement[];
}
// ======================================================
export interface HeaderItemProps {
  elementType: leftSideElement;
  direction: 'left' | 'center' | 'right';
}

export interface IconBtnProps {
  source: ImageSourcePropType;
  onPress?: () => void;
  direction: 'left' | 'center' | 'right';
}

export interface HeaderTitleProps {
  title: string;
  customStyle?: StyleProp<TextStyle>;
  direction: 'left' | 'center' | 'right';
}

export type leftSideElement = IconButtonType | HeaderTitleType;
export type centerElement = IconButtonType | HeaderTitleType;
export type rightSideElement = IconButtonType | HeaderTitleType;

export type IconButtonType = {
  type: 'iconButton';
  source: ImageSourcePropType;
  onPress?: () => void;
};

export type HeaderTitleType = {
  type: 'headerTitle';
  title: string;
  customStyle?: StyleProp<TextStyle>;
};
