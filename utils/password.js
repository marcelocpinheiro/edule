import bcrypt from 'bcrypt'
const saltRounds = 10;

export async function generateHash(password) {
    try {
        const hash = bcrypt.hash(password, saltRounds)
        return hash
    } catch (e) {
        throw new Error(e)
    }
}