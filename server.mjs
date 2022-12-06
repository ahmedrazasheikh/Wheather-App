import express from 'express';
import path from 'path';
import cors from 'cors';
const app = express()
const port = process.env.PORT || 5001;

app.use(cors());

app.get('/weather', (req, res) => {
    console.log("request ip: ", req.ip);
    
    res.send({
        temp: 30,
        min: 26,
        max: 31,
        humidity: 72,
        serverTime: new Date().toString()
    });
})
app.get('/time', (req, res) => {
    console.log("request ip: ", req.ip);
    res.send('Hello World! ' + new Date().toString());
})

const __dirname = path.resolve();
console.log(__dirname)
app.use('/', express.static(path.join(__dirname, './Web/build')))
app.use('*', express.static(path.join(__dirname, './Web/build')))


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})