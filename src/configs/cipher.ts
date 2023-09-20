export const config = {
  algorithm: process.env.CIPHER_ALGO ?? 'aes-256-cbc',
  secrect_key: process.env.CIPHER_KEY ?? '12345678901234567890123456789011',
  iv_key: process.env.CIPHER_IV_KEY ?? '1234567890123456'
}
