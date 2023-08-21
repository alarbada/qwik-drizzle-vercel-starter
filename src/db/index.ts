import { drizzle } from 'drizzle-orm/neon-http'
import { neon, neonConfig } from '@neondatabase/serverless'

neonConfig.fetchConnectionCache = true

function db() {
	const url = process.env['DB_URL']
	if (!url) {
		throw new Error('DB_URL not set')
	}

	const queryClient = neon(url)
	return drizzle(queryClient)
}

// your model / queries here
