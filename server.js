const express = require('express');
const hbs = require('hbs');


var app = express();
hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname));

hbs.registerHelper('currYear',()=>{
    return new Date().getFullYear();
});
/**app.get('/', (req,res)  =>{
 //res.send('Hello Express!!');
 res.send({ 
     name:'Surendra',
     Contact:452367,
     likes:['asd','sdjh']
    });
    
});
*/
app.get('/',(req,res)=>{
    res.render('home.hbs');
});

/**app.use((req,res,next)=>{
    res.render('maintenance.hbs');
    next();
});*/
app.get('/login',(req,res)=>{
    res.render('login.hbs',{
        name:'Surendra'
    });
});

app.listen(3000);