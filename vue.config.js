module.exports = {
	devServer: {
		// https: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3001',
				// target: 'http://122.114.0.88:8093',
				// ws: true,
				// changeOrigin: true
			}
		}
	}
}
