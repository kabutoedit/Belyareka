export default ({ env }) => ({
  url: env('ADMIN_URL', '/admin'),
  serveAdminPanel: true,
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: false,
    promoteEE: false,
  },
  rateLimit: {
    enabled: true,
    interval: 60000,
    max: 100,
  },
});
