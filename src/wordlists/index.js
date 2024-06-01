import { wordlist as czech } from '@scure/bip39/wordlists/czech'
import { wordlist as english } from '@scure/bip39/wordlists/english'
import { wordlist as french } from '@scure/bip39/wordlists/french'
import { wordlist as italian } from '@scure/bip39/wordlists/italian'
import { wordlist as japanese } from '@scure/bip39/wordlists/japanese'
import { wordlist as korean } from '@scure/bip39/wordlists/korean'
import { wordlist as portuguese } from '@scure/bip39/wordlists/portuguese'
import { wordlist as simplifiedChinese } from '@scure/bip39/wordlists/simplified-chinese'
import { wordlist as spanish } from '@scure/bip39/wordlists/spanish'
import { wordlist as traditionalChinese } from '@scure/bip39/wordlists/traditional-chinese'
import russian from './ruWords.js'
import uzbek from './uzbekWords.js'

export const wordlists = {
  czech,
  english,
  french,
  italian,
  japanese,
  korean,
  portuguese,
  simplifiedChinese,
  spanish,
  traditionalChinese,
  russian,
  uzbek
}

export const addWordlist = (name, list) => {
  try {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error('Name must be a string')
    }
    if (Object.keys(wordlists).includes(name)) {
      throw new Error(`The name '${name}' already exists`)
    }
    if (list.length !== 2048) {
      throw new Error('Тhere should be 2048 words in the list')
    }
    if (!Array.isArray(list)) {
      throw new Error('The list must be an array of strings')
    }
    if (!list.every((item) => typeof item === 'string')) {
      throw new Error('There are items in the list that are not a string')
    }
    wordlists[name] = list
  } catch (err) {
    console.error(err)
  }
}
