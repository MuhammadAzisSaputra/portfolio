const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

export async function sendContactMessage(payload) {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })

    let data

    try {
        data = await response.json()
    } catch {
        data = null
    }

    if (!response.ok) {
        const error = new Error(
            data?.message || 'Unable to send your message. Please try again.',
        )

        error.status = response.status
        error.fields = data?.errors ?? {}

        throw error
    }

    return data
}