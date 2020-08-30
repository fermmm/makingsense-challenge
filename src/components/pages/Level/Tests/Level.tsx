import { shallow } from 'enzyme';
import React from 'react';
import Level from '../Level';

describe('<Level />', () => {
   test('Renders correctly', () => {
      expect(shallow(<Level />)).toMatchSnapshot();
   });
});
