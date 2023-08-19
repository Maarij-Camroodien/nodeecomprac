const {express} = require('./controller')
const path = require('path')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandeling = require('./middleware/ErrorHanding')
const port = +process.env.PORT || 3000

app.use(express.static('./static/html/index.html'))

app.use(
    express.json(),
    express.urlencoded({
        extented: true,
    }),
    cookieParser(),
    cors(),
    routes
)

routes.get('^/$|/challenger', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
})
app.listen(port, ()=>{
    console.log(`You are on port: ${port}`)
})

app.use(errorHandeling)