const express=require('express');
const app=express();

app.use(express.json());

//Rutas
app.get('/',(req,res)=>{
    res.send('{ "Folio":"111AA", "Marca":"Ford", "Modelo":"Ka", "Año":2015 }');    
});
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('Peticion Por POST Recibida');
});
app.put('/',(req,res)=>{
    res.send('Respuesta de Peticion por PUT Recivida');
});
app.delete('/',(req,res)=>{
    res.send('Respuesta de Peticion por DELETE Recivida');
});

app.listen(4500,()=>{
    console.log('Serve ON Oort 4500');
});