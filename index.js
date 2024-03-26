require('dotenv').config()

const express = require('express');
const app = express();
const port = 4000;

app.get('/',(req,res) => {
    res.send('Hello Word')
})

app.get('/facebook',(req,res) => {
    res.send('Hello Facebook')
})

app.get('/login',(req,res) => {
    res.send('<h1>Pleas Login First.</h1>')
})

app.listen(process.env.PORT , () => {
    console.log(`Example App Listening on post ${port}`)
})