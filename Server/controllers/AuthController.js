const jwt= require('jsonwebtoken')

// const register= (req,res,next) =>{
//     bcrypt.hash(req.body.password,10,function(err,hashedPass) {
//         if(err) {
//             res.json({
//                 error:err
//             })
//         }
//         let user=new User({
//             name:req.body.name,
//             email:req.body.email,
//             phone:req.body.phone,
//             password:hashedPass
//         })
//         user.save()
//         .then(user => {
//             res.json({
//                 message:'User Added Successfully!'
//             })
//         })
//         .catch(error => {
//             res.json({
//                 message:'An error Occured!'
//             })
//         })
//     })

// }

// module.exports ={
//     register
// }
const User = require('../model/User');
const bcrypt = require('bcryptjs');

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if (err) {
            res.status(500).json({
                error: err
            });
        } else {
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: hashedPass
            });
            user.save()
                .then(user => {
                    res.status(201).json({
                        message: 'User Added Successfully!'
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'An error Occurred!'
                    });
                });
        }
    });
};

const login =(req,res,next) =>{
    var username= req.body.username
    var password=req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token=jwt.sign({name: user.name},'thesecrettoken',{expiresIn:'23h'})
                    let refreshtoken=jwt.sign({name: user.name},'fefreshtoensecret',{expiresIn:'48h'})
                    res.json({
                        message:'Login Successful!',
                        token,
                        refreshtoken
                    })
                }else{
                    res.json({
                        message:'Password does not matched!'
                    })
                }
            })
        }else{
            res.json({
                message:'No user found!'
            })
        }
    })
}
module.exports = {
    register,login
};
