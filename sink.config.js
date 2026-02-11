import { defineConfig } from 'sink';

export default defineConfig({
	fetch: [
		{
			type: 'doc',
			id: '',
			output: '',
			auth: '~/.daily-google-services.json'
		},
		{
			type: 'sheet',
			id: '1cySYT_FHwaJsiKfyX1pHcK9vLOL8u3TvzbpEVifRxhc',
			sheetId: '1850985461',
			output: 'src/data/data.json',
			auth: '~/.daily-google-services.json'
		},
		{
			type: 'json',
			id: '',
			output: '',
			auth: '~/.daily-google-services.json'
		}
	],
	deployment: {
		region: 'us-east-2',
		bucket: 'specials.michigandaily.com',
		key: '2026/love-notes',
		build: './dist',
		profile: 'sink'
	}
});
