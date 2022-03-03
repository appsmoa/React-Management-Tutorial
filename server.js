const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello',(req,res)=>{
    res.send({message:'Hello Express!'});
})

app.get('/api/customer',(req,res)=>{
    res.send([
        {
          'id' : 1,
          'image' : 'http://placeimg.com/64/64/tech/1', 
          'name' : 'wildbear1'  ,
          'birthday' : '1977/09/31'  ,
          'gender' : '41'  ,
          'job' : 'singer1'  ,
        },
        {
          'id' : 2,
          'image' : 'http://placeimg.com/64/64/tech/2', 
          'name' : 'wildbear2'  ,
          'birthday' : '1977/09/32'  ,
          'gender' : '42'  ,
          'job' : 'singer2'  ,
        },
        {
          'id' : 3,
          'image' : 'http://placeimg.com/64/64/tech/3', 
          'name' : 'wildbear3'  ,
          'birthday' : '1977/09/33'  ,
          'gender' : '43'  ,
          'job' : 'singer3'  ,
         },
         {
           'id' : 4,
           'image' : 'http://placeimg.com/64/64/tech/4', 
           'name' : 'wildbear4'  ,
           'birthday' : '1977/09/34'  ,
           'gender' : '44'  ,
           'job' : 'singer4'  ,
          }
      ]);
});

app.listen(port,() => console.log(`Listening on port ${port}`));