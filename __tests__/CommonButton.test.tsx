import 'react-native';
import React from 'react';
import CommonButton from '../src/component/common/CommonButton';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<CommonButton title="" />);
});
