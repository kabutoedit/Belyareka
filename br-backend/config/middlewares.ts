export default [
	'strapi::logger',
	'strapi::errors',
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'connect-src': ["'self'", 'https:', 'http:'],
					'img-src': [
						"'self'",
						'data:',
						'blob:',
						'https://belaya-reka-storage.fra1.digitaloceanspaces.com',
						'*.digitaloceanspaces.com',
						'*.strapi.io',
						'dl.airtable.com',
						'belayareka.kg',
						'www.belayareka.kg',
					],
					'media-src': [
						"'self'",
						'data:',
						'blob:',
						'https://belaya-reka-storage.fra1.digitaloceanspaces.com',
						'*.digitaloceanspaces.com',
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	{
		name: 'strapi::cors',
		config: {
			origin: [
				'http://localhost:2000',
				'http://localhost:3000',
				'http://localhost:1337',
				'https://belayareka.kg',
				'https://www.belayareka.kg',
				'https://belayareka.ru',
				'https://www.belayareka.ru',
			],
			methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
			headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
			keepHeaderOnError: true,
			credentials: true,
		},
	},
	'strapi::poweredBy',
	'strapi::query',
	{
		name: 'strapi::body',
		config: {
			formLimit: '256mb',
			jsonLimit: '256mb',
			textLimit: '256mb',
			formidable: {
				maxFileSize: 256 * 1024 * 1024, // 256mb
			},
		},
	},
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
]
