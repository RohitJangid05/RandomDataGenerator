const express = require('express')
const mongoose = require('mongoose')
const Employee = require('./model/employee')
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/employee');
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('public'));


let random = (arr) => {
    let randomNum = Math.floor((Math.random() * (arr.length - 1)))
    return (arr[randomNum])
}

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/generate', async (req, res) => {

    await Employee.deleteMany({});
    let Ename = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack", "Katherine", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Taylor"];
    
    let Eposition = ["Software Engineer","Data Scientist","Web Developer","Network Engineer","System Administrator","Database Administrator","IT Project Manager","UI/UX Designer","Security Analyst","DevOps Engineer","QA Engineer","Business Analyst","IT Support Specialist","Network Administrator","Technical Writer","IT Consultant","Cloud Solutions Architect", "Machine Learning Engineer", "Cybersecurity Specialist", "IT Director",
    ]

    // let Elan = ["Python", "C++", "C", "Java"];
    let Ecity = ["Bengluru", "Pune", "Nodia", "Gurugoan", "Mumbai", "Chennai", "Hydrebad"];

    for (i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: random(Ename),
            salary: Math.floor(Math.random() * 20000),
            position: random(Eposition),
            city: random(Ecity)
        })
    }
    res.render('index');

})

app.get('/data', async (req, res) => {
    const data = await Employee.find();
    res.render('data', { data });
});


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})