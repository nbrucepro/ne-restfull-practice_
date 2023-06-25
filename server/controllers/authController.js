const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User1');

const register = async (req,res) => {
    const {username,email,password} = req.body.signupState;
    console.log(req.body)

    try{
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(hashedPassword);
        const user = new User({username,email,password:hashedPassword});
        await user.save();
        const token = jwt.sign({userId:user._id}, 'secret_key');        
        res.status(201).json({message:"User registered successfully!", user,token })
    }
    catch(error){
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
}

const login = async (req,res) => {
    const {email,password} = req.body.loginState;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        console.log(user);
        console.log(password);
        const passwordMatch = await bcrypt.compare(password,user.password);
        if(!passwordMatch){
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({userId:user._id}, 'secret_key');
        res.json({token});
    }
    catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'An error occurred' });
      }
}

module.exports = {
    register,
    login
}