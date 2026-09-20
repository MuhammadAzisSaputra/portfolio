import pool from '../db/pool.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const normalizeText = (value) => {
    return typeof value === 'string' ? value.trim() : ''
}

export const createContactMessage = async (req, res, next) => {
    const name = normalizeText(req.body.name)
    const email = normalizeText(req.body.email).toLowerCase()
    const subject = normalizeText(req.body.subject)
    const message = normalizeText(req.body.message)

    const errors = {}

    if (!name) {
        errors.name = 'Name is required.'
    } else if (name.length > 100) {
        errors.name = 'Name must not exceed 100 characters.'
    }

    if (!email) {
        errors.email = 'Email is required.'
    } else if (email.length > 254) {
        errors.email = 'Email must not exceed 254 characters.'
    } else if (!EMAIL_PATTERN.test(email)) {
        errors.email = 'Please enter a valid email address.'
    }

    if (!subject) {
        errors.subject = 'Subject is required.'
    } else if (subject.length > 150) {
        errors.subject = 'Subject must not exceed 150 characters.'
    }

    if (!message) {
        errors.message = 'Message is required.'
    } else if (message.length > 5000) {
        errors.message = 'Message must not exceed 5000 characters.'
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Please correct the provided information.',
            errors,
        })
    }

    try {
        const result = await pool.query(
            `
        INSERT INTO contact_messages (
          name,
          email,
          subject,
          message
        )
        VALUES ($1, $2, $3, $4)
        RETURNING id, created_at
      `,
            [name, email, subject, message],
        )

        return res.status(201).json({
            success: true,
            message: 'Message sent successfully.',
            data: {
                id: result.rows[0].id,
                createdAt: result.rows[0].created_at,
            },
        })
    } catch (error) {
        next(error)
    }
}