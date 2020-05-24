let express = require('express');
let app = express();

// Setup port
thePort = process.env.PORT || 2020

// Setup ejs and static content
app.set('view engine', 'ejs');
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index');
});

app.use((req, res) => {
  res.redirect("/");
});

app.listen(thePort, () => {
  console.log('Example app listening on port ' + thePort)
})