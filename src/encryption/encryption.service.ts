import * as bcrypt from 'bcrypt'

const saltOrRounds = 10;

export const hashPassword = async(password) => {
  const hash = await bcrypt.hash(password, saltOrRounds)
  return hash
}

export const comparePassword = async (password, hash) => {
    const isMatch = await bcrypt.compare(password, hash)
    return isMatch
}