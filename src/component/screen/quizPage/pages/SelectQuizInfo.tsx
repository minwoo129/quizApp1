import React, {FC, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import CommonPicker from '../../../common/CommonPicker';
import {SelectQuizInfoProps} from '../types';
import QuizContext from '../../../../contexts/QuizContext';
import QuizInfoFooterBtn from '../childrens/QuizInfoFooterBtn';

const SelectQuizInfo: FC<SelectQuizInfoProps> = ({
  visible,
  categoryTitles,
  levels,
  onPressQuizStart,
  quizStartBtnDisabled,
}) => {
  const {state, setState} = useContext(QuizContext);
  const {categoryIdx, levelIdx} = state;
  const {setCategoryIdx, setLevelIdx} = setState;

  const onSelectCategory = (idx: number) => {
    setCategoryIdx(idx);
  };

  const onSelectLevel = (idx: number) => {
    setLevelIdx(idx);
  };

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.insideView}>
        <CommonPicker
          datas={categoryTitles}
          onSelect={onSelectCategory}
          selectedIdx={categoryIdx}
          title="카테고리를 선택해주세요."
          customStyle={styles.categoryPicker}
        />

        <CommonPicker
          datas={levels}
          onSelect={onSelectLevel}
          selectedIdx={levelIdx}
          title="난이도를 선택해주세요."
          customStyle={styles.levelPicker}
        />
      </View>

      <QuizInfoFooterBtn
        onPressQuizStart={onPressQuizStart}
        quizStartBtnDisabled={quizStartBtnDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  insideView: {
    flex: 1,
  },
  categoryPicker: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  levelPicker: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

export default React.memo(SelectQuizInfo);
