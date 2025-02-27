const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionsRouter = require('./routes/promotionsRouter');
const partnersRouter = require('./routes/partnersRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/campsites', campsiteRouter)
app.use('/promotions', promotionsRouter)
app.use('/partners', partnersRouter)




// app.get('/campsites/:campsiteId', (req, res) => {
//     res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`); 
// }); 

// app.post('/campsites/:campsiteId', (req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
// });

// app.put('/campsites/:campsiteId', (req, res) => {
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`)
//     res.end(`Will update the campsite: ${req.body.name} with description: ${req.body.description}`);
// });

// app.delete('/campsites/:campsiteId', (req, res) => {
//     res.end(`Deleting the campsite: ${req.params.campsiteId}`)
// })



app.use(express.static(__dirname + '/public'))
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
});

app.listen(port, hostname, () => {
    console.log(`Server spinning on http://${hostname}:${port}`)
})