module.exports = {
  apps: [
    {
      name: 'belaya-reka-strapi',
      cwd: '/root/br-backend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: '/root/br-backend/logs/pm2-error.log',
      out_file: '/root/br-backend/logs/pm2-out.log',
      log_file: '/root/br-backend/logs/pm2-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};
