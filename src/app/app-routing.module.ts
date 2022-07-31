import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';

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

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'edit',
    component: EditPageComponent
  },
  {
    path: 'merge-videos',
    component: MergeVideosComponent
  },
  {
    path: 'podcast',
    component: PodCastComponent
  },
  {
    path: 'connections',
    component: ConnectionsComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'live-streaming',
    component: LiveStreamingComponent
  },
  {
    path: 'monetization',
    component: MonetizationComponent
  },
  {
    path: 'processing',
    component: ProcessingComponent
  },
  {
    path: 'migration',
    component: MigrationComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
