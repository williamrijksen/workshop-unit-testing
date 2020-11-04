import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Person} from '../../models/person';
import {catchError, map, retry} from 'rxjs/operators';
import {LoggingService} from '../logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public apiUrl = 'https://5fa15fc22541640016b6af23.mockapi.io/';

  constructor(private http: HttpClient, private loggingService: LoggingService) {
  }

  /*
  * @returns an unfiltered list of persons
  */
  public getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl + 'persons')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  /*
  * @returns a list of persons that have been validated by the server, as displayed by the isValidated property
  */
  public getAllValidatedPersons(): Observable<Person[]> {
    return this.getPersons()
      .pipe(
        map((persons: Person[]) => persons.filter(person => person.isValidated)));
  }

  private handleError(error): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.loggingService.logError(errorMessage);
    return throwError(errorMessage);
  }
}