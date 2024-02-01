import React, {FC} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HomeProps} from './types';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigation} from '../../navigation/types';
import QuizRecordInfo from './QuizRecordInfo';
import QuizStartBtn from './QuizStartBtn';
import Header from './Header';

const Home: FC<HomeProps> = ({}) => {
  const mainStackNavigation = useNavigation<MainStackNavigation>();

  const onPressQuizStart = () => {
    mainStackNavigation.navigate('QuizPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollInsideView}>
          <QuizRecordInfo />

          <QuizStartBtn onPressQuizStart={onPressQuizStart} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollInsideView: {
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default React.memo(Home);
