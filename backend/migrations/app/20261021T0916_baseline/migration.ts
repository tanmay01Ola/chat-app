#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/7a35c4140b3a9ddcfff251ed6f18145b96c6fc57a6012adb9481df31c7e45aca/contract';
import endContract from '../../snapshots/7a35c4140b3a9ddcfff251ed6f18145b96c6fc57a6012adb9481df31c7e45aca/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'Rooms',
        columns: [
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('token', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
