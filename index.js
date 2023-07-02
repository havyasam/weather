const express=require('express')
const app=express()
const port=3001
const path=require('path')
const request=require('request')
const bodyparser=require('body-parser')
const http=require("https")
const { response } = require('express')

app.get('/',(req,res)=>{

    const url="https://api.weatherbit.io/v2.0/current?city=bangalore&key=f25cbe317d56483d91aabcf718831998"
    http.get(url,function(response){
        console.log(response.statusCode)

        response.on("data",function(data){
            const weather=JSON.parse(data)
            console.log(weather)
        })
    })
res.send(url)

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  