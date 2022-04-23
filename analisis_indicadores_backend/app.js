const express = require('express');
const routesV1 = require('./routes/routesV1');

const app = express();


const PORT = 3001;

app.use(express.json());

app.use(
    express.urlencoded({
      extended: true,
    })
);
  

app.get('/', (req, res) => {
    return res.send('<h1>Analisis de Indicadores</h1>')
})

app.use('/api/v1/', routesV1 )

app.listen( PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});