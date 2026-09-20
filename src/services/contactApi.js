export async function sendContactMessage(payload) {
    const response = await fetch('/api/contact', {
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