import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  /*
  This could be some fancy logging service which talks to 3rd party software like Sentry or google analytics.
  Instead, it just console.logs the messages for now.
   */
  constructor() {
  }

  public logError(error: string): void {
    console.error(error);
  }

  public logMessage(message: string): void {
    console.log(message);
  }
}
