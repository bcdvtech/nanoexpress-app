import { Component, OnInit } from '@angular/core';
import { INavLink } from './InavLinks';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent implements OnInit {

  constructor() { }

  public selectedChannel:any = null;
  public channelList:Array<{
    id:number,
    name:string
  }> = [];

  public navLinks:Array<INavLink> = [
    { 'id':1, 'name':'Location', 'active':true},
    { 'id':2, 'name':'Content Override Preference', 'active':false},
    { 'id':3, 'name':'Video Upload', 'active':false}
  ];

  public selectedTab:INavLink |null = null;

  ngOnInit(): void {
    this.selectedTab = this.navLinks[0];
  }

  public onChangeNav(index:number){
    for(let i in this.navLinks){
      if(this.navLinks[i].active){
        this.navLinks[i].active = false;
      }
    }
    this.navLinks[index].active = true;
    this.selectedTab =  this.navLinks[index];
  }

}
