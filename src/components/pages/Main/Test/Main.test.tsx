import { mount } from 'enzyme';
import React from 'react';
import Main from '../Main';

describe('<Main />', () => {
   test('Renders correctly', () => {
      const component = mount(<Main />);
      expect(component.html()).toMatchSnapshot();
      component.unmount();
   });
});
