import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vimo',
  templateUrl: './vimo.component.html',
  styleUrls: ['./vimo.component.css']
})
export class VimoComponent implements OnInit {

  readonly baseUrl:string = "https://player.vimeo.com/video/";

  @Input() videoId:string = '';
  @Input() hashParam:string = '';

  public url:string = '';

  constructor(private _sanitizer: DomSanitizer) { }

 
  ngOnInit(): void {
  }

  public sanitizeUrl(videoURL:string){
    let src = this.baseUrl+videoURL;
    return this._sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
