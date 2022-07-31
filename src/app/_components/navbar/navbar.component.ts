import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public currentNavLink:number = 0;

  public navLinks:Array<{
    id:number,
    name:string,
    active:boolean,
    path:string
  }> = [
    {id:1, name:'Home', path:'/', active:true},
    {id:2, name:'Edit', path:'edit', active:false},
    {id:3, name:'Merge Videos', path:'merge-videos', active:false},
    {id:4, name:'Podcast', path:'podcast', active:false},
    {id:5, name:'Connections', path:'connections', active:false},
    {id:6, name:'Users', path:'users', active:false},
    {id:7, name:'Live Streaming', path:'live-streaming', active:false},
    {id:8, name:'Monetizing', path:'monetization', active:false},
    {id:9, name:'Processing', path:'processing', active:false},
    {id:10, name:'Migration', path:'migration', active:false},
    {id:11, name:'Help', path:'help', active:false}
  ];

  ngOnInit(): void {
  }

  public onChangeNav(index:number){

    this.navLinks[this.currentNavLink].active = false;
    this.navLinks[index].active = true;
    this.currentNavLink = index;
  }

}
