import { Router } from 'express'
import { createContactMessage } from '../controllers/contactController.js'
import { contactLimiter } from '../middleware/rateLimiter.js'

const router = Router()

router.post('/', contactLimiter, createContactMessage)

export default router