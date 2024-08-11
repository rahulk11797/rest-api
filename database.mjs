import pg from 'pg'
const { Pool } = pg
 
export const pool = new Pool({
  user: 'test',
  password: 'test',
  host: 'localhost',
  port: 5432,
  database: 'testdb',
});