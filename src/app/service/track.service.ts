import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  logEvents = [];
  constructor() {}
  log(e) {
    this.logEvents.unshift(e);
  }
}
