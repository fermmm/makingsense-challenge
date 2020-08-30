import { shallow } from 'enzyme';
import React from 'react';
import { Player } from '../Player';

describe('<SimpleComponent />', () => {
   test('Renders correctly', () => {
      expect(shallow(<Player />)).toMatchSnapshot();
   });
});
