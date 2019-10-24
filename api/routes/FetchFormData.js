const app = require('express');
const router = app.Router();
const connection = require('../../init/initiailize');

router.get('/', (req, res, next) => {
    res.render('home');
})

router.post('/', (req, res, next) => {
    const formData = {
        Name: req.body.name,
        Age: req.body.age,
        Email_Id:req.body.emailId
    }
    console.log(formData);

    connection.query('INSERT INTO USER_ACCOUNT SET ?', formData, (err, res) => {
        if(err) throw err;
      });
})

module.exports = router;