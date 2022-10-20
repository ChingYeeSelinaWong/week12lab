import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { Router } from "@angular/router";
interface translation{
  text:string;
  translate:string;
  lang:string;
}
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  socket:any;
  text1:String = "";
  translates:translation[] = [];
  lang:string = ""
  
  constructor(private router: Router) {}

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
    console.log(obj.text);
    this.socket.emit("text",obj);
  }

}
