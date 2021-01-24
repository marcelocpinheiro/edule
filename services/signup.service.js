export async function signup(payload) { 
    
    const response = await fetch(`${process.env.VERCEL_URL}/api/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    console.log(response)
    return (await response.json())
}