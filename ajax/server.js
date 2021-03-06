const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file, callback){
        callback(null,'./upload');
    },
    filename: function(req,file,callback){
        callback(null,`${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload',(req,resp) => {
    upload(req,resp,err => {
        if(err){
            return resp.end('Ocorreu um Erro')
        }
        resp.end("Concluido com sucesso.")
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        id: 1,
        ...req.body
        
    })
})
app.get('/teste',(req,res) => res.send('Ok'));
app.listen(8090, () => console.log("Executando..."));
