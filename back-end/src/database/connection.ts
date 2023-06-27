import knex, { Knex } from 'knex';
import config from '../../knexfile';

type Environment = 'development' | 'production' | 'test';
const env = (process.env.NODE_ENV as Environment) || 'development';

const connectionConfig: Knex.Config = config as Knex.Config;
const connection = knex(connectionConfig);

export default connection;
