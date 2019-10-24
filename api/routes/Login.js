const app = require('express');
const router = app.Router();
const connection = require('../../init/initiailize');

const bodyParser = require('body-parser');

router.get('/',(req,res,next)=>{
    res.render('login');
})

router.post('/',(req,res,next)=>{
    const reqBody={
        id : req.body.loginId,
        password: req.body.password 
    }
    console.log(reqBody);
})

module.exports=router;