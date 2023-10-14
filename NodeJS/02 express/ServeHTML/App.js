const express = require('express');
const path = require('path')
const adminRoutes = require('./routes/admin');
const shopRoute = require('./routes/shop');
const app = express();



app.use(express.urlencoded({ extended: true }));


app.use('/admin', adminRoutes);
app.use(shopRoute);

 
app.use('/', (req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(3000);
