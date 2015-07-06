#!/usr/bin/env node

var poeticVomit = require('./')
var fs = require('fs')
var argv = require('yargs')
  .alias('h', 'help')
  .help('help')
  .usage('replace words in a text with random rhyming words')
  .example('poeticVomit lol cool whatever')
  .example('poeticVomit -l 0.1 oh yeah, wow so subtle')
  .example('poeticVomit -l 1 -f resume.txt')
  .example('echo "WOW SO PRETTY" | poeticVomit')
  .alias('l', 'level')
  .alias('f', 'file')
  .describe('l', 'floating point frequency at which to do replacement. higher value => more words get replaced. defaults to 0.5')
  .describe('f', 'path to file containing text to poeticVomit')
  .argv

if(process.stdin.isTTY) {

  var text = argv.f ? fs.readFileSync(argv.f).toString() : argv._.join(" ")

  process.stdout.write(poeticVomit(text, argv.l))
  process.stdout.write("\n")
} else {

  var data = ''
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function(chunk) {
    data += chunk
  })

  process.stdin.on('end', function() {
    process.stdout.write(poeticVomit(data, argv.l))
    process.stdout.write("\n")
  })
}