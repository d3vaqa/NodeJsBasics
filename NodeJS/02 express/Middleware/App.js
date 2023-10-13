const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use('/add-product', ( req, res, next ) =>{
    res.send('<form action="/product"  method="POST"> <input type="text" name="title" /> <button type="submit"> Add product </button> </form>')

})


app.post('/product', ( req, res, next ) =>{
    console.log(req.body)
    res.redirect('/');

})


app.use('/about', ( req, res, next ) =>{
    res.send('<h1> About Page </h1>')

})

app.use('/contact', ( req, res, next ) =>{
    res.send('<h1>  Contact  page</h1>')

})


app.use('/news', ( req, res, next ) =>{
    res.send('<h1> New Page </h1>')

})


app.use('/service', ( req, res, next ) =>{
    res.send('<h1> service Page </h1>')

})


app.use('/', ( req, res, next ) =>{
    res.send('<h1>Home Page </h1>')

})




app.listen(3000)
