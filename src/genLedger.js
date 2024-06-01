import tweetnacl from 'tweetnacl'
import { generateMnemonic } from '@scure/bip39'
import { pbkdf2 } from '@noble/hashes/pbkdf2'
import { sha512 } from '@noble/hashes/sha512'
import { base58 } from '@scure/base'
import generator from 'generate-password'
import { wordlists } from './wordlists/index.js'

const { sign, secretbox } = tweetnacl

const genLedger = (wordlistName, userPassword) => {
  const encoder = new TextEncoder()
  const balance = 0
  let passWd

  if (!userPassword) {
    passWd = generator.generate({
      length: 10,
      symbols: true,
      strict: true,
      exclude: '.,:;\\/|<>~{}()[]="'
    })
  } else {
    passWd = userPassword
  }

  const mnemonicPhrase = generateMnemonic(wordlists[wordlistName]).normalize('NFKD')
  const mnemonicSeed = pbkdf2(sha512, mnemonicPhrase, '', { c: 2048, dkLen: 32 })
  const keys = sign.keyPair.fromSeed(mnemonicSeed)

  const passwordKey = pbkdf2(sha512, passWd, '', { c: 2048, dkLen: 32 })
  const userCrypt = base58.encode(secretbox(encoder.encode(mnemonicPhrase), new Uint8Array(24), passwordKey))

  const publicKey = base58.encode(keys.publicKey)
  const secretKey = keys.secretKey
  return { publicKey, secretKey, userCrypt, mnemonicPhrase, passWd, balance }
}

export default genLedger

console.log(genLedger('russian', 'ergwe654erv'))
