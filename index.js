var express = require('express');
var app = express();
app.get('/', function (req, res) {
	
	run(res);
  
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
} 

async function run(res) {
	console.log("delaying for 15 secs");
  await delay(15000);
  res.send('Hello World!.. Sample API..');
  console.log('This printed after about 15 seconds');
}
