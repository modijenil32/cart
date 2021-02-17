var Product=require('../models/product');
var mongoose=require('mongoose');
const { exists } = require('../models/product');
mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser:true,useUnifiedTopology:true});
var products=[
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description:'Awesome Game 1!!!!!!',
        price:10 
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description:'Awesome Game 2!!!!!!',
        price:10 
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description:'Awesome Game 3!!!!!!',
        price:10 
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description:'Awesome Game 4!!!!!!',
        price:10 
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description:'Awesome Game 5!!!!!! ',
        price:10 
    }),
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description:'Awesome Game 6!!!!!!',
        price:10 
    }),
    
];
var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done==products.length){
            exit();
        }
    });
}  
function exit(){
    mongoose.disconnect();
}