export async function signup(payload) { 
    const response = await fetch(`/api/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    
    return {
        ok: response.ok,
        data: await response.json()
    }
}