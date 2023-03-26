const express = require("express");
const app = express();
const db = require('./connection');

const postModel = require('./postModel') ;
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post('/', async(req, res)=>{
    const {name,mail} = req.body;

    try {
        const newPost = await postModel.create({name, mail});
        res.json('Created Successfully')
    } catch (error) {
        res.status(500).send(error)
    }

});

app.get('/', async(req, res)=>{
    try {
        const posts = await postModel.find();
        res.json(posts);
    } catch (error) {
        res.status(500).send(error)
    }

});


app.get('/:id', async(req, res)=>{
    const {id} = req.params;
    try {
        const post = await postModel.findById(id);
        res.json(post);
    }catch (error) {
        res.status(500).send(error)
    }

});


app.put('/:id', async(req, res)=>{
    const {id} = req.params;
    const {name, mail} = req.body;
    try {
        const post = await postModel.findByIdAndUpdate(id, {name, mail});
        res.json('Updated Successfully')

    }catch (error) {
        res.status(500).send(error)
    }

});



app.delete('/:id', async(req, res)=>{
    const {id} = req.params;
    const {name, mail} = req.body;
    try {
        const post = await postModel.findByIdAndDelete(id, {name, mail});
        res.json('Deleted Successfully');
   
    }catch (error) {
        res.status(500).send(error)
    }

});

app.listen(3001, () => {
    console.log('running on port 3001')
})