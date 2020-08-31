import { TileData, Vector } from './types/levelTypes';

export class MapTools {
   static positionIsWalkable(position: Vector, map: TileData[][]): boolean {
      // If the map is invalid it should not throw error in this function
      if (map.length === 0) {
         return false;
      }

      // Check if the position is inside the boundaries of the map:
      if (position.x >= map[0].length) {
         return false;
      }

      if (position.x < 0) {
         return false;
      }

      if (position.y >= map.length) {
         return false;
      }

      if (position.y < 0) {
         return false;
      }

      if (map[position.y][position.x] == null) {
         return false;
      }

      // Check if there is no obstacle:
      if (map[position.y][position.x] === TileData.Obstacle) {
         return false;
      }

      return true;
   }
}
