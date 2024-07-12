const express=require('express')
const mysql=require('mysql2')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
password:'root',
   database:'aits'

}) 
db.connect(function(error) {
    if(error) {
        console.log("connection unsec")
       return;
        }
else {
    console.log("connection sucessfull")
}
})
app.get('/get-users',function(req,res){
    db.query('SELECT * from student',function(err,result){
        res.json(result);
    })
})
app.post('/add-student',function(req,res) {
    const{studid,name,phoneno}=req.body;
    console.log(req.body);
    const insertquery="insert into student(name,age)" values(?,?,?)
    db.query(insertquery,[name,age],
        function(err,res) {
            if(err) {
                console.log(err.sqlmessage);
                res.status(500).send('error inserting data');
                return;
            }
        else {
            res.json({text:'success is inserting'})
        }
        })
    })
    app.listen(8080);
        
