import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  CommonHeaderProps,
  HeaderCenterElementsProps,
  HeaderItemProps,
  HeaderLeftSideElementsProps,
  HeaderRightSideElementsProps,
  HeaderTitleProps,
  IconBtnProps,
} from './types';

const CommonHeader: FC<CommonHeaderProps> = ({
  leftSideElements,
  centerElements,
  rightSideElements,
  customStyle,
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      <HeaderLeftSideElements
        leftSideElements={leftSideElements}
        rightSideElements={rightSideElements}
      />
      <HeaderCenterElements centerElements={centerElements} />
      <HeaderRightSideElements
        leftSideElements={leftSideElements}
        rightSideElements={rightSideElements}
      />
    </View>
  );
};

const HeaderLeftSideElements: FC<HeaderLeftSideElementsProps> = ({
  leftSideElements,
  rightSideElements,
}) => {
  if (!leftSideElements) {
    if (!rightSideElements) {
      return null;
    }

    return <View style={styles.leftSideView} />;
  }

  return (
    <View style={styles.leftSideView}>
      {leftSideElements.map((item, idx) => {
        return <HeaderItem key={idx} elementType={item} direction="left" />;
      })}
    </View>
  );
};

const HeaderCenterElements: FC<HeaderCenterElementsProps> = ({
  centerElements,
}) => {
  if (!centerElements) return null;

  return (
    <View style={styles.centerView}>
      {centerElements.map((item, idx) => {
        return <HeaderItem key={idx} elementType={item} direction="center" />;
      })}
    </View>
  );
};

const HeaderRightSideElements: FC<HeaderRightSideElementsProps> = ({
  leftSideElements,
  rightSideElements,
}) => {
  if (!rightSideElements) {
    if (!leftSideElements) {
      return null;
    }

    return <View style={styles.rightSideView} />;
  }

  return (
    <View style={styles.rightSideView}>
      {rightSideElements.map((item, idx) => {
        return <HeaderItem key={idx} elementType={item} direction="right" />;
      })}
    </View>
  );
};

const HeaderItem: FC<HeaderItemProps> = ({elementType, direction}) => {
  const {type} = elementType;
  if (type == 'iconButton') {
    const {source, onPress} = elementType;

    return <IconBtn source={source} onPress={onPress} direction={direction} />;
  }

  const {title, customStyle} = elementType;
  return (
    <HeaderTitle
      title={title}
      customStyle={customStyle}
      direction={direction}
    />
  );
};

const IconBtn: FC<IconBtnProps> = ({source, onPress, direction}) => {
  const disabled = typeof onPress === 'undefined';
  let marginRight = 0;
  let marginLeft = 0;

  if (direction == 'left') {
    marginRight = 8;
  } else if (direction == 'right') {
    marginLeft = 8;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.iconBtn, {marginRight, marginLeft}]}>
      <Image source={source} />
    </TouchableOpacity>
  );
};

const HeaderTitle: FC<HeaderTitleProps> = ({title, customStyle, direction}) => {
  let marginRight = 0;
  let marginLeft = 0;

  if (direction == 'left') {
    marginRight = 8;
  } else if (direction == 'right') {
    marginLeft = 8;
  }
  return (
    <Text style={[customStyle ?? styles.title, {marginRight, marginLeft}]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftSideView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  centerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSideView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconBtn: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
});

export default React.memo(CommonHeader);
