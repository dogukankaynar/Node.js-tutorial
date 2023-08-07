const express = require('express')
const app = express();
const port =3000;

app.get("/",(req,res)=>{
    res.status(200).send("Hello word")
})

app.get('/about',(req,res)=>{
    res.status(200).send("About page")
})

app.get('*',(req,res)=>{
    res.status(404).send('404 sayfa bulunamadı')
})

app.listen(port,()=>{
    console.log(`sunucu ${port} de çalısıyor`);
})