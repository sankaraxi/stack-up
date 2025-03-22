const express = require('express');
const connectDB = require('./src/config/database');
const User = require('./src/models/user');
const app = express();

app.post('/signup', (req, res) => {
    const user = new User({
        firstName: "MS",
        lastName: "Dhoni",
        email: "msdhoni.csk@gmail.com",
        password: "sakshi",
        age: 40,
        gender: "Male"
    })

    user.save();
    res.send("User created successfully");
})

connectDB().then(() => {
    console.log('Database connected');
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
}).catch((err) => {
    console.log('Database connection failed');
});
