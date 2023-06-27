import { Knex } from 'knex';

const knexConfig: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './my-database.sqlite3',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
  useNullAsDefault: true,
};

export default knexConfig;