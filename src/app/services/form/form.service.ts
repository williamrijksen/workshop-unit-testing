import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public subject: Subject<number> = new Subject();
  constructor() { }

  public submitFormDetails(age): void {
    // This method simulates a call to a backend which determines the year based on your age (PS. Its not very accurate)
    // This http call then sets a variable in the subject
    this.subject.next(new Date().getFullYear() - age);
  }
}
