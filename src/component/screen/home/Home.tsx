import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HomeProps} from './types';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';

const Home: FC<HomeProps> = ({}) => {
  const mainStackNavigation = useNavigation<MainStackNavigation>();

  const onPressQuiz = () => {
    mainStackNavigation.navigate('QuizPage');
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={onPressQuiz}>
        <Text>퀴즈 풀기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Home);
