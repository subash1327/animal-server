const { Client } = require('pg');
require('dotenv').config({ path: '.env.development' });

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const seed = async () => {
  await client.connect();

  await client.query(`
    INSERT INTO users (first_name, last_name, email)
    VALUES
      ('John', 'Doe', 'john.doe@example.com'),
      ('Jane', 'Doe', 'jane.doe@example.com');
  `);

  await client.end();
};

seed();
