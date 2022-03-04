const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : conf.host,
  user : conf.user,
  password : conf.password,
  port : conf.port,
  database : conf.database 
});
connection.connect();

const multer = require('multer');
const upload = multer({dest:'./upload'})

app.get('/api/hello',(req,res)=>{
    res.send({message:'Hello Express!'});
})

app.get('/api/customer',(req,res)=>{
    connection.query(
      "SELECT * FROM CUSTOMER WHERE IsDeleted=0",
      (err, rows, fields) => {
        res.send(rows);
      }
    )
});

app.get('/api/customer/insertsample',(req,res)=>{
  connection.query(
    `INSERT INTO CUSTOMER  (image, name, birthday, gender, job, RDATE)
    VALUES ('http://placeimg.com/64/64/tech/X', 'wildbearX', '1977/09/3X', '4X', 'singerX', NOW())`,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.use('/image',express.static('./upload'));
app.post('/api/customers',upload.single('image'),(req,res)=>{
  let sql = "INSERT INTO CUSTOMER VALUE (null,?,?,?,?,?,0,now(),null)";

  let image = '';
  
  if (req.file){
    image = 'http://localhost:5000/image/' + req.file.filename; 
  } else {
    image = 'http://placeimg.com/64/64/tech/X'; 
  }
  
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday,gender,job];
  connection.query(sql, params,
    (err,rows,fields)=>{
      res.send(rows);
    }
  );
})
app.delete('/api/customers/:id',(req,res) => {
  let sql = 'UPDATE CUSTOMER SET isDeleted=1, UDATE=now() WHERE id=? ';
  let params = [req.params.id];
  connection.query(sql, params,
    (err,rows,fields)=>{
      res.send(rows);
    }
  );
})
app.listen(port,() => console.log(`Listening on port ${port}`));