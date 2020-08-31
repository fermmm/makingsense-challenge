import { shallow } from 'enzyme';
import React from 'react';
import { Player } from '../Player';

describe('<SimpleComponent />', () => {
   test('Renders correctly', () => {
      expect(shallow(<Player position={{ x: 0, y: 0 }} tilesSize={10} />)).toMatchSnapshot();
   });
});
