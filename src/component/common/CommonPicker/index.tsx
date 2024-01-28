import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CommonPickerProps} from './types';
import {IndexPath, Select, SelectItem} from '@ui-kitten/components';

const CommonPicker: FC<CommonPickerProps> = ({
  datas,
  onSelect,
  selectedIdx,
  title,
  customStyle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(selectedIdx),
  );

  const _onSelect = (index: IndexPath | IndexPath[]) => {
    setSelectedIndex(index);
    const newIdx = parseInt(index.toString()) - 1;
    onSelect(newIdx, datas[newIdx]);
  };

  const dataIdx = parseInt(selectedIndex.toString()) - 1;
  const dataValue = datas[dataIdx];

  return (
    <View style={[styles.container, customStyle]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Select
        selectedIndex={selectedIndex}
        onSelect={_onSelect}
        value={dataValue}>
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
