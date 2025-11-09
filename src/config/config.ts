import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});

export const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  postgraphile: {
    schema: process.env.POSTGRAPHILE_SCHEMA,
    watch: process.env.POSTGRAPHILE_WATCH === 'true',
    graphiql: true,
    enhanceGraphiql: process.env.POSTGRAPHILE_ENHANCE_GRAPHIQL === 'true',
    ownerConnectionString: process.env.POSTGRAPHILE_OWNER_CONNECTION,
  },
};
