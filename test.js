var tap = require('tape')
var vomit = require('./')

var string = 'the swift brown fox jumps over the cromulent lazy gopher face.'

tap.test('replaces words with rhyming words', function (t) {
  t.equal(string.split(' ').length, vomit(string).split(' ').length)
  t.end()
})

tap.test('maintains punctuation', function (t) {
  var puked = vomit(string)
  t.equal('.', puked[puked.length - 1])
  t.end()
})

tap.test('accepts level param', function (t) {
  t.equal(string, vomit(string, 0))
  t.notEqual(string, vomit(string, 1))
  t.end()
})

tap.test('maintains capitalization', function (t) {
  var capped = 'Oh ' + string
  var res = vomit(capped)[0]
  t.equal(res, res.toUpperCase())
  t.end()
})
