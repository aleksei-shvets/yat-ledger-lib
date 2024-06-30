# yat-ledger-lib  
[![NPM](https://nodei.co/npm/yat-ledger-lib.png?compact=true)](https://npmjs.org/package/yat-ledger-lib)
#

The library generates a "yat - wallet" entity with a zero balance.



### install  

```
npm i yat-ledger-lib
```

### genLedger()

The wallet generation function genLedger(wordlistName, userPassword) takes two parameters:  
**wordlistName: string** - the name of the word list from which the mnemonic phrase is generated;  
**userPassword: string** - user password for the wallet. If the password is not passed in the function parameters, it will be generated automatically and returned in the passWd parameter.  

Attention! The library does not perform validation of the passed password in userPassword, validation should be performed before passing it to the function parameters.  

The function returns an object of the following content:

```
 {
publicKey: string,
secretKey: Uint8Array(64),
userCrypt: string,
mnemonicPhrase: string,
passWd: string,
balance: number,
}
```

***Example***

```
genLedger('russian', 'ergwe654erv')

// returns =>

{
  publicKey: 'rccKoVjo8VbcZn8T1coM4tbQtzyHxSHL5aqJqZTErk1',
  secretKey: Uint8Array(64) [
    126,  48, 102,  10, 174,  68, 239,  27,  14, 103, 177,
    175,   5, 194, 222, 146, 252,   0, 215, 147,  72, 165,
    150, 173,  16, 162, 196, 192,  96, 182,  13, 221,  12,
    181, 185,  16, 187, 144, 108, 189, 174,   0, 206, 200,
     11,  34, 254, 246,  92, 141, 119,   8,  37,  38,  99,
     39, 181, 162,  87,  90, 110,  63, 217, 202
  ],
  userCrypt: 'KpYRXmRWfqB4JGbNY9VMe2TjSoPfeb5SLG99KHvjcfWxwmqoxXE9QGSF9T4iv1b63ZxY3m9MwLBEi6MkxLJMiscJ2aUU7BeEqtVQhoDCt6S1UGZz8bd7ejmpqkLbod9a2Dvs6a8mueuAPqucTqTV61rC5nWaf7MQTzZLpzJfLpAR9sG5t56BJTKRzfoTpiNn2XQbNMhUWPF9YuoHv6SisZW3BKxLSPyM1zvJen3',
  mnemonicPhrase: 'осмотр суметь первый пчела действие сено резной сугубо учесть гибкий прут снег',
  passWd: 'ergwe654erv',
  balance: 0
}
```

### addWordlist()

The library includes word lists for 12 languages. The names of the word lists correspond to the names of the languages.

Names of word lists included in the library:  
czech  
english  
french  
italian  
japanese  
korean  
portuguese  
simplifiedChinese  
spanish  
traditionalChinese  
russian  
uzbek  

If there is no word list for the required language in the library, it can be added using the function addWordlist(name, list):
name: string - the name of the word list, through which the word list is accessed in the genLedger() function.
list: string[] - word list, must contain 2048 words.

There can be any number of word lists for each language, but the name of each list must be unique.  

***Example***

```
const myList = ['show', 'apple', 'runer', ..., 'airplane'] // myList.length = 2048 

addWordlist('myEngList', myList)

```
