import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Analize from '../screen/analize/Analize';

interface AnalizeContainerProps {}

const AnalizeContainer: FC<AnalizeContainerProps> = ({}) => {
  return <Analize />;
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(AnalizeContainer);
