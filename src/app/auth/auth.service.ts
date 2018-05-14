import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

export interface AuthChange {
  logged: boolean,
  user: any
}

@Injectable()
export class AuthService {
  authChanges = new Subject<AuthChange>();
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged( (user) => {
      if (user) {
        this.authChanges.next({
          user,
          logged: true
        });
      } else {
        this.authChanges.next({
          user: null,
          logged: false
        });
      }
    });
  }

  registerUser(authData: AuthData) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    this.afAuth.auth
      .setPersistence('local')
      .then( () => this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password) )
      .then(result => {
        this.authSuccessfully();
        console.log(result.user.getIdToken());
        console.log(result.user.uid);
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/app']);
  }

}
