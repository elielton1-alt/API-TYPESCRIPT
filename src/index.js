const express = require('express');

const app = express();

app.use(express.json());

app.get('/project',(req,res) =>{
    const {title, owner} = req.query;

    console.log(title);
    console.log(owner);

    return res.json([
        'Project 1',
        'Project 2'
    ]);
});

app.post('project',(req,res) =>{
    return res.json([
        'Projeto 1',
        'projeto 2',
        'projeto 3'
    ]);
});

app.put('/project:id', (req,res)=>{
    return res.json([
        'projeto 4',
        'projeto 5',
        'projeto8'
    ]);
});

app.delete('/project:id', (req,res)=>{
    return res.json([
        'projeto 5',
        'projeto8'

    ]);
});



app.listen("3000",() => { 
    console.log("Connect with server 3000")})