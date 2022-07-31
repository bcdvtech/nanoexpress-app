import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  public selectedChannel:any = null;
  public channelList:Array<{id:number, name:string}> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public onShare(){
    
  }

}
