import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import pool from './db/pool.js'
import contactRoutes from './routes/contactRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()

app.use(helmet())

const allowedOrigins = [
    'http://localhost:5173',
    process.env.FRONTEND_URL,
].filter(Boolean)

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}))

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