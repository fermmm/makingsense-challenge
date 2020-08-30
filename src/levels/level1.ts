import { Level, Tile } from './types/levelTypes';

export const level1: Level = {
   startPos: { x: 0, y: 0 },
   finishPos: { x: 4, y: 4 },
   map: [
      [Tile.Walkable, Tile.Walkable, Tile.Walkable, Tile.Walkable, Tile.Walkable],
      [Tile.Obstacle, Tile.Obstacle, Tile.Walkable, Tile.Obstacle, Tile.Obstacle],
      [Tile.Obstacle, Tile.Obstacle, Tile.Walkable, Tile.Obstacle, Tile.Obstacle],
      [Tile.Walkable, Tile.Walkable, Tile.Walkable, Tile.Obstacle, Tile.Obstacle],
      [Tile.Obstacle, Tile.Obstacle, Tile.Walkable, Tile.Walkable, Tile.Walkable],
   ],
};
