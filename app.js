const express =require('express');
const app=express();
const path=require('path');
const server=require('http').Server(app);
const io=require('socket.io')(server);

const {Translate} = require('@google-cloud/translate').v2;
let projectId = "123"
let translate = new Translate({
  projectId
});
server.listen(8080);
app.use(express.static(path.join(__dirname,"dist","translate")));

let tr = {
    text:'',
    lang:''
}

io.on('connection',(socket)=>{
    console.log("111111111111111111111111");
    socket.on('text',data=>{
        tr = data; 
        console.log(tr.text);
        console.log(tr.lang);   
        async function quickStart() {
            const [translation] = await translate.translate(tr.text, tr.lang);
            let obj = {
                text:tr.text,
                translate:translation,
                lang:tr.lang
            }
            io.emit('onText',obj);
          }
        quickStart();
        
    })
});

