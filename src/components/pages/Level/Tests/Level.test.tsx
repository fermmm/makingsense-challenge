import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { LevelData, TileData } from '../../../../levels/tools/types/levelTypes';
import Level from '../Level';

describe('<Level />', () => {
   const testLevel: LevelData = {
      startPos: { x: 0, y: 0 },
      finishPos: { x: 2, y: 1 },
      movesAvailable: 3,
      map: [
         [TileData.Walkable, TileData.Walkable, TileData.Obstacle],
         [TileData.Walkable, TileData.Walkable, TileData.Walkable],
      ],
   };
   const onWin = jest.fn();
   const onLose = jest.fn();

   test('Renders correctly', () => {
      const component = mount(<Level levelData={testLevel} onWin={onWin} onLoose={onLose} />);
      expect(component.html()).toMatchSnapshot();
      component.unmount();
   });

   test('Winning works correctly', () => {
      const component = mount(<Level levelData={testLevel} onWin={onWin} onLoose={onLose} />);

      act(() => {
         window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }));
      });
      act(() => {
         window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
      });
      act(() => {
         window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }));
      });
      expect(onWin).toHaveBeenCalledTimes(1);

      expect(component.html()).toMatchSnapshot();
      component.unmount();
   });

   test('Loosing works correctly', () => {
      const component = mount(<Level levelData={testLevel} onWin={onWin} onLoose={onLose} />);

      act(() => {
         window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }));
      });
      act(() => {
         window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
      });
      act(() => {
         window.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft' }));
      });
      expect(onLose).toHaveBeenCalledTimes(1);

      expect(component.html()).toMatchSnapshot();
      component.unmount();
   });
});
