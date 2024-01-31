import React, {FC} from 'react';
import {Platform, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {CategoryAnalizeChartProps} from './types';
import {useAppSelector} from '../../../../hooks';
import {BarChart} from 'react-native-gifted-charts';

const CategoryAnalizeChart: FC<CategoryAnalizeChartProps> = ({}) => {
  const analizeCategorys = useAppSelector(
    state => state.analize.analizeCategorys,
  );

  if (analizeCategorys.length === 0) {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyTxt}>{'아직 푼 문제가 없어요'}</Text>
      </View>
    );
  }

  if (analizeCategorys.length === 1) {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyTxt}>
          {'한가지 카테고리만 풀었어요.\n조금 더 많이 풀어보세요.'}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarChart
        showFractionalValues
        showYAxisIndices
        showXAxisIndices
        hideRules
        noOfSections={5}
        data={analizeCategorys}
        showGradient
        frontColor={'#1B6BB0'}
        gradientColor={'#FFEEFE'}
        backgroundColor={'#FECF9E'}
      />
    </View>
  );
};

const shadow = Platform.select<ViewStyle>({
  ios: {
    shadowColor: '#00000029',
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  android: {
    elevation: 4,
  },
});
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: '#fff',
    ...shadow,
    marginTop: 16,
  },
  emptyView: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: '#fff',
    ...shadow,
    marginTop: 16,
  },
  emptyTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#757575',
    textAlign: 'center',
  },
});

export default React.memo(CategoryAnalizeChart);
