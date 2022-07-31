import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './_components/layout/layout.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { EditPageComponent } from './_components/edit-page/edit-page.component';
import { MergeVideosComponent } from './_components/merge-videos/merge-videos.component';
import { PodCastComponent } from './_components/pod-cast/pod-cast.component';
import { ConnectionsComponent } from './_components/connections/connections.component';
import { UserComponent } from './_components/user/user.component';
import { LiveStreamingComponent } from './_components/live-streaming/live-streaming.component';
import { MonetizationComponent } from './_components/monetization/monetization.component';
import { ProcessingComponent } from './_components/processing/processing.component';
import { MigrationComponent } from './_components/migration/migration.component';
import { HelpComponent } from './_components/help/help.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoComponent } from './_components/video/video.component';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { YoutubeComponent } from './_components/sources/youtube/youtube.component';
import { AddStreamComponent } from './_components/live-streaming/add-stream/add-stream.component';
import { EditStreamComponent } from './_components/live-streaming/edit-stream/edit-stream.component';
import { VimoComponent } from './_components/sources/vimo/vimo.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    HomepageComponent,
    EditPageComponent,
    MergeVideosComponent,
    PodCastComponent,
    ConnectionsComponent,
    UserComponent,
    LiveStreamingComponent,
    MonetizationComponent,
    ProcessingComponent,
    MigrationComponent,
    HelpComponent,
    VideoComponent,
    YoutubeComponent,
    AddStreamComponent,
    EditStreamComponent,
    VimoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
