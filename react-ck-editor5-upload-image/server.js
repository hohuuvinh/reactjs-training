const express = require('express');
const bodyparser = require ('body-parser');
const multiparty = require('connect-multiparty');
const { error } = require('console');

const path = require('path');

const fs = require('fs');



const PORT = process.env.PORT ||  8000;
const app = express();

const MuiltiPartyMiddleware = multiparty({uploadDir:"./images"});
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


app.get('/', ( req, res) =>{
    res.status(200).json(
        {
            message: "Data Ready And server Also"
        }
    )
});

 app.use(express.static("uploads"));

app.post('/upload', MuiltiPartyMiddleware, (req, res) =>{
    
    var TempFile = req.files.upload;
    var TempPathfile = TempFile.path;

   const targetPathUrl = path.join(__dirname,"./uploads/"+TempFile.name);

   if(path.extname(TempFile.originalFilename).toLowerCase() === ".png" || ".jpg"){
     
    fs.rename(TempPathfile, targetPathUrl, err =>{

        res.status(200).json({
         uploaded: true,
          url: `${TempFile.originalFilename}`
        });

        if(err) return console.log(err);
    })
   }


    console.log(req.files);
})


app.listen(PORT, console.log(`Server Started at PORT :${PORT}`))