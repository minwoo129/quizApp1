import React, {FC} from 'react';
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CommonLoadingProps} from './types';
import {AppColor} from '../Styles';

const CommonLoading: FC<CommonLoadingProps> = ({
  visible,
  backgroundColor = 'transparent',
  indicatorColor = AppColor.main,
  indicatorSize = 'large',
  informationText,
  informationTextStyle,
  indicatorVisible = true,
}) => {
  return (
    <Modal animationType="none" transparent={true} visible={visible}>
      <SafeAreaView style={[styles.container, {backgroundColor}]}>
        {indicatorVisible && (
          <ActivityIndicator size={indicatorSize} color={indicatorColor} />
        )}
        {informationText && (
          <Text style={informationTextStyle}>{informationText}</Text>
        )}
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(CommonLoading);
