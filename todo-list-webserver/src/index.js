const express = require('express')
const path = require('path');
const app = express()

// Sets path for view files
app.set('views', path.resolve( __dirname, 'views' ) );

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

const todos = require('./routes/todos')
app.use('/', todos)


app.listen(3000)
console.log('Server running on localhost:3000')