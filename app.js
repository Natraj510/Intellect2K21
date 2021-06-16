const express = require('express')
const app = express()
const PORT = 5000

app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req,res) =>{
    res.render('index')
})

app.get('/artella', (req,res) =>{
    res.render('artella')
})

app.get('/valo', (req,res) =>{
    res.render('valo')
})

app.get('/Cookaholics', (req,res) =>{
    res.render('Cookaholics')
})

app.get('/essay', (req,res) =>{
    res.render('essay')
})

app.get('/photo', (req,res) =>{
    res.render('photo')
})

app.get('/voice', (req,res) =>{
    res.render('voice')
})

app.get('/reels', (req,res) =>{
    res.render('reels')
})

app.get('/meme', (req,res) =>{
    res.render('meme')
})

app.get('/reachout', (req,res) =>{
    res.render('reachout')
})

app.get('/crossword', (req,res) =>{
    res.render('crossword')
})

app.get('/about', (req,res) =>{
    res.render('about')
})




app.listen(PORT,()=>{
    console.log("server running");
})


