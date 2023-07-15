const express=require('express');
const app=express();
const path=require('path');

// Pone a disposicion el contenido de la carpeta 'public' desde cualquier archivo /ruta
/* app.use(express.static(path.resolve(__dirname,'./public'))); */
app.use(express.static('public'));

const port=3030;

app.listen(port, ()=>(console.log(`Server up: port:${port}`)));
app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})