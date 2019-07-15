const express = require('express');
const path = require('path')
const app = express();
const axios = require("axios");
app.use(express.static(path.join(__dirname, '/dist')));
var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '00000000',
  database : 'my_db'
});
 
connection.connect(function(error) {
    if(!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get("/", function(req, res) {

    connection.query("SELECT * FROM data WHERE material=? and process=? and strain=? and  strain_rate=?",[req.query.material, req.query.process, req.query.strain, req.query.strain_rate],function(error, rows, fields){
        if(!!error) {
            console.log('Error in the query')
        } else {
            console.log('Successful query')
            console.log(res.send(rows))
             //res.sendFile(path.join(__dirname, 'src/assets/', 'logo.png'))
        }
});
})

 

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
`Listening on port ${port}...`);
});