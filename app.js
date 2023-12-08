const express = require('express');
const bodyparser = require('body-parser')
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
const port = process.env.port || 8080;

const userRoute = require('./routes/userRoute');

app.use(userRoute);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('pulic'));

app.listen(port, (err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`port is listening on ${port}`)
    }
});