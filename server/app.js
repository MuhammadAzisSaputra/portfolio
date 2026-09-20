import express from 'express'
import pool from './db/pool.js'
import contactRoutes from './routes/contactRoutes.js'

const app = express()

app.use(
    express.json({
        limit: '16kb',
    }),
)

app.get('/api/health', async (req, res) => {
    try {
        await pool.query('SELECT 1')

        res.status(200).json({
            success: true,
            message: 'API is running',
            database: 'connected',
        })
    } catch (error) {
        console.error('Database health check failed:', error)

        res.status(500).json({
            success: false,
            message: 'API is running but database connection failed',
        })
    }
})

app.use('/api/contact', contactRoutes)

export default app