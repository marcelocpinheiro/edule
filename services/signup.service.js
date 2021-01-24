export async function signup(payload) { 

    console.log(process.env.VERCEL_URL)
    
    const response = await fetch(`/api/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    console.log(response)
    return (await response.json())
}