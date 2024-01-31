import React, {FC} from 'react';
import {Platform, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {CategoryAnalizeChartProps} from './types';
import {useAppSelector} from '../../../../hooks';
import {BarChart, PieChart} from 'react-native-gifted-charts';

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
      <Text style={styles.title}>{'카테고리별 문제 풀이 비율'}</Text>
      <View style={styles.contentView}>
        <PieChart
          data={analizeCategorys}
          showText
          textColor="black"
          radius={60}
          textSize={20}
          focusOnPress
          showValuesAsLabels
          showTextBackground
          textBackgroundRadius={12}
        />

        <View style={styles.dataView}>
          {analizeCategorys.map((item, index) => {
            const {color, label} = item;
            return (
              <View key={index} style={styles.dataItemView}>
                <View
                  style={[styles.dataItemColor, {backgroundColor: color}]}
                />
                <Text>{label}</Text>
              </View>
            );
          })}
        </View>
      </View>
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  contentView: {
    width: '100%',
    flexDirection: 'row',
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
  dataView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  dataItemView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataItemColor: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  dataItemTxt: {
    fontSize: 12,
    color: '#757575',
  },
});

export default React.memo(CategoryAnalizeChart);
