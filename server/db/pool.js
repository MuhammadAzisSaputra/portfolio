import pg from 'pg'
import { env } from '../config/env.js'

const { Pool } = pg

const pool = new Pool({
    connectionString: env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 30000,
})

export default pool