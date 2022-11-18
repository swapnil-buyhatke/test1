var express = require('express');
var app = express();
var port = 3000;
app.use('/*', (req,res)=>{res.send("HJ")});

app.listen(port, () => {
  console.log(`Oauth test server running on port ${port}`);
})
