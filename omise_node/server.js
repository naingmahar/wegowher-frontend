const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");
const LocalOmise  = require("./LocalOmise");

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post("/token",(req,res)=>{
    let body = req.body
    console.log("Req",body)
    LocalOmise.getToken(body)
        .then((props)=>{
            console.log(props)
            res.status(200).send(props)
        })
        .catch((error)=>{
            console.log("ERROR",error.data)
            res.status(500).send(error)
        })
})

app.post("/charge",(req,res)=>{
    let body = req.body
    console.log("Req",body)
    LocalOmise.payNow(body)
        .then((props)=>{
            console.log(props)
            res.status(200).send(props)
        })
        .catch((error)=>{
            console.log("ERROR",error.data)
            res.status(500).send(error)
        })
})

app.get("/charge-list",(req,res)=>{
    LocalOmise.charge_list()
        .then((props)=>{
            console.log(props)
            res.status(200).send(props)
        })
        .catch((error)=>{
            console.log("ERROR",error.data)
            res.status(500).send(error)
        })
})

app.get("*",(req,res)=>{
    console.log(req.headers.host)
    res.send("Error")
})

app.post("*",(req,res)=>{
    console.log(req.headers.host)
    res.send("Error")
})



app.listen(8085,()=>{
    console.log("Server Start")
})