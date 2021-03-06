const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/index.html', function(request, response) {
  response.sendFile('public/index.html', {root: '.'})
})

app.get('*', function(request, response) {
  response.send('Oh no! A 404! Please use a valid route.');
})

app.listen(PORT, function() {
  console.log('Listening on PORT 3000!');
})
