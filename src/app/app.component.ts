import { Component, OnInit } from '@angular/core';
import { GoogleService } from './services/google.service';
import { GoogleAuthService } from 'ng-gapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  /**
   *
   */
  constructor(
    private googleService: GoogleService,
    private googleAuthService: GoogleAuthService
  ) {
    googleAuthService.getAuth().subscribe(isGoogleApiLoaded => {
      if (isGoogleApiLoaded) {
        console.log('Yes, Google API loaded.');
      } else {
        console.log(`No, Google API is not loaded. ${isGoogleApiLoaded}`);
      }
    });
  }

  ngOnInit() {
    this.googleService.user.subscribe(u => {
      console.log(u);
    });
  }
}
