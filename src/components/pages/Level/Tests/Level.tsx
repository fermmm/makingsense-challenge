import { shallow } from 'enzyme';
import React from 'react';
import { level1 } from '../../../../levels/level1';
import Level from '../Level';

describe('<Level />', () => {
   test('Renders correctly', () => {
      expect(shallow(<Level levelData={level1} />)).toMatchSnapshot();
   });
});
