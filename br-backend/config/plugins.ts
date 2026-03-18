export default ({ env }) => ({
  upload: {
    config: {
      provider: env('UPLOAD_PROVIDER', 'local'),
      providerOptions: env('UPLOAD_PROVIDER') === 'aws-s3' ? {
        baseUrl: env('SPACES_CDN_URL'),
        rootPath: env('SPACES_DIRECTORY'),
        s3Options: {
          credentials: {
            accessKeyId: env('SPACES_ACCESS_KEY'),
            secretAccessKey: env('SPACES_SECRET_KEY'),
          },
          endpoint: env('SPACES_ENDPOINT'),
          region: env('SPACES_REGION'),
          params: {
            ACL: env('SPACES_ACL', 'public-read'),
            Bucket: env('SPACES_BUCKET'),
          },
        },
      } : {},
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
