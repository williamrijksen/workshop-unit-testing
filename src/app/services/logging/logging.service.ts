import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() {
  }

  // This method could do something fancy such as logging it in 3rd party software. For now, it just console logs it.
  public logError(error: string): void {
    console.error(error);
  }
}
