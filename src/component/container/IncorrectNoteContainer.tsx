import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IncorrectNote from '../screen/incorrectNote/IncorrectNote';

interface IncorrectNoteContainerProps {}

const IncorrectNoteContainer: FC<IncorrectNoteContainerProps> = ({}) => {
  return <IncorrectNote />;
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(IncorrectNoteContainer);
