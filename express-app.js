var loremIpsum = require('lorem-ipsum');
var output = loremIpsum({
  count: 3,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7,
  format: 'html',
  random: Math.random,
  suffix: '\n'
});

const express = require('express');
const app = express();


app.get('/lorem', function(req, res) {
  res.send(output);
});

app.get('/lorem/:parNum', function(req, res) {
  let parNum = req.params.parNum;
  let output = loremIpsum({
    count: parNum,
    units: 'paragraphs',
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    format: 'html',
    random: Math.random,
    suffix: '\n'
  });
  res.send(output);
});


app.listen(3000, function(){
  console.log("Successfully started express application!")
});
