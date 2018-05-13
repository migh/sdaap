import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage:any;
  JSON:any;

  constructor() {
    this.localStorage = (<any>window).localStorage;
    this.JSON = (<any>window).JSON;
  }

  save(key: string, value: any) {
    try {
      this.localStorage.setItem(key, this.JSON.stringify(value));
    } catch (e) {
      this.handleException(e);
    }
  }

  load(key: string) {
    try {
      const item = this.localStorage.getItem(key);
      return this.JSON.parse(item);
    } catch (e) {
      this.handleException(e);
    }
  }

  delete(key: string) {
    try {
      this.localStorage.removeItem(key);
    } catch (e) {
      this.handleException(e);
    }
  }

  handleException(e) {
    console.error('Something bad just happened.');
  }
}
