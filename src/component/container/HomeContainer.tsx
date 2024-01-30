import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from '../screen/home/Home';

interface HomeContainerProps {}

const HomeContainer: FC<HomeContainerProps> = ({}) => {
  return <Home />;
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(HomeContainer);
