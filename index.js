var express = require('express');
var app = express();
app.get('/', function (req, res) {
	
	run(res);
  
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
} 

async function run(res) {
	console.log("delaying for 5 secs");
  await delay(15000);
  res.send('Hello World!.. Sample API..');
  console.log('This printed after about 1 second');
}