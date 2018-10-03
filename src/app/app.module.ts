import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgGapiClientConfig, GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';
import { GoogleService } from './services/google.service';


/**
 * Google API Mocks
 */
const gapiClientConfig: NgGapiClientConfig = {
  client_id: '278271280269-9qqp94frjn8704il43osshoj0p6a78hh.apps.googleusercontent.com',
  discoveryDocs: [
    'https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'
  ],
  scope: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.readonly',
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/spreadsheets.readonly'
  ].join(' ')
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  providers: [GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
