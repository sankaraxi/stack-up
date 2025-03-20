const express = require('express');

const app = express();

app.use("/test/second",(req, res) => {
    res.send('Hello World from my second official server!');
}) 

app.use("/test",(req, res) => {
    res.send('Hello World from my first official server!');
})

app.get('/user', (req, res) => {
    res.send({firstname: 'Sankar', lastname: 'Gnanasekar'});
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});