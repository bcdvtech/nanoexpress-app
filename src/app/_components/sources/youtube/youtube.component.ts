import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  @Input() url:string = '';
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  public sanitizeUrl(videoURL:string){
    let src = "https://www.youtube.com/embed/"+videoURL;
    return this._sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
