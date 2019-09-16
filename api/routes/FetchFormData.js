const app = require('express');
const router = app.Router();

router.get('/', (req, res, next) => {
    res.render('home');
})

router.post('/', (req, res, next) => {
    const fromData = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        contact: req.body.contactNo,
    }
    console.log(fromData);
})

module.exports = router;