const express = require ('express');
const app = express();
const port = process.env.PORT || 5000;



app.get("/", (req, res)=>{
    res.send("hello world");
});

const users =[
    {id:0, name:"hasna", age:'23', gender:'female'},
    {id:1, name:"jogonmoy das", age:'23', gender:'female'},
    {id:2, name:"donald trump", age:'23', gender:'female'},
    {id:3, name:"asif akbar", age:'23', gender:'female'},
    {id:4, name:"shapla rani das", age:'23', gender:'female'},
]


app.get('/users', (req, res)=>{

//use query parameter
const search = req.query.search;
const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
if(search){
    res.send(searchResult)
}else{
    res.send(users);
}

    
})
//dinamic api
app.get("/users/:id", (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    
})


app.get('/fruits', (req, res)=>{
    res.send(['mangos', 'oranges', 'apple', 'banana'])
})


app.get('/fruits/mangos/fazli', (req, res)=>{
    res.send('tok marka fazli');
})




app.listen(port, ()=>{
    console.log(`listening from my first port ${port}`);
})