var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname+'/'));

app.get('/', function (req,res) {
    res.render('index.html');
});

app.get('/addTwoNumbers', function (req,res) {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseInt(num1) + parseInt(num2);
    let response = {data:result, message:'sucess', statusCode:200}
    res.json(response);
});

app.listen(port, ()=>{
    console.log(`Web server running at: http://localhost:${port}`);
    console.log("Type Ctrl+C to shut down the web server");
});