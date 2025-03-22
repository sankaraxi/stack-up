const express = require('express');
const connectDB = require('./src/config/database');
const User = require('./src/models/user');
const app = express();


app.use(express.json());

app.post('/signup', (req, res) => {
    // console.log(req.body);
    const user = new User(req.body)
    try{
        user.save();
        res.send("User created successfully");
    }catch(err){
        res.status(400
        ).send(err);  
    }
})

connectDB().then(() => {
    console.log('Database connected');
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
}).catch((err) => {
    console.log('Database connection failed');
});
