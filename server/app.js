const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.get('/users-data', ((req, res) => {
    const filePath = path.join(__dirname,'./users.json');
    res.sendFile(filePath);
}));

app.post('/new-user', (req, res) => {
  console.log('new-user', req.body);

  res.sendStatus(200);
});

app.use(express.static(path.join(__dirname,'../dist/angular-express/')))

app.get('*', ((req, res) => {
    const filePath = path.join(__dirname,'../dist/angular-express/index.html');
    res.sendFile(filePath);
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
