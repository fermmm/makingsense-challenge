import { LevelData, TileData } from './tools/types/levelTypes';

export const level1: LevelData = {
   startPos: { x: 0, y: 0 },
   finishPos: { x: 4, y: 4 },
   movesAvailable: 8,
   map: [
      [TileData.Walkable, TileData.Walkable, TileData.Walkable, TileData.Walkable, TileData.Walkable],
      [TileData.Obstacle, TileData.Obstacle, TileData.Walkable, TileData.Obstacle, TileData.Obstacle],
      [TileData.Obstacle, TileData.Obstacle, TileData.Walkable, TileData.Obstacle, TileData.Obstacle],
      [TileData.Walkable, TileData.Walkable, TileData.Walkable, TileData.Obstacle, TileData.Obstacle],
      [TileData.Obstacle, TileData.Obstacle, TileData.Walkable, TileData.Walkable, TileData.Walkable],
   ],
};
