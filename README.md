poetic-vomit
----------------

uses [pronouncingjs](https://github.com/aparrish/pronouncingjs) to randomly pick rhyming words

### install

`npm install poetic-vomit`

### example

```
var vomit = require('poetic-vomit')

vomit('how bout them ice cream sandwiches? pretty good, eh?')
// 'how all-out logarithm ice basim sandwiches? new_york_city good, eh?'
vomit('to be or not to be, that is the question, something something', 0.25)
// 'to be or watt to resignee, that is the question, something something'
```

### api

`poeticVomit(text, level=0.5)`
- text: string to transform
- level: floating point number between 0-1 to compare Math.random() to when deciding whether or not to substitute a word. 0 => no subs, 1 => all subs.


### cli

```
replace words in a text with random rhyming words

Options:
  -l, --level  floating point frequency at which to do replacement. higher value
               => more words get replaced. defaults to 0.5
  -f, --file   path to file containing text to poeticVomit
  -h, --help   Show help                                               [boolean]

Examples:
  poeticVomit lol cool whatever
  poeticVomit -l 0.1 oh yeah, wow so
  subtle
  poeticVomit -l 1 -f resume.txt
  echo "WOW SO PRETTY" | poeticVomit
  ```
