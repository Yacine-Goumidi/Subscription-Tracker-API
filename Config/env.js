import { config } from 'dotenv';

// TypeScript-style options
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// Destructuring pour PORT
const { PORT, Node_ENV } = process.env;

export { PORT };
