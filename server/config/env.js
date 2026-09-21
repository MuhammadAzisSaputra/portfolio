import 'dotenv/config'

const requiredVariables = ['DATABASE_URL', 'NODE_ENV']

for (const key of requiredVariables) {
    if (!process.env[key]) {
        console.error(`ERROR: Missing required environment variable: ${key}`)
        process.exit(1)
    }
}

export const env = {
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: process.env.PORT || 3001,
    NODE_ENV: process.env.NODE_ENV,
}
