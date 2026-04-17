import dotenv from 'dotenv';

dotenv.config();

const normalizeEnv = (value) => {
  if (typeof value !== 'string') {
    return value;
  }

  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
};

const getRequiredEnv = (name, { normalize = false } = {}) => {
  const rawValue = process.env[name];
  const value = normalize ? normalizeEnv(rawValue) : rawValue;

  if (!value) {
    throw new Error(`${name} is not defined in the environment variables`);
  }

  return value;
};

const config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: getRequiredEnv('MONGO_URI'),
    JWT_SECRET: getRequiredEnv('JWT_SECRET'),
    IMAGEKIT_PRIVATE_KEY: getRequiredEnv('IMAGEKIT_PRIVATE_KEY'),
    GOOGLE_CLIENT_ID: getRequiredEnv('GOOGLE_CLIENT_ID', { normalize: true }),
    GOOGLE_CLIENT_SECRET: getRequiredEnv('GOOGLE_CLIENT_SECRET', { normalize: true }),
    GOOGLE_REFRESH_TOKEN: getRequiredEnv('GOOGLE_REFRESH_TOKEN', { normalize: true }),
    GOOGLE_USER: getRequiredEnv('GOOGLE_USER', { normalize: true })
}

export default config;