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

const getOptionalEnv = (name, { normalize = false } = {}) => {
  const rawValue = process.env[name];

  if (!rawValue) {
    return undefined;
  }

  return normalize ? normalizeEnv(rawValue) : rawValue;
};

const normalizeAppPassword = (value) => {
  const normalized = normalizeEnv(value);

  if (!normalized) {
    return normalized;
  }

  return normalized.replace(/\s+/g, '');
};

const emailAuthMode = (normalizeEnv(process.env.EMAIL_AUTH_MODE) || '').toLowerCase();
const googleUser = getRequiredEnv('GOOGLE_USER', { normalize: true });
const googleAppPassword = getOptionalEnv('GOOGLE_APP_PASSWORD', { normalize: true });

const resolvedEmailAuthMode = emailAuthMode || (googleAppPassword ? 'app_password' : 'oauth2');

if (!['oauth2', 'app_password'].includes(resolvedEmailAuthMode)) {
  throw new Error('EMAIL_AUTH_MODE must be either oauth2 or app_password');
}

const emailConfig =
  resolvedEmailAuthMode === 'app_password'
    ? {
        GOOGLE_APP_PASSWORD: normalizeAppPassword(
          getRequiredEnv('GOOGLE_APP_PASSWORD', { normalize: true })
        ),
      }
    : {
        GOOGLE_CLIENT_ID: getRequiredEnv('GOOGLE_CLIENT_ID', { normalize: true }),
        GOOGLE_CLIENT_SECRET: getRequiredEnv('GOOGLE_CLIENT_SECRET', { normalize: true }),
        GOOGLE_REFRESH_TOKEN: getRequiredEnv('GOOGLE_REFRESH_TOKEN', { normalize: true }),
      };

const config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: getRequiredEnv('MONGO_URI'),
    JWT_SECRET: getRequiredEnv('JWT_SECRET'),
    IMAGEKIT_PRIVATE_KEY: getRequiredEnv('IMAGEKIT_PRIVATE_KEY'),
    GOOGLE_USER: googleUser,
    EMAIL_AUTH_MODE: resolvedEmailAuthMode,
    ...emailConfig
}

export default config;