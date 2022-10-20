import { Component } from '@angular/core';
import { io } from 'socket.io-client';
interface translation{
  text:string;
  translate:string;
  lang:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'translate';
  socket:any;
  text1:String = "";
  translates:translation[] = [];
  lang:string = ""
  ngOnInit(){
    this.socket = io(); //send a connection event/request to the server
    this.listen2Events();
  }
  listen2Events(){
    this.socket.on('onText',(data:any)=>{
      this.translates.push(data)
    })
  }
  sendText(){
    let obj = {
      text:this.text1,
      lang:this.lang
    }
    this.socket.emit("text",obj);
  }
}
