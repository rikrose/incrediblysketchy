import * as migration_20240911_173512_initial from './20240911_173512_initial';

export const migrations = [
  {
    up: migration_20240911_173512_initial.up,
    down: migration_20240911_173512_initial.down,
    name: '20240911_173512_initial'
  },
];
