import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Update the import path if your environment file is located elsewhere, for example:
import { environment } from '../../environments/environments';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API = environment.API_URL; // http://127.0.0.1:8000

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ ok: boolean; redirect: string }>(
      `${this.API}/api/auth/login/`,
      { username, password }
    );
  }

  isLoggedIn() { return false; }
  logout() {}
}
