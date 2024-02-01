import 'react-native';
import React from 'react';
import CommonButton from '../src/component/common/CommonButton';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';

describe('CommonButton', () => {
  it('렌더링이 정상적으로 이루어지는가?', () => {
    renderer.create(<CommonButton title="" />);
  });

  it('임의로 입력한 title에 따라서 버튼의 title이 변경되는가?', () => {
    const testTitle = 'Test Title';
    const tree = renderer.create(<CommonButton title={testTitle} />).root;

    const textComponent = tree.findByType(Text);
    expect(textComponent.props.children).toBe(testTitle);
  });
});
