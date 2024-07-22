const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const User = require('./models/User')

const Movie = require('./models/movie')

const homeRoutes = require('./routes/homeRoutes')

const userRoutes = require('./routes/userRoutes')

const movieRoutes = require('./routes/movieRoutes')

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
    helpers: {
        Equal: function (a, b) {
            return a === b;
        }
    }
});

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/', homeRoutes)

app.use('/users', userRoutes)

app.use('/movies', movieRoutes)

conn.sync().then(()=>{
    app.listen(3000)
}).catch((err)=> console.log(err))