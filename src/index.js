const { response } = require('express');
const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects',(req,res) =>{
    const { title } = req.params;

    const results = title?
    projects.filter(project => project.title.includes(title))
    : projects;
   

    return res.json(results);
});

app.post('project',(req,res) =>{
    const { title, owner } = req.body;

    const project = {id: uuid(), title, owner};

    projects.push(project);

    return res.json(project);
});

app.put('/project:id', (req,res)=>{
    const {id} = req.params;

    const projectIndex = projects.findIndex(project => project.id == id);

    if( projectIndex<0){
        return res.status(400).json({ error:"Project don't exist"})
    }

    const project = {
        id,
        title, 
        owner
    };

    projects[projectIndex] = project;

    return res.json(projects);
});

app.delete('/project:id', (req,res)=>{
    const { id } = req.params;

    const projectIndex = projects.findIndex(project => project.id ==id);

    if( projectIndex <0) {
      return res.status(400).json({ error: 'Project not found'});
    }

    projects.splice(projectIndex,1);

    return res.status(204).send();
});



app.listen("3000",() => { 
    console.log("Connect with server 3000")})