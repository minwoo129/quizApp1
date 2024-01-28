import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CommonPickerProps} from './types';
import {Select, SelectItem} from '@ui-kitten/components';

const CommonPicker: FC<CommonPickerProps> = ({
  datas,
  onSelect,
  selectedIdx,
  title,
  customStyle,
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Select selectedIndex={selectedIdx} onSelect={onSelect}>
        {datas.map((item, idx) => {
          return <SelectItem key={idx} title={item} />;
        })}
      </Select>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 13,
    color: '#575757',
    marginBottom: 8,
  },
});

export default React.memo(CommonPicker);
