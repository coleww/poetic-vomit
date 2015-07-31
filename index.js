var pronouncing = require('pronouncing')

module.exports = function (text, lev) {
  var level = lev !== undefined ? lev : 0.5
  return text.split(/\s/).map(function (word) {
    var punct = word.match(/\W+$/)
    var searchWord = punct ? word.substr(0, punct.index) : word
    var rhymes = pronouncing.rhymes(searchWord.toLowerCase())
    var newWord = ''
    if (rhymes.length && Math.random() < level) {
      var capitalized = word.charAt(0).toUpperCase() + word.slice(1) === word
      var allCaps = word.toUpperCase() === word
      newWord = rhymes[~~(Math.random() * rhymes.length)]
      if (capitalized) newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
      if (allCaps) newWord = newWord.toUpperCase()
      if (punct) newWord += punct[0]
    } else {
      newWord = word
    }
    return newWord
  }).join(' ')
}
