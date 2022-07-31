import { Component, OnInit } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-live-streaming',
  templateUrl: './live-streaming.component.html',
  styleUrls: ['./live-streaming.component.css']
})
export class LiveStreamingComponent implements OnInit {

  public videoUrl:string="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8";
  public videoOptions:any ={
    sources:{
      'src': 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
      'type': 'application/x-mpegURL'
    }
  };

  public streamList:any = [
    {
      'channel': 1,
      'genre': 'entertainment, game',
      'title': 'truc',
      'description': 'desc',
      'tags': 'tg',
      'serverUrl': '5BDZGUBbZmM',
      'mobileUrl': '5BDZGUBbZmM',
      'key': 'key'
    }
  ];
  public displayStyle:string = 'none';
  public displayStyle2:string = 'none';

  public channels = [
    {id:1, name: 'youtube'},
    {id:2, name: 'vimo'},
    {id:3, name: 'facebook'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public publish(){
    this.videoOptions.sources.src = this.videoUrl;
  }

  public createNewStream(){
    this.displayStyle = "block";
  }

  public closePopup(index:number =1){
    if(index == 1){
      this.displayStyle = "none";
    }
    if(index == 2){
      this.displayStyle2 = "none";
    }

  }

  public updateStream(data:any){

    this.streamList.push(data);
    this.closePopup(1);
  }

  public selectedStream:any = {
    serverUrl: null
  };

  public onView(index:number){
    let obj = this.streamList[index];
    this.selectedStream = obj;

    this.displayStyle2 = "block";
  }

}
