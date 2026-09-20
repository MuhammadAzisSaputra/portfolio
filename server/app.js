import express from 'express'
import helmet from 'helmet'
import pool from './db/pool.js'
import contactRoutes from './routes/contactRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()

app.use(helmet())

app.use(
    express.json({
        limit: '10kb',
    }),
)

app.get('/api/health', async (req, res, next) => {
    try {
        await pool.query('SELECT 1')

        res.status(200).json({
            success: true,
            message: 'API is running',
        })
    } catch (error) {
        next(error)
    }
})

app.use('/api/contact', contactRoutes)

app.use(errorHandler)

export default app