export default ({ env }) => ({
	upload: {
		config: {
			provider: env('UPLOAD_PROVIDER', 'local'),
			providerOptions:
				env('UPLOAD_PROVIDER') === 'aws-s3'
					? {
							s3Options: {
								credentials: {
									accessKeyId: env('SPACES_ACCESS_KEY'),
									secretAccessKey: env('SPACES_SECRET_KEY'),
								},
								endpoint: env('SPACES_ENDPOINT'), // e.g. https://fra1.digitaloceanspaces.com
								region: env('SPACES_REGION'),
							},
							params: {
								ACL: env('SPACES_ACL', 'public-read'),
								Bucket: env('SPACES_BUCKET'),
							},
							baseUrl: env('SPACES_CDN_URL'), // e.g. https://belaya-reka-storage.fra1.cdn.digitaloceanspaces.com
							rootPath: env('SPACES_DIRECTORY'),
						}
					: {},
			actionOptions: {
				upload: {},
				uploadStream: {},
				delete: {},
			},
		},
	},
	'users-permissions': {
		config: {
			registerConfirmsEmail: false,
		},
	},
})
