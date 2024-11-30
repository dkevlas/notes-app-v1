import dotenv from 'dotenv';
dotenv.config();

export const config = {
    PORT: process.env.PORT || 3005,
    HOST: process.env.HOST || '0.0.0.0',
    MONGO_URI: process.env.MONGO_URI,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    URL_FRONTEND: process.env.URL_FRONTEND,
    NODE_ENV: process.env.NODE_ENV
};
