import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IncorrectNoteContainerProps {}

const IncorrectNoteContainer: FC<IncorrectNoteContainerProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>IncorrectNoteContainer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(IncorrectNoteContainer);
