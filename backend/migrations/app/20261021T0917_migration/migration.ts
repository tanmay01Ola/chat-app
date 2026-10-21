#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/7a35c4140b3a9ddcfff251ed6f18145b96c6fc57a6012adb9481df31c7e45aca/contract';
import startContract from '../../snapshots/7a35c4140b3a9ddcfff251ed6f18145b96c6fc57a6012adb9481df31c7e45aca/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/7c3f2440755a6821718ebb5fadfd41c76940448a52cdd134b52296fc60b551b7/contract';
import endContract from '../../snapshots/7c3f2440755a6821718ebb5fadfd41c76940448a52cdd134b52296fc60b551b7/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, lit } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'Rooms',
        column: col('users', 'int4', {
          notNull: true,
          default: lit(0),
          codecRef: { codecId: 'pg/int4@1' },
        }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
