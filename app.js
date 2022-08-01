const express = require('express')
const path = require('path')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

//for static files
app.use('/static', express.static('static'))

//for storing user filled data, if any
app.use(express.urlencoded())

//for template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'template'))

//end points
app.get("/", (req, res)=>{
    res.status(200).render('home.pug', {}); //{} mean no parameter passed.
})
app.get("/contact", (req, res)=>{
    res.status(200).render('contact.pug', {}); //{} mean no parameter passed.
})
app.get("/about", (req, res)=>{
    res.status(200).render('about.pug', {}); //{} mean no parameter passed.
})
app.get("/services", (req, res)=>{
    res.status(200).render('services.pug', {}); //{} mean no parameter passed.
})
app.get("/bulletin", (req, res)=>{
    res.status(200).render('bulletin.pug', {}); //{} mean no parameter passed.
})

//start the server
app.listen(port, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`)
})
