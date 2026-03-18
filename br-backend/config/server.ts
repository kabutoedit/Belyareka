export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://68.183.209.243:1337'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    path: '/admin',
    autoOpen: false,
  },
});
