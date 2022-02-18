const express = require('express');
const router = express.Router();
const User = require('./userSchema');

//Add user
router.post('/add-user', async(req,res) => {
    //console.log(req.body);
    //res.json(req.body);
    console.log(req.body);
    try{
        var add_user = await new User({
            user_name:req.body.name,
            user_email:req.body.email,
            age:req.body.age,
            city:req.body.city
        })
        var save_user = await add_user.save();
        res.status('200').json(save_user);
    }catch(err){
        console.log("Error while adding user : "+err);
    }
})

//update user
router.put('/update-user/:id', async(req,res) => {
    try{
        var update_user = await User.updateOne({_id:req.params.id},{$set:{
            user_name:req.body.name,
            user_email:req.body.email,
            age:req.body.age,
            city:req.body.city
        }       
        });   
        res.status('200').json(update_user);
    }catch(err){
        console.log("Error while user update : "+err);
    }
})


//Display user
router.get('/', async(req,res)=>{
    try{
        var users = await User.find();
        res.status(200).json(users);
    }catch(err){
        console.log("Error while displaying user : "+err);
    }
})

//Display Search user
router.get('/:st', async(req,res)=>{
    console.log(req.params.st);
    try{
    var users = await User.find({user_name: {'$regex':req.params.st} });
        res.status(200).json(users);
    }catch(err){
        console.log("Error while displaying user : "+err);
    }
})

//Delete user
router.delete('/remove-user/:id', async(req,res) => {
    try{
        var remove_user = await User.remove({_id:req.params.id});   
        res.status('200').json(remove_user);
    }catch(err){
        console.log("Error in user deletion : "+err);
    }
    
})





module.exports = router;