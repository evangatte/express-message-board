var express = require('express');
var router = express.Router();

const messages = [
  {
    title: 'Fact about louisiana',
    content: 'Well, more of an opinion but Lousiana has the best food!',
    user: 'Evan',
    date: new Date()
  },  
  {
    title: 'Crawfish',
    content: 'Trust me, they taste alot better than they look!',
    user: 'Evan',
    date: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  messages.push({
    title: req.body.title,
    content: req.body.content,
    user: req.body.user,
    date: new Date()
  })
  res.redirect('/')
})

module.exports = router;
