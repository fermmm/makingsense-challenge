export enum TileData {
   Walkable,
   Obstacle,
}

export interface LevelData {
   startPos: Vector;
   finishPos: Vector;
   movesAvailable: number;
   map: TileData[][];
}

export interface Vector {
   x: number;
   y: number;
}
