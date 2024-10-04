import * as migration_20240911_173512_initial from './20240911_173512_initial';
import * as migration_20240929_145447_initial from './20240929_145447_initial';

export const migrations = [
  {
    up: migration_20240911_173512_initial.up,
    down: migration_20240911_173512_initial.down,
    name: '20240911_173512_initial',
  },
  {
    up: migration_20240929_145447_initial.up,
    down: migration_20240929_145447_initial.down,
    name: '20240929_145447_initial'
  },
];
