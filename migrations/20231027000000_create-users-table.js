/* eslint-disable @typescript-eslint/naming-convention */
const { MigrationBuilder } = require('node-pg-migrate');

const TABLE_NAME = 'users';

exports.up = (pgm) => {
  pgm.createTable(TABLE_NAME, {
    id: 'id',
    first_name: { type: 'text', notNull: true },
    last_name: { type: 'text', notNull: true },
    email: { type: 'text', notNull: true, unique: true },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable(TABLE_NAME);
};
