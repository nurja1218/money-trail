import { config } from 'dotenv';

config();

export const isNodeEnv = (type: 'local' | 'dev' | 'prod'): boolean =>
  process.env.NODE_ENV === type;
