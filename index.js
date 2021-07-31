const express = require('express');  
const app = express();  
var cors = require('cors')
const totp = require("totp-generator");

app.listen(3000);
app.use(cors())


app.get('/:id', (req,res) => {
    const id = req.params.id;
    var iid =JSON.parse(id)
    const response = clientdata(iid);
    res.send(response)

})


function clientdata(datas) {
    datas.map((e) => {
    let tempObject = e
    e.code = totp(e.key)
   return tempObject
    })
    return datas
  }
