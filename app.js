const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();

// Config Public
app.use(express.static(path.join(__dirname, 'public')));

// Config Express
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// Config Handlebars
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Routes

app.get('/', (req, res) => {
  res.render("home/home", {
    style: 'home',
    cards: [
      {
        title: 'LCI 2018/12',
        sub_title: '110% de CDB',
        bank: 'Banco Certo' 
      },
      {
        title: 'LCI 2018/12',
        sub_title: '110% de CDB',
        bank: 'Banco Certo' 
      },
      {
        title: 'LCI 2018/12',
        sub_title: '110% de CDB',
        bank: 'Banco Certo' 
      },
      {
        title: 'LCI 2018/12',
        sub_title: '110% de CDB',
        bank: 'Banco Certo' 
      },
      {
        title: 'LCI 2018/12',
        sub_title: '110% de CDB',
        bank: 'Banco Certo' 
      },
      {
        title: 'LCI 2018/12',
        sub_title: '110% de CDB',
        bank: 'Banco Certo' 
      }
    ]
  });
});

// Listening Server
const port = process.env.PORT || 4040;
app.listen(port, console.log(`Listening server on port [-(${port})-] `));