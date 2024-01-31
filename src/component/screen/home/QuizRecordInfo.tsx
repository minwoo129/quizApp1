import React, {FC} from 'react';
import {Platform, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {QuizRecordInfoProps} from './types';
import {useAppSelector} from '../../../hooks';
import {AppColor} from '../../common/Styles';

const QuizRecordInfo: FC<QuizRecordInfoProps> = ({}) => {
  const analizeCorrects = useAppSelector(
    state => state.analize.analizeCorrects,
  );

  let infoTxt = '';
  let corrects = 0;
  let incorrects = 0;
  if (analizeCorrects.length > 0) {
    corrects = analizeCorrects[0].value;
    incorrects = analizeCorrects[1].value;

    if (corrects > incorrects) {
      infoTxt = '잘 하고 있어요! 계속 힘내세요!';
    } else {
      infoTxt = '조금 더 분발하세요!';
    }
  }

  if (analizeCorrects.length === 0) {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyTxt}>{'아직 푼 문제가 없어요'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.infoTxt}>{infoTxt}</Text>
      <View style={styles.insideView}>
        <Text style={styles.insideDataTxt}>
          <Text style={{color: '#757575'}}>{'정답: '}</Text>
          <Text style={{color: AppColor.text.correct}}>{`${corrects}건`}</Text>
        </Text>
        <Text style={styles.insideDataTxt}>
          <Text style={{color: '#757575'}}>{'오답: '}</Text>
          <Text style={{color: AppColor.text.wrong}}>{`${incorrects}건`}</Text>
        </Text>
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
    height: 120,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: 12,
    ...shadow,
  },
  infoTxt: {
    fontSize: 24,
    color: '#212121',
  },
  insideView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 12,
  },
  insideDataTxt: {
    fontSize: 17,
    marginRight: 12,
  },
  emptyView: {
    width: '100%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow,
  },
  emptyTxt: {
    fontSize: 16,
    color: '#757575',
  },
});

export default React.memo(QuizRecordInfo);
