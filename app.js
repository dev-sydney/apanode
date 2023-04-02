// let http = require('http');
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-type': 'text/plain' });
//     res.end('Helllo from node!');
//   })
//   .listen(8080);
const express = require('express');
const pool = require('./database');
const courseRouter = require('./routes/coursesRouter');

const app = express();
app.use(express.static('dist'));
app.use('/api/v1/courses', courseRouter);

app.listen(8080, () => {
  console.log(`Listening to request on port: ${8080} ✅✅✅`);
});
