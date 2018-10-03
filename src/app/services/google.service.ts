import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GoogleAuthService } from 'ng-gapi';

import GoogleUser = gapi.auth2.GoogleUser;

@Injectable()
export class GoogleService {
  public static readonly SESSION_STORAGE_KEY: string = 'googleAPIAccessToken';
  private $user: Subject<GoogleUser> = new Subject<GoogleUser>();

  constructor(
    private googleAuthService: GoogleAuthService,
    private ngZone: NgZone
  ) {}

  public get user() {
    return this.$user;
  }
}
