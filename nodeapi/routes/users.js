var express = require('express');
var {validationResult,check, body} = require('express-validator');
const { isObjectIdOrHexString } = require('mongoose');
const { user } = require('pg/lib/defaults');
const { options, use } = require('.');
const { update } = require('../models/User');
var router = express.Router({mergeParams:true});
var User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  users = User.find();
  res.send(users);
});
router.post('users/add-user',
  check('firstname').notEmpty().withMessage('Please add firstname'),
  check('lastname').notEmpty().withMessage('Please add lastname'),
  check('email').notEmpty().withMessage('Please add email'),
  check('contactnumber').notEmpty().withMessage('Please add contactnumber'),
  async function(req, res, next) {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      res.send({
        success: false,
        error: err.array()
      })
    } else {
      data =  new User({
        firtname:req.body.firtname,
        lastname:req.body.lastname,
        email:req.body.email,
        contactnumber:req.body.contactnumber,
      })
      data.save();
    }
  
});
router.put('users/update/:id',
check('firstname').notEmpty().withMessage('Please add firstname'),
check('lastname').notEmpty().withMessage('Please add lastname'),
check('email').notEmpty().withMessage('Please add email'),
body('email').custom(async (value, {req}) =>{
  const user = await User.find({email:value, _id:{$ne: isObjectId(req.params.id)}})
  if(user.length == 0 ) {
    return Promise.reject('Email id not exist')
  }
} ),
async function(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty) {
    res.send({
      success: false,
      error: err.array()
    })
  } else {
    const id = req.params.id
    const updateData = req.body
    const result = await User.findByIdAndUpdate(id,updateData,{new:true})
  }
});
router.delete('users/:id', function(req, res, next) {
  const id = req.params.id;
  const data =  User.findByIdAndDelete(id)
  res.send({message:'user deleted successfully'})
});
module.exports = router;
