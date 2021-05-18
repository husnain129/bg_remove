const request = require('request');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const api_key = process.env.X_Api_Key;
request.post(
	{
		url: 'https://api.remove.bg/v1.0/removebg',
		formData: {
			image_file: fs.createReadStream('E:/bg-remove/ayesha_gull.jpg'),
			size: 'auto'
		},
		headers: {
			'X-Api-Key': api_key
		},
		encoding: null
	},
	(error, response, body) => {
		if (error) return console.error('Request failed:', error);
		if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
		fs.writeFileSync('E:/bg-remove/ayesha_gull2.jpg', body);
	}
);
