import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-stream',
  templateUrl: './add-stream.component.html',
  styleUrls: ['./add-stream.component.css']
})
export class AddStreamComponent implements OnInit {

  @Input() channelList:Array<any> = [];

  @Output() updateStream = new EventEmitter<any>();

  public selectedChannel:any = null;
  public selectedGenre:any = null;
  public liveStreamTitle:string = '';
  public description:string = '';
  public tags:string = '';
  public streamServerUrl = '';
  public streamMobileUrl = '';
  public streamKey = '';

  public genreList = [
    {id:1, name:'gaming'},
    {id:2, name:'education'},
    {id:3, name:'entertainment'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public onCreate(){
    let value = {
      'channel': this.selectedChannel,
      'genre': this.selectedGenre,
      'title': this.liveStreamTitle,
      'description': this.description,
      'tags': this.tags,
      'serverUrl': this.streamServerUrl,
      'mobileUrl': this.streamMobileUrl,
      'key': this.streamKey
    };
    this.updateStream.emit(value);
  }

}
