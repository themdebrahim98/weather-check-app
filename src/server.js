const expres = require('express');
const app = expres();
const path = require('path');
const hbs = require('hbs')
const port = process.env.PORT || 5000
const publicpath = path.join(__dirname, '../public');

const viewspath = path.join(__dirname, '../templates/views');

const partialspath = path.join(__dirname,'../templates/partials')

console.log(partialspath)

hbs.registerPartials(partialspath)

app.use(expres.static(publicpath))

app.set('view engine', 'hbs');

app.set('views', viewspath)



app.get('/', (req, res) => {
      res.render('index');

});




app.get('/about', (req, res) => {
      res.render('about');

});

app.get('/weather', (req, res) => {
      res.render('weathers');

});



app.get('*', (req, res) => {
      res.render('404');

});




app.listen(port, () => {
      console.log("running 5000")
})