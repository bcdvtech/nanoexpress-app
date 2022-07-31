import { Component, ElementRef, Input, OnDestroy, 
  OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from 
  '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoComponent implements OnInit, OnDestroy {

  @ViewChild('target', {static: true}) target!: ElementRef;
  

  @Input() options!: {
    height: 300,
    width: 600,
    controls: true,
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    sources: {
        src: string,
        type: string,
    }[],
};

@Input() url:string = "";

public player!: videojs.Player;

  constructor(
    private elementRef: ElementRef,
  ) { }
  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }

  ngOnInit(): void {
  
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    })
  }

  ngOnChanges(changes: SimpleChanges){

    for(let i in changes){
      if(i == "options"){
       
        if(changes[i].currentValue !== changes[i].previousValue){
       
          //console.dir( this.player.paused);
          if(this.player !== undefined){
            console.dir( this.player);
            if(!this.target.nativeElement.paused){
              this.target.nativeElement.pause();
            }
            this.options = changes[i].currentValue;
            this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
              console.log('onPlayerReady', this);
            });
          }
            //this.player.src = changes[i].currentValue;
            //this.target.nativeElement.load();
          }
  
        }
        break;
      }
    }
    
  }
