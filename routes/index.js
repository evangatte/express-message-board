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
    title: 'Fact about louisiana',
    content: 'Well, more of an opinion but Lousiana has the best food!',
    user: 'Evan',
    date: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

module.exports = router;
