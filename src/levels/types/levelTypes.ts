export enum Tile {
   Walkable,
   Obstacle,
}

export interface Level {
   startPos: Vector;
   finishPos: Vector;
   map: Tile[][];
}

export interface Vector {
   x: number,
   y: number
}