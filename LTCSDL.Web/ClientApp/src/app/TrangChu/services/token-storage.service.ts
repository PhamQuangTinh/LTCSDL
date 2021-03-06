import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLE_KEY = 'role-user';

@Injectable({
  providedIn: 'root'
})
export class  TokenStorageService {
  user: any = {
    id: 0,
    username: "",
    password: "",
    roleid: 0,
    accessToken: "",
    refreshToken: "",
    ho: "",
    ten: "",
    email: "",
    sdt: "",
    role: [],
    transaction: []
  }
  constructor() { }

  signOut() {
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    if(localStorage.getItem(USER_KEY) === null){
      return this.user;
    }
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  public saveRole(user) {
    window.localStorage.removeItem(ROLE_KEY);
    window.localStorage.setItem(ROLE_KEY, JSON.stringify(user));
  }

  public getRole() {
    return JSON.parse(localStorage.getItem(ROLE_KEY));
  }
}