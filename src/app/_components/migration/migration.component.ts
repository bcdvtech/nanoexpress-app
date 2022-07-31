import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-migration',
  templateUrl: './migration.component.html',
  styleUrls: ['./migration.component.css']
})
export class MigrationComponent implements OnInit {

  public selectedChannel:string | number | null = null;

  public channelList: Array<{
    id:number, name:string
  }> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
