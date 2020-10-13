import { Injectable } from '@angular/core';
import { User } from '../../../shared/models/User';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userChange$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private router: Router) { }

  setUserChange(value: boolean): void {
    this.userChange$.next(true);
  }

  getUserChange(): Observable<boolean> {
    return this.userChange$.asObservable();
  }

  login(credentials: {username: string, password: string}): Observable<User> {
    // should use real http request instead of mock
    const mockUsername = 'admin';
    const mockPassword = 'admin';
    if (credentials.username === mockUsername && credentials.password === mockPassword) {
      const user = { name: 'John Doe', username: 'admin' };
      localStorage.setItem('user', JSON.stringify(user));
      // userChange$ needs trigger to update user info in Header
      this.setUserChange(true);
      return of(user);
    } else {
      return of(null);
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.setUserChange(false);
    this.router.navigate(['login']);
  }
}
